// Marker.js

define([
	'models/SpendManager',
	'utils/Map'
], function (SpendManagerModel, MapUtils) { 
	var MarkerModel = SpendManagerModel.extend({
		defaults: {
			longitude: 0,
			latitude: 0,
			title: null,
			image: null,
			map: null
		},
		createMarker: function () {
			debugger;
			var longitude = this.get('longitude'),
			latitude = this.get('latitude'),
			latLng = MapUtils.latitudeLongitudeToMaps(
				longitude, latitude
			);
			return new google.maps.Marker({
				position: latLng
			});
		}
	});
	return MarkerModel;
});
