// MenuItem.js
define([
	'models/SpendManager'
], function (SpendManagerModel) { 
	var MenuItemModel = SpendManagerModel.extend({
		defaults: {
			value: null,
			isSelected: false,
			spriteClass: null,
			title: null
		}
	});
	return MenuItemModel;
});
