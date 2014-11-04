// BarChart.js
define([
	'views/Chart',
	'models/BarChart'
], function (ChartView, BarChartModel) {
	var BarChartView = ChartView.extend({
		model: null,
		defaults: (function () {
			return _.extend({},
				ChartView.prototype.defaults, { 
					chartOptions: {
						chart: {
				            type: 'column'
				        },
				        title: {
				            text: null
				        },
				        xAxis: {
				            categories: []
				        },
				        yAxis: {
				            min: 0,
				            title: {
				                text: null
				            }
				        },
				        tooltip: {
				            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				            footerFormat: '</table>',
				            shared: true,
				            useHTML: true
				        },
				        legend: {
				            enabled: false
				        },
				        credits: {
				            enabled: false
				        },
				        plotOptions: {
				            column: {
				                pointPadding: 0.2,
				                borderWidth: 0
				            }
				        },
				        series: []
					},
				    data: [],
				    enabled: true,
				    enableTooltip: true,
				    xAxisTitle: '',
				    yAxisTitle: '',
				    xAxisField: null,
				    yAxisField: null,
				    template: null,
				    title: null
			    });
		}()),
		settings: function () {
			if (null !== this.model) {
				model.clear();
				model = null;
			}
			this.model = new BarChartModel();
			this.setAxis('xAxisField', this.options.xAxisField);
			this.setAxis('yAxisField', this.options.yAxisField);
			this.model.set('enabled', this.options.enabled);
			this.model.on('change', this.render, this);

			this.options.chartOptions.title = this.options.title;
			this.options.chartOptions.xAxis.title = this.options.xAxisTitle;
			this.options.chartOptions.yAxis.title = this.options.xAxisTitle;

			if (!this.options.showTooltip) {
				this.options.chartOptions.tooltip = this.options.showTooltip;
			}
		},
		setAxis: function (axisField, axisValue) {
			if (this.model.has(axisField)) {
				this.model.set(axisField, axisValue);
			}
		},
		render: function () {
			this.options.template = this.options.template || _.template('<div id="chart"></div>');
			this.renderChart();
			return this;
		}
	});
	return BarChartView;
});
