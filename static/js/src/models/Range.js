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
			var tmp = _.chain(data).sortBy(function (value) {
				return value[field];
			}).map(function (value) {
				return value[field];
			}).uniq().value(), min, max;

			tmp = this.translate(data, type);

			return {
				min: tmp[0],
				max: tmp[(length - 1)]
			};
		},
		getValue: function (type) {
			var value = this.get('value');
			return this.translate(value, type);
		}
	});
	return RangeModel;
});
