// PieChart.js
define([
	'models/Chart'
], function (ChartModel) { 
	var PieChartModel = ChartModel.extend({
		defaults: (function () {
			var parentDefaults = ChartModel.prototype.defaults;
			return _.extend({}, parentDefaults, {
				enabled: true,
				xAxisField: false,
				yAxisField: false
			});
		}()),
		prepareData: function (data) {
			var _return = {
                categories: [],
                data: []
			}, i, len, xAxisField, yAxisField, tmp;

			if (data.length < 1) {
				return _return;
			}

			var xAxisField = this.get('xAxisField'),
			yAxisField = this.get('yAxisField'),
			xAxisValues = [],
			yAxisValues = [];

			if (!data[0].hasOwnProperty(yAxisField)) {
				return _return;
			}

			if (!data[0].hasOwnProperty(xAxisField)) {
				return _return;
			}

			_return.categories = xAxisValues = _.chain(data).map(function (value) {
				return value[xAxisField]; 
			}).uniq().value();

			for (i = 0, len = xAxisValues.length; i < len; i+=1) {	
				yAxisValues = _.chain(data).filter(function (value) {
					return _.contains(xAxisValues, value[xAxisField]);
				}).pluck(yAxisField).uniq().value();

				_return.data.push(
					(!!yAxisValues && yAxisValues.length > 0) ?
						_.reduce(yAxisField, function (memo, value) {
							return memo + value;
						}) :	
						0
				);
			}

			return _return;
		}
	});
	return PieChartModel;
});
