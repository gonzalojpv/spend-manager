// Marker.js

define([
	'underscore',
	'backbone',
	'models/SpendManager'
], function (_, Backbone, SpendManagerModel) { 
	var MarkerModel = SpendManagerModel.extend({
		defaults: {
			longitude: 0,
			latitude: 0,
			title: null,
			image: null
		}
	});
	return MarkerModel;
});
