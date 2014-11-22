//Router.js
define([
	'backbone',
	'views/Range'
], function (
	Backbone,
	RangeView
) {
	var SpendManagerRouter = (function () {
			router = Backbone.Router.extend({
				routes: {
					'(home)': 'home'
				},
				data: [{ 
					"name": "Cohen", "salary": 5211, "lat": 25.648, "long": -100.303, "gender": "male" 
				}, { 
					"lat": 25.553, "long": -103.406, "name": "Compton", "salary": 9695, "gender": "female"
				}, { 
					"lat": 25.528, "long": -103.263,"name": "Compton", "salary": 4000, "gender": "unnasigned"
				}, { 
					"lat": 20.673, "long": -103.335,"name": "Blackwell", "salary": 9601, "gender": "female" 
				}, { 
					"lat": 22.040, "long": -102.355, "name": "Blackwell", "salary": 6960, "gender": "male" 
				}, { 
					"lat": 19.178, "long": -96.162, "name": "Blackwell", "salary": 97, "gender": "male" 
				}, { 
					"lat": 19.320, "long": -99.152,"name": "Blackwell", "salary": 4789, "gender": "female"
			 	}, { 
			 		"lat": 19.320, "long": -99.152, "name": "Jacobs", "salary": 1399, "gender": "unnasigned"
		 		}, { 
		 			"lat": 21.959, "long": -102.345,"name": "Jacobs", "salary": 8010, "gender": "female"
	 			}, { 
		 			"lat": 21.959, "long": -102.345,"name": "Jacobs", "salary": 8011, "gender": "female"
	 			},{ 
		 			"lat": 21.959, "long": -102.345,"name": "Jacobs", "salary": 801, "gender": "male"
	 			},{ 
		 			"lat": 21.959, "long": -102.345,"name": "Jacobs", "salary": 1010, "gender": "unnasigned"
	 			}],
				home: function () {
					this.range();
				},
				range: function () {
					var view = new RangeView();
					$('body').append(view.render().el);
					view.on('rangeChange', this.callEvent, this);
				},
				callEvent: function () {

				}
			});
		return new router();
	}());

	return SpendManagerRouter;
});
