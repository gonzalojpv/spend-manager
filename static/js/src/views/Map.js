// Map.js

define([
	'views/SpendManagerContainer',
	'models/Map',
	'collections/Cluster',
	'views/Marker',
	'utils/Map',
	'async!http://maps.google.com/maps/api/js?key=AIzaSyBv9g2E3zOExwUXytncGeumsU9xF9ChM10&sensor=false'
], function (SpendManagerContainerView, MapModel, ClusterCollection, MarkerView, SpendManagerMapUtils) {
	var MapView = SpendManagerContainerView.extend({
		map: null,
		collection: null,
		id: 'map',
		childViews: {},
		defaults: {
			latitude: null,
			longitude: null,
			zoom: 2,
			data: [],
			latitudeField: null,
			longitudeField: null
		},
		settings: function () {
			// Set model
			this.model = new MapModel();
			this.model.set('longitude', this.options.longitude);
			this.model.set('latitude', this.options.latitude);
			this.model.on('change:longitude change:latitude', this.render, this);
		},
		drawMarkers: function () {
			var i,
			len = this.options.data.length,
			cid,
			data;

			if (len > 0) {
				if (!this.collection) {
					this.collection = new ClusterCollection();
					this.collection.on('add', this.addMarkers, this);

					data = this.collection.prepareData(
						this.options.data,
						this.options.latitudeField,
						this.options.longitudeField
					);
					debugger;
					var info = this.collection.createClusters();
					console.log(info);
				}
			}
		},
		addMarkers: function (model) {
			cid = _.uniqueId();
			this.childViews[cid] = new MarkerView({
				model: model,
				map: this.map
			});
			this.childViews[cid].render();
		},
		render: function () {
			// Map
			var latitude = this.model.get('latitude'),
			longitude = this.model.get('longitude'),
			position = SpendManagerMapUtils.latitudeLongitudeToMaps();

			if (!!this.map) {
				this.map = null;
			}
			this.map = new google.maps.Map(this.el, {
				pos: position,
				zoom: this.options.zoom
			});
			this.map.setCenter(position);

			this.drawMarkers();

			return this;
		}
	});
	return MapView;
});
