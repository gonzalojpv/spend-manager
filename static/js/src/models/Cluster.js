// Cluster.js

define([
	'underscore',
	'backbone',
	'models/SpendManager'
], function (_, Backbone, SpendManagerModel) { 
	var ClusterModel = SpendManagerModel.extend({
		defaults: {
			markers: []
		}
	});

	return ClusterModel;
});

