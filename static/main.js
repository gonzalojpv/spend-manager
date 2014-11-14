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
		'text': 'js/vendor/require-text.src',
		'models': 'js/src/models',
		'collections': 'js/src/collections',
		'views': 'js/src/views',
		'flat-ui': 'js/vendor/flat-ui.min',
		'flat-ui-utils': 'js/vendor/flat-ui.utils.src',
		'utils': 'js/src/utils',
		'cluster': 'js/vendor/markerclusterer.min'
	},
	'shim': {
		'underscore': {
			'exports': '_'
		},
		'backbone': {
			'deps': ['jquery', 'underscore'],
			'exports': 'Backbone'
		},
		'flat-ui': {
			'deps': ['jquery'],
			'exports': 'flat-ui'
		},
		'flat-ui-utils': {
			'deps': ['jquery', 'flat-ui'],
			'exports': 'flat-ui-utils'
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
