// PieChart.js
define([
	'views/Chart',
	'models/PieChart'
], function (ChartView, PieChartModel) {
	var BarChartView = ChartView.extend({
		model: null,
		chart: null,
		id: 'chart',
		defaults: (function () {
			return _.extend({},
				ChartView.prototype.defaults, { 
					chartOptions: {
				        chart: {
				            type: 'pie'
				        },
				        title: {
				            text: null
				        },
				        yAxis: {
				            title: {
				                text: null
				            }
				        },
				        plotOptions: {
				            pie: {
				                shadow: false,
				                center: ['50%', '50%']
				            }
				        },
				        tooltip: {
				            valueSuffix: '%'
				        },
				        series: [{
				            name: '',
				            data: [],
				            size: '80%',
				            innerSize: '60%'
				        }]
				    }
			    }, 
			    colors: ['#7cb5ec'],
			    data: [],
			    enabled: true,
			    showTooltip: true,
			    fieldTitle: '',
			    categoriesField: null, // (name)
			    radiusField: null, // value
			    title: null,
			    categories: []
		    });
		}()),
		renderChart: function () {
			// this.destroyChart();
			var data = this.model.prepareData(this.options.data);
			this.options.chartOptions.series[0].name = this.options.fieldTitle;

			this.chart = new Highcharts.Chart(this.options.chartOptions);

			return this;
		},
		settings: function () {
			this.model = new PieChartModel();
			this.model.set('enabled', this.options.enabled);
			this.model.on('change', this.render, this);

			this.setAxis('xAxisField', this.options.categoriesField);
			this.setAxis('yAxisField', this.options.radiusField);
			this.options.chartOptions.renderTo = this.el.getAttribute('id') || 'chart';
		},
		setAxis: function (axisField, axisValue) {
			if (this.model.has(axisField)) {
				this.model.set(axisField, axisValue);
			}
		},
		render: function () {
			this.renderChart();
			return this;
		}
	});
	return BarChartView;
});
