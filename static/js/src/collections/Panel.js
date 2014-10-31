// Panel.js
SpendManager.Collections.Panel = Backbone.Collection.extend({
	model: SpendManager.Models.PanelItem,
	getItemSelected: function () {
		return this.chain().filter(function (model) {
			return model.get('isSelected');
		}).map(function (model) {
			return model.get('value');
		}).value();
	},
	prepareData: function (field, data) {
		var i = 0,
		len = data.length,
		data = [],
		tmp = new (this.model)();

		if (len > 0) {
			for (i = 0; i < len; i += 1) {
				if (null !== field && data[i].hasOwnProperty(field)) {
					tmp.set('value', data[i][field];
				}
				data.push(tmp);
			}
		}

		this.reset(data);
	}
});
