// Chart.js
define([
	'models/SpendManager'
], function (SpendManagerModel) { 
	var ChartModel = SpendManagerModel.extend({
		defaults: {
			yAxisField: null,
			xAxisField: null
		},
		createAxisData: function (data, axisField) {
			var _return = [];

			if (data.length < 1) {
				return _return;
			}

			if (!data[0].hasOwnProperty(axisField)) {
				return _return;
			}

			_return = _.chain(data).map(function (value) {
				return value[axisField];
			}).uniq().value();

			return _return;
		},
		parseFromData: function (data) {
			return {
				categories: [],
				series: []
			};
		},
		parseFromCategories: function (data, categories) {
			return {
				categories: [],
				data: []
			};
		}
	});
	return ChartModel;
});
