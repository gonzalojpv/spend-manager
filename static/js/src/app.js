// app.js
define([
	'app/Router',
], function (Router) {
	function Application () {
		this.start = function () {
			Backbone.history.start();
		};
	};
	var application = new Application();
	application.start();
});
