// Range.js

define([
	'models/SpendManager'
], function (SpendManagerModel) {
	var RangeModel = SpendManagerModel.extend({
		defaults: {
			value: null,
			minValue: null,
			maxValue: null
		},
		prepareData: function (data, field, type) {
			var tmp;

			if (data.length > 0 && data[0].hasOwnProperty(field)) {
				tmp = _.chain(data).sortBy(function (value) {
					return value[field];
				}).map(function (value) {
					return value[field];
				}).uniq().value();
			} else {
				tmp = _.clone(data);
			}

			tmp = this.translate(tmp, type);

			this.set('minValue', tmp[0]);
			this.set('maxValue', tmp[(tmp.length - 1)]);

			return this;
		},
		getValueFromCategories: function (data, field, categories, segment) {
			segment = segment || 1;
			if ($.isArray(field)) {
				categories = field;
				field = null;
			}
			var tmp, i, len, info = [];

			if (data.length > 0 && data[0].hasOwnProperty(field)) {
				tmp = _.chain(data).map(function (value) {
					if (null === field) {
						return value;
					}
					if (!value.hasOwnProperty(field)) {
						return value;
					}
					return value[field];
				}).uniq().value()
			} else {
				tmp = _.clone(data);
			}
			
			for (i = 0, len = categories.length; i < segment; i+=1) {
				info = info.concat(
					_.chain(tmp).filter(function (value) { 
						return categories[i].callback(value); 
					}).value()
				);
			}
			if (info.length < 1) {
				return {
					minValue: this.get('minValue'),
					maxValue: this.get('maxValue')
				};
			}
			info = _.chain(info).sortBy().value();
			return {
				minValue: info[0],
				maxValue: info[(info.length - 1)]
			};
		},
		getValue: function (segments, categories, type) {
			var minValue = this.get('minValue'),
			maxValue = this.get('maxValue'),
			value = this.get('value'),
			_return = 
					(Math.abs(minValue) > Math.abs(maxValue)) ? 
						minValue + ((Math.abs(minValue) - Math.abs(maxValue)) / segments) * value :
						minValue + ((Math.abs(maxValue) - Math.abs(minValue)) / segments) * value;

			return this.translate(_return, type);
		}
	});
	return RangeModel;
});
