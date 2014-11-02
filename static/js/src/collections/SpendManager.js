// SpendManager.Collection.js
define([
	'underscore',
	'backbone'
], function (_, Backbone) { 
	var SpendManagerCollection = Backbone.Collection.extend({
		uniqueByField: function (field) {
			var data = this.pluck(field);
			data = _.uniq(data);
			return data;
		},
		filterBy: function (field, modelField) {
			modelField = modelField || 'value';
			return this.chain().filter(function (model) {
				if (model.has(field)) {
					return model.get(field);
				}
			}).map(function (model) {
				return model.get(modelField);
			}).value();
		},
		prepareData: function (data, field, modelField) {
			modelField = modelField || 'value';

			if (this.length > 0) {
				this.reset();
			}
			var i,len,model,tmp = {};

			for (i = 0, len = data.length; i < len; i+=1) {
				tmp[modelField] = data[i].hasOwnProperty(field) ? data[i][field] : null;
				model = this._prepareModel(
					_.extend({ }, tmp, data[i])
				);
				this.add(model);
			}
			return this;
		}
	});
	return SpendManagerCollection;
});
