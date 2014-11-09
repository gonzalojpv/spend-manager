// main.js
requirejs.config({
	'baseUrl': '/static',
	'waitSeconds': 120,
	'paths': {
		'app': 'js/src',
		'jquery': 'js/vendor/jquery.min',
		'highcharts': 'js/vendor/highcharts.min',
		'underscore': 'js/vendor/underscore.min',
		'backbone': 'js/vendor/backbone.min',
		'async': 'js/vendor/require-async.src',
		'less': 'js/vendor/less.min',
		'models': 'js/src/models',
		'collections': 'js/src/collections',
		'views': 'js/src/views'
	},
	'shim': {
		'underscore': {
			'exports': '_'
		},
		'backbone': {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
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
