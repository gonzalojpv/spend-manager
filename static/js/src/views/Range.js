// Range.js

define([
	'views/SpendManager',
	'models/Range',
	'flat-ui-utils'
], function (SpendManagerView, RangeModel) {
	var RangeView = SpendManagerView.extend({
		defaults: {
			template: null,
			width: "75%",
			value: 4,
			minValue: 1,
			maxValue: 5,
			segments: 5,
			type: 'numeric',
			field: null,
			orientation: 'horizontal'
		},
		events: {
			'slidechange': 'onChange'
		},
		onChange: function (e) {
			var value = this.$el.slider('value');
			this.model.set('value', value);
			this.trigger('rangeChange', value);
		},
		settings: function () {
			this.model = new RangeModel();
			this.model.set('minValue', this.options.minValue);
			this.model.set('value', this.options.value);
			this.model.set('maxValue', this.options.maxValue);
			
		},
		render: function () {
			var data = this.model.toJSON();
			

			this.$el.slider({
				min: data.minValue,
				max: data.maxValue,
				value: data.value,
				orientation: this.options.orientation,
				range: 'min'
			}).addSliderSegments(
				this.options.segments
			);

			return this;
		}
	});
	return RangeView;
});
