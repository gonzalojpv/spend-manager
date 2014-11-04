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
				"name": "Sykes", "salary": 8454 
			}, { 
				"name": "Blackwell", "salary": 9601 
			}, { 
				"name": "Bell", "salary": 6960 
			}, { 
				"name": "York", "salary": 97 
			}, { 
				"name": "Mccray", "salary": 4789
		 	}, { 
		 		"name": "Jacobs", "salary": 1399
	 		}, { 
	 			"name": "Watson", "salary": 8010 }, { "name": "Owens", "salary": 189 }, { "name": "Rivers", "salary": 2368 }, { "name": "Noel", "salary": 5693 }, { "name": "Wagner", "salary": 897 }, { "name": "Carroll", "salary": 327 }, { "name": "Bartlett", "salary": 7671 }, { "name": "Chandler", "salary": 2656 }, { "name": "Mcdaniel", "salary": 5003 }, { "name": "Fuller", "salary": 918 }, { "name": "Vargas", "salary": 5791 }, { "name": "Delacruz", "salary": 4221 }, { "name": "Carey", "salary": 7383 }, { "name": "Dillon", "salary": 8180 }, { "name": "Hess", "salary": 4099 }, { "name": "Bowen", "salary": 5113 }, { "name": "Solomon", "salary": 3766 }, { "name": "Nieves", "salary": 4516 }, { "name": "Rosa", "salary": 9934 }, { "name": "Dotson", "salary": 2445 }, { "name": "Case", "salary": 8686 }, { "name": "Sanford", "salary": 3858 }, { "name": "Haynes", "salary": 3220 }, { "name": "Aguirre", "salary": 5757 }, { "name": "Christensen", "salary": 3648 }, { "name": "Moss", "salary": 2819 }, { "name": "Rios", "salary": 1934 }, { "name": "Mueller", "salary": 6783 }, { "name": "Jones", "salary": 8802 }, { "name": "Powers", "salary": 9461 }, { "name": "Doyle", "salary": 9793 }, { "name": "Lowery", "salary": 1737 }, { "name": "Branch", "salary": 3053 }, { "name": "Riddle", "salary": 6940 }, { "name": "Phelps", "salary": 5583 }, { "name": "Spence", "salary": 7947 }, { "name": "Mcmahon", "salary": 4450 }, { "name": "Oliver", "salary": 2621 }, { "name": "Pate", "salary": 5772 }, { "name": "Obrien", "salary": 4571 }, { "name": "Hull", "salary": 6807 }, { "name": "Farrell", "salary": 9919 }, { "name": "Gardner", "salary": 3408 }, { "name": "Bradshaw", "salary": 7799 }, { "name": "Gross", "salary": 4871 }, { "name": "Gonzalez", "salary": 9288 }, { "name": "Sharp", "salary": 1378 }, { "name": "Payne", "salary": 6930 }, { "name": "Atkins", "salary": 234 }, { "name": "Joyner", "salary": 3660 }, { "name": "Mccarthy", "salary": 5623 }, { "name": "Avila", "salary": 9103 }, { "name": "Nicholson", "salary": 2674 }, { "name": "Sargent", "salary": 6796 }, { "name": "Leblanc", "salary": 7720 }, { "name": "Merritt", "salary": 5106 }, { "name": "Calhoun", "salary": 2895 }, { "name": "Burris", "salary": 2732 }, { "name": "Spears", "salary": 257 }, { "name": "Campbell", "salary": 8907 }, { "name": "Gonzalez", "salary": 2855 }, { "name": "Hopper", "salary": 5878 }, { "name": "Foster", "salary": 7295 }, { "name": "Clarke", "salary": 160 }, { "name": "Mccullough", "salary": 8067 }, { "name": "Lewis", "salary": 6960 }, { "name": "Barrera", "salary": 2368 }, { "name": "Johns", "salary": 3132 }, { "name": "Mays", "salary": 6043 }, { "name": "Manning", "salary": 9373 }, { "name": "Todd", "salary": 4141 }, { "name": "Blake", "salary": 1824 }, { "name": "Morgan", "salary": 6375 }, { "name": "Ellis", "salary": 7386 }, { "name": "Carr", "salary": 2575 }, { "name": "Clayton", "salary": 2059 }, { "name": "Bernard", "salary": 7719 }, { "name": "Nolan", "salary": 6890 }, { "name": "Horton", "salary": 7572 }, { "name": "Morris", "salary": 7204 }, { "name": "Zamora", "salary": 7050 }, { "name": "Roberts", "salary": 7688 }, { "name": "Marks", "salary": 9071 }, { "name": "Burton", "salary": 7371 }, { "name": "Fleming", "salary": 5330 }, { "name": "Booth", "salary": 5050 }, { "name": "Mckee", "salary": 9107 }, { "name": "Vaughn", "salary": 8655 }, { "name": "Hardy", "salary": 2768 }, { "name": "Hendricks", "salary": 4719 }, { "name": "Mcguire", "salary": 201 }, { "name": "Snider", "salary": 5639 } ],
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
						yAxisTitle: 'Salaries'
					});
					$('body').append(view.render().el);
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
					$('body').append(view.render().el);
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
