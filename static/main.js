// main.js
requirejs.config({
	'baseUrl': '/static',
	'paths': {
		'app': 'js/src',
		'jquery': 'js/vendor/jquery.min',
		'underscore': 'js/vendor/underscore.min',
		'backbone': 'js/vendor/backbone.min',
		'less': 'js/vendor/less.min',
		'highcharts': 'js/vendor/highcharts.min',
		'models': 'js/src/models',
		'collections': 'js/src/collections',
		'views': 'js/src/views'
	},
	'shim': {
		'backbone': {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		'underscore': {
			'exports': '_'
		},
		'highcharts': {
			'deps': ['jquery'],
			'exports': 'Highcharts'
		}
	}
});

require([
	'app/app'
]);
