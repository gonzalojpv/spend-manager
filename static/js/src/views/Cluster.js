// Cluster.js

define([
	'underscore',
	'backbone',
	'views/SpendManager',
	'collections/Cluster',
	'utils/Map',
	'cluster'
], function (_, Backbone, SpendManagerView, ClusterCollection, SpendMangerMapUtils
	) { 
	var ClusterView = SpendManagerView.extend({
		defaults: {
			map: null,
			latitudeField: null,
			longitudeField: null,
			data: []
		},
		collection: null,
		cluster: null,
		settings: function () {
			this.collection = new ClusterCollection();
			this.collection.prepareData(this.options.data, this.latitudeField, this.longitudeField);
			this.collection.createMarkers(this.options.map);
		},
		render: function () {
			var markers = this.collection.toJSON();
			if (!!this.cluster) {
				this.cluster = null;
			}
			markers = this.collection.map(function (model) {
				return model.get('map');
			});

			this.cluster = new MarkerClusterer(this.options.map, markers);

			return this;
		},
		close: function () {
			this.cluster.clearMarkers();
			SpendManagerView.prototype.close.call(this, null);
		}
	});
	return ClusterView;
});
