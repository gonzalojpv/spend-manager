//Router.js
define([
	'backbone',
	'views/Menu',
	'views/GroupCheckbox',
	'views/BarChart',
	'views/PieChart',
	'views/Map',
], function (Backbone, MenuView, GroupCheckboxView, BarChartView, PieChartView, MapView) {
	var SpendManagerRouter = (function () {
		var data = [{ 
				"name": "Cohen", "salary": 5211, "gender": "male" 
			}, { 
				"name": "Compton", "salary": 9695, "gender": "female"
			}, { 
				"name": "Compton", "salary": 4000, "gender": "unnasigned"
			}, { 
				"name": "Blackwell", "salary": 9601, "gender": "female" 
			}, { 
				"name": "Blackwell", "salary": 6960, "gender": "male" 
			}, { 
				"name": "Blackwell", "salary": 97, "gender": "male" 
			}, { 
				"name": "Blackwell", "salary": 4789, "gender": "female"
		 	}, { 
		 		"name": "Jacobs", "salary": 1399, "gender": "unnasigned"
	 		}, { 
	 			"name": "Jacobs", "salary": 8010, "gender": "female"
 			}],
			router = Backbone.Router.extend({
				routes: {
					// '(home)':'barChart',
					//'(home)':'pieChart',
					'(home)': 'home',
					// '(home)':'groupBox',
					//'(home)':'menuView',
				},
				home: function () {
					var view = new MapView({
						latitude: -34.397,
						longitude: 150.644,
						el: $('#map-canvas')
					});
					view.render();
				},
				pieChart: function () {
					var view = new PieChartView({
						categoriesField: 'name',
						radiusField: 'salary',
						data: data,
						colors: ['#f00', '#0f0', '#00f','#000'],
						title: 'Gender distribution',
						el: $('#chart')
					});
					view.render();
				},
				barChart: function () {
					var view = new BarChartView({
						xAxisField: 'name',
						yAxisField: 'salary',
						data: data,
						title: 'Year',
						xAxisTitle: 'Names',
						yAxisTitle: 'Salaries',
						/**/
						categories: [{
							name: 'Less than 4000',
							callback: function (value) {
								return value < 4000;
							}
						}, {
							name: 'Equal to 4000',
							callback: function (value) {
								return 1000 === value;
							}
						}, {
							name: 'Greater than 4000',
							callback: function (value) {
								return value > 4000;
							}
						}], /**/
						el: $('#chart')
					});
					view.render();
				},
				groupBox: function () {
					var view = new GroupCheckboxView({
						data: [{
							value: 0,
							isSelected: true,
							spriteClass: 'first-sprite',
							title: 'Primera opción'
						}, {
							value: 1,
							spriteClass: 'second-sprite',
							title: 'Segunda opción'
						}],
						title: 'Menú'
					});
					view.on('itemsChanged', this.callEvent, this);
					$('body').html(view.render().el);
				},
				callEvent: function () {
					console.log(arguments);
				},
				menuView: function () {
					var view = new MenuView({
						data: [{
							value: 0,
							isSelected: true,
							spriteClass: 'first-sprite',
							title: 'Primera opción'
						}, {
							value: 1,
							spriteClass: 'second-sprite',
							title: 'Segunda opción'
						}],
						title: 'Menú'
					});
					view.on('itemSelected', this.callEvent, this);
					$('body').append(view.render().el);
				}
			});
		return new router();
	}());

	return SpendManagerRouter;
});
