//Router.js
define([
	'backbone',
	'views/Menu',
	'views/GroupCheckbox'
], function (Backbone, MenuView, GroupCheckboxView) {
	var SpendManagerRouter = (function () {
		var router = Backbone.Router.extend({
			routes: {
				'(home)':'groupBox'
				// ,
				// '(home)':'menuView'
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
