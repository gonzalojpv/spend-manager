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
				            enabled: false
				        },
				        series: [{
				            data: [],
				            size: '80%',
				            innerSize: '60%'
				        }],
				        colors: []
				    }, 
				    colors: ['#f00', '#0f0', '#00f'],
				    data: [],
				    enabled: true,
				    showTooltip: true,
				    categoriesField: null, // (name)
				    radiusField: null, // value
				    title: null,
				    categories: []
			    });
		}()),
		renderChart: function () {
			this.destroyChart();

		    // Create the chart
		    var data = this.model.prepareData(this.options.data);
		    this.options.chartOptions.series[0].data = data;
		    this.options.chartOptions.title.text = this.options.title;
		    this.options.chartOptions.colors = this.options.colors;

	    	// Create the chart
	    	this.chart = new Highcharts.Chart(this.options.chartOptions);

			return this;
		},
		settings: function () {
			this.model = new PieChartModel();
			this.model.set('enabled', this.options.enabled);
			this.setAxis('xAxisField', this.options.categoriesField);
			this.setAxis('yAxisField', this.options.radiusField);
			this.model.on('change', this.render, this);

			this.options.chartOptions.chart.renderTo = this.el.getAttribute('id') || 'chart';
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
