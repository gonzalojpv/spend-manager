// Map.js

define([
	'views/SpendManager',
	'models/Map',
	'async!http://maps.google.com/maps/api/js?key=AIzaSyBv9g2E3zOExwUXytncGeumsU9xF9ChM10&sensor=false'
], function (SpendManagerView, MapModel) {
	var MapView = SpendManagerView.extend({
		map: null,
		id: 'map',
		defaults: {
			latitude: null,
			longitude: null,
			zoom: 1
		},
		settings: function () {
			// Set model
			this.model = new MapModel();
			this.model.set('longitude', this.options.longitude);
			this.model.set('latitude', this.options.latitude);
			this.model.on('change:longitude change:latitude', this.render, this);
		},
		render: function () {
			// Map
			var latitude = this.model.get('latitude'),
			longitude = this.model.get('longitude');

			if (!!this.map) {
				this.map = null;
			}
			this.map = new google.maps.Map(this.el, {
				center: new google.maps.LatLng(latitude, longitude),
				zoom: this.options.zoom,
			});
			return this;
		}
	});
	return MapView;
});
