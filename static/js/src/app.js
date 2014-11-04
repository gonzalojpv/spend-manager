// app.js
define([
	'backbone',
	'app/Router',
], function (Backbone, Router) {
	function Application () {
		this.start = function () {
			Backbone.history.start();
		};
	};
	var application = new Application();
	application.start();
});
