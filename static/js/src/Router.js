//Router.js
define([
	'backbone',
	'views/Menu',
	'views/GroupCheckbox',
	'views/BarChart'
], function (Backbone, MenuView, GroupCheckboxView, BarChartView) {
	var SpendManagerRouter = (function () {
		var data = [{ 
				"name": "Cohen", "salary": 5211 
			}, { 
				"name": "Compton", "salary": 9695 
			}, { 
				"name": "Compton", "salary": 8454 
			}, { 
				"name": "Blackwell", "salary": 9601 
			}, { 
				"name": "Blackwell", "salary": 6960 
			}, { 
				"name": "Blackwell", "salary": 97 
			}, { 
				"name": "Blackwell", "salary": 4789
		 	}, { 
		 		"name": "Jacobs", "salary": 1399
	 		}, { 
	 			"name": "Jacobs", "salary": 8010
 			}],
			router = Backbone.Router.extend({
				routes: {
					'(home)':'barChart',
					//'(home)':'groupBox',
					// '(home)':'menuView',
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
