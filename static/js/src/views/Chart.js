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
		renderChart: function () {
			this.destroyChart();
			this.$('#chart').highcharts(this.options.chartOptions);
			return this;
		},
		destroyChart: function () {
			debugger;
			var chart = this.$('#chart').highcharts();
			if (!!chart) {
				chart.destroy();
			}
		},
		close: function () {
			this.destroyChart();			
			SpendManagerView.prototype.close.call(this, null);
		}
	});
	return ChartView;
});
