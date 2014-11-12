// Cluster.js

define([
	'underscore',
	'backbone',
	'collections/SpendManager',
	'models/Marker'
], function (_, Backbone, SpendManagerCollection, MarkerModel) { 
	var ClusterCollection = SpendManagerCollection.extend({
		model: MarkerModel,
		createMarkers: function () {
			this.each(function (model) {
				model.set('map', model.createMarker());
			});
			return this;
		},
		prepareData: function (data, latitudeField, longitudeField) {
			
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
		},
		groupMarkers: function (latitudeField, longitudeField, callback) {
			var data = this.clone().toJSON(),
			callback = callback || function (value) {
				return value.longitude;
			}, groupedData = _.chain(data).groupBy(callback).value(),
			_return = [],
			tmp,
			i, len, key;

			for (key in groupedData) {
				if (groupedData.hasOwnProperty(key)) {
					if (!!tmp) {
						tmp = null;
					}
					if (groupedData[key].length <= 1) {
						tmp = new MarkerModel();
						tmp.set(groupedData[key][0]);
					} else {
						tmp = new ClusterCollection();
						tmp.prepareData(groupedData[key]);
					}
					_return.push(tmp);
				}
			}

			return _return;
		}
	});
	return ClusterCollection;
});
