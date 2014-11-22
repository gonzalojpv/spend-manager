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
			minValue: 0,
			maxValue: 5,
			segments: 5,
			type: 'numeric',
			field: null,
			type: null,
			data: [],
			categories: [],
			orientation: 'horizontal'
		},
		events: {
			'slidechange': 'onChange'
		},
		onChange: function (e) {
			var value = this.$el.slider('value'),
			minValue = this.model.get('minValue');
			this.model.set('value', value);
		},
		settings: function () {
			this.model = new RangeModel();
			this.model.set('value', this.options.value);
			if (this.options.data.length > 0) {
				this.model.prepareData(this.options.data, this.options.field, this.options.type);
			} else {
				this.model.set('minValue', this.options.minValue);
				this.model.set('maxValue', this.options.maxValue);
			}
			this.model.on('change:value', this.onValueChanged, this);
		},
		onValueChanged: function () {
			var value = this.model.get('value'),
			minValue = this.model.get('minValue');

			if (this.options.categories.length > 0) {
				var tmp = this.model.getValueFromCategories(
					this.options.data,
					this.options.field,
					this.options.categories,
					value
				);
				this.trigger('rangeChange', {
					minValue: tmp.minValue,
					maxValue: tmp.maxValue,
					parseType: this.options.type
				});			
			} else {
				value = this.model.getValue(this.options.segments, this.options.type);
				this.trigger('rangeChange', {
					minValue: minValue,
					maxValue: value,
					parseType: this.options.type
				});
			}
		},
		render: function () {
			this.$el.slider({
				min: this.options.minValue,
				max: this.options.maxValue,
				value: this.options.value,
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
