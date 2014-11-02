// GroupCheckbox.js

define([
	'underscore',
	'backbone',
	'collections/SpendManager',
	'models/Checkbox'
], function (_, Backbone, SpendManagerCollection, CheckboxModel) { 
	var GroupCheckboxCollection = SpendManagerCollection.extend({
		model: CheckboxModel,
		getItemSelected: function () {
			return this.filterBy('isSelected');
		}
	});
	return GroupCheckboxCollection;
});
