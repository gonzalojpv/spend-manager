// Cluster.js

define([
	'underscore',
	'backbone',
	'collections/SpendManager',
	'models/Marker'
], function (_, Backbone, SpendManagerCollection, MarkerModel) { 
	var ClusterCollection = SpendManagerCollection.extend({
		model: MarkerModel,
		prepareData: function (data, latitudeField, longitudeField) {
			debugger;
			if ('undefined' === typeof latitudeField) {
				latitudeField = null;
			}
			if ('undefined' === typeof longitudeField) {
				longitudeField = null;
			}
			if (data.length < 1) {
				return data;
			}
			if (this.length < 1) {
				this.reset();
			}
			if (null === latitudeField || null === longitudeField) {
				this.add(data);
				return this;
			}
			var i,len,model;
			for (i = 0, len = data.length; i < len; i += 1) {
				model = this._prepareModel(
					_.extend({
						longitude: data[i][longitudeField],
						latitude: data[i][latitudeField]
					}, data[i])
				);
				this.add(model);
			}
			return this;
		}
	});
	return ClusterCollection;
});
