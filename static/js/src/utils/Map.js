// Map.js

define([
	'underscore',
	'async!http://maps.google.com/maps/api/js?key=AIzaSyBv9g2E3zOExwUXytncGeumsU9xF9ChM10&sensor=false'
], function (_) { 
	function Utils() {
		this.latitudeLongitudeToMaps = function (latitude, longitude) {
			if ('undefined' === typeof latitude || 'undefined' === typeof longitude) {
				var tmp = this.getLatitudeAndLongitude();
				latitude = tmp.latitude;
				longitude = tmp.longitude;
			}
			return new google.maps.LatLng(
				latitude,
				longitude
			);
		};
		this.getLatitudeAndLongitude = function () {
			var latitude = 0,
			longitude = 0;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
				});
			}
			return {
				latitude: latitude,
				longitude: longitude
			};
		};
	}
	var utils = new Utils();
	return utils;
});
