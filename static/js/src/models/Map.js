// Map.js

define([
	'models/SpendManager',
	'utils/Map'
], function (SpendManagerModel, SpendManagerMapUtils) { 
	var MapModel = SpendManagerModel.extend({
		defaults: (function () {
			var latLng;

			latLng = SpendManagerMapUtils.getLatitudeAndLongitude();

			return {
				latitude: latLng.latitude,
				longitude: latLng.longitude
			};
		}())
	});
	return MapModel;
});
