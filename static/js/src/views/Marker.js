// Marker.js

define([
	'underscore',
	'backbone',
	'views/SpendManager',
	'models/Marker',
	'utils/Map'
], function (_, Backbone, SpendManagerView, MarkerModel, SpendMangerMapUtils
	) { 
	var MarkerView = SpendManagerView.extend({
		defaults: {
			latitude: 21.956,
			longitude: -102.349,
			map: null,
			title: null,
			icon: null,
			field: null,
			data: []
		},
		model: null,
		marker: null,
		settings: function () {
			if (!this.options.hasOwnProperty('model')) {
				this.model = new MarkerModel();	
				this.model.set('latitude', this.options.latitude);
				this.model.set('longitude', this.options.longitude);
			}
			this.model.on('change', this.render, this);
		},
		render: function () {
			var position = SpendMangerMapUtils.latitudeLongitudeToMaps(
				this.model.get('latitude'),
				this.model.get('longitude')
			);

			// Make a marker
			this.marker = new google.maps.Marker({
				position: position
			})
			this.marker.setMap(this.options.map);

			return this;
		},
		close: function () {
			this.marker.setMap(null);
			SpendManagerView.prototype.close.call(this, null);
		}
	});
	return MarkerView;
});
