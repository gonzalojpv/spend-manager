// Map.js

define([
	'models/SpendManager'
], function (SpendManagerModel) { 
	var MapModel = SpendManagerModel.extend({
		defaults: {
			latitude: null,
			longitude: null
		}
	});
	return MapModel;
});
