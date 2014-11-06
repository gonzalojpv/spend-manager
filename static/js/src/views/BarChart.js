// BarChart.js
define([
	'views/Chart',
	'models/BarChart'
], function (ChartView, BarChartModel) {
	var BarChartView = ChartView.extend({
		model: null,
		chart: null,
		id: 'chart',
		defaults: (function () {
			return _.extend({},
				ChartView.prototype.defaults, { 
					chartOptions: {
     				   chart: {
            				type: 'column',
	    					renderTo: 'chart'
        				},
        				title: {
				            text: null
				        },
        				xAxis: {
            				categories: []
        				},
        				credits: {
        					enabled: false
        				},
        				yAxis: {
				            title: {
				            	text: null 
            				}
        				},
        				legend: {
        					enabled: false
        				},
        				tooltip: {
            				enabled: false
        				},
        				plotOptions: {
            				column: {
                				pointPading: 0.2,
                				borderWidth: 0
            				}
        				},
        				series: [],
        				colors: ['#7cb5ec']
    				},
    				colors: ['#7cb5ec'],
				    data: [],
				    enabled: true,
				    showTooltip: true,
				    xAxisField: '',
				    yAxisField: '',
				    title: null,
				    categories: []
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

			this.options.chartOptions.title.text = this.options.title;

			if (!this.options.showTooltip) {
				this.options.chartOptions.tooltip = this.options.showTooltip;
			}

			this.options.chartOptions.chart.renderTo = this.el.getAttribute('id') || 'chart';
		},
		setAxis: function (axisField, axisValue) {
			if (this.model.has(axisField)) {
				this.model.set(axisField, axisValue);
			}
		},
		renderChart: function () {
			// this.destroyChart();
			var data =
				(this.options.categories.length > 0) ?
					this.model.parseFromCategories(this.options.data, this.options.categories) :
					this.model.parseFromData(this.options.data);

			// this.options.chartOptions.colors = this.options.colors;
			this.options.chartOptions.xAxis.categories = data.categories;
			this.options.chartOptions.series = data.series;

			this.chart = new Highcharts.Chart(this.options.chartOptions);

			return this;
		},
		render: function () {
			this.renderChart();
			return this;
		}
	});
	return BarChartView;
});
