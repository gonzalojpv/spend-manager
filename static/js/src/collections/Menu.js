// Menu.js
// SpendManager.Collection.js
define([
	'underscore',
	'backbone',
	'collections/SpendManager',
	'models/MenuItem'
], function (_, Backbone, SpendManagerCollection, MenuItemModel) { 
	var MenuCollection = SpendManagerCollection.extend({
		model: MenuItemModel,
		selectItem: function (item) {
			var isSelected,
			_fnEach=function (model) {
				if (model.get('value') !== item) {
					isSelected = model.get('isSelected');
					if (isSelected) {
						model.set('isSelected', false);
					}
				}
			};
			this.each(_fnEach);
			return this;
		}
	});
	return MenuCollection;
});