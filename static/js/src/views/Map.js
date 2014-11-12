// Map.js

define([
	'views/SpendManagerContainer',
	'models/Map',
	'collections/Cluster',
	'views/Marker',
	'views/Cluster',
	'utils/Map'
], function (SpendManagerContainerView, MapModel, ClusterCollection, MarkerView, ClusterView, SpendManagerMapUtils) {
	var MapView = SpendManagerContainerView.extend({
		map: null,
		collection: null,
		id: 'map',
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
		setMarkers: function () {
			var i,
			len = this.options.data.length,
			info,
			data;

			if (len > 0) {
				if (!this.collection) {
					this.collection = new ClusterCollection();

					data = this.collection.prepareData(
						this.options.data,
						this.options.latitudeField,
						this.options.longitudeField
					);

					info = this.collection.groupMarkers(
						this.map,
						this.options.latitudeField,
						this.options.longitudeField
					);
					for (i = 0, len = info.length; i < len; i += 1) {
						if (!!info[i].models) {
							this.drawCluster(info[i].toJSON());
						} else {
							this.drawMarker(info[i]);
						}
					}
				}
			}
		},
		drawMarker: function (model) {
			cid = _.uniqueId();
			this.childViews[cid] = new MarkerView({
				model: model,
				map: this.map
			});
			this.childViews[cid].render();
		},
		drawCluster: function (data) {
			cid = _.uniqueId();
			this.childViews[cid] = new ClusterView({
				data: data,
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

			this.setMarkers();

			return this;
		}
	});
	return MapView;
});
