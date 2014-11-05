// main.js
requirejs.config({
	'baseUrl': '/static',
	'paths': {
		'app': 'js/src',
		'jquery': 'js/vendor/jquery.min',
		'underscore': 'js/vendor/underscore.min',
		'backbone': 'js/vendor/backbone.min',
		'less': 'js/vendor/less.min',
		'models': 'js/src/models',
		'collections': 'js/src/collections',
		'views': 'js/src/views',
		'highcharts': 'js/vendor/highcharts.min'
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
