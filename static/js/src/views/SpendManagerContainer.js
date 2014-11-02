// MenuItem.js
define([
	'underscore',
	'views/SpendManager'
], function (_, SpendManagerView) { 
	var SpendManagerContainerView = SpendManagerView.extend({
		childViews: [],
		deleteViews: function () {
			var key;
			for (key in this.childViews) {
				if (this.childViews.hasOwnProperty(key)) {
					this.childViews.close();
				}
			}
		}
	});
	return SpendManagerContainerView;
});
