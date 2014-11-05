	// Chart.js
define([
	'jquery',
	'highcharts',
	'views/SpendManager',
	'models/Chart'
], function ($, highcharts, SpendManagerView, ChartModel) {
	var ChartView = SpendManagerView.extend({
		defaults: {
			chartOptions: {}
		},
		id: 'chart',
		chart: null,
		renderChart: function () {
			return this;
		},
		destroyChart: function () {
			if (!!this.chart) {
				this.chart.destroy();
			}
		},
		close: function () {
			this.destroyChart();			
			SpendManagerView.prototype.close.call(this, null);
		}
	});
	return ChartView;
});
