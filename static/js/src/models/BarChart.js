// BarChart.js
define([
	'models/Chart'
], function (ChartModel) { 
	var BarChartModel = ChartModel.extend({
		defaults: (function () {
			var parentDefaults = ChartModel.prototype.defaults;
			return _.extend({}, parentDefaults, {
				enabled: true
			});
		}()),
		parseFromCategories: function (data, categories) {
			var yAxisField,
			i, len, _return = {
				categories: [],
				series: [{
					name: null,
					data: []
				}]
			}, yAxis;

			if (data.length < 1) {
				return _return;
			}

			yAxisField = this.get('yAxisField');
			categories = categories || [{ name: null, callback: null }];

			_return.categories = _.map(categories, function (category) {
				return category.name || '';
			});

			if (!data[0].hasOwnProperty(yAxisField)) {
				return _return;
			}

			for (i = 0, len = categories.length; i < len; i+=1) {
				yAxis = _.chain(data).filter(function (value) {
					if (!!value.hasOwnProperty(yAxisField)) {
						return categories[i].callback(value[yAxisField]);
					}
					return false;
				}).pluck(yAxisField).value();

				_return.series[0].data.push(
					(!!yAxis && yAxis.length > 0) ? _.reduce(yAxis, function (memo, value) { 
							return memo + value; 
						}) : 0
				)
			}

			return _return;
		},
		parseFromData: function (data) {
			var _return = {
				categories: [],
				series: [{
					data: [],
					name: null
				}]
			},
			xAxisField, yAxisField,
			tmp, serie,
			i, len;

			if (data.length < 1) {
				return _return;
			}

			xAxisField = this.get('xAxisField');
			yAxisField = this.get('yAxisField');

			_return.categories = this.createAxisData(data, xAxisField);

			for (i = 0, len = _return.categories.length; i < len; i+=1) {
				tmp = _.chain(data).filter(function (value) {
					if (value.hasOwnProperty(xAxisField)) {
						return value[xAxisField] === _return.categories[i];
					}
					return false;
				}).pluck(yAxisField).value();

				_return.series[0].data.push(
					(tmp.length < 1) ? 0: _.reduce(tmp, function (memo, value) {
						return memo + value;
					})
				);

			}
			return _return;
		}
	});
	
	return BarChartModel;
});
