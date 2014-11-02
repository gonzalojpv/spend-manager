// Checkbox.js

define([
	'underscore',
	'models/SpendManager'
], function (_, SpendManagerModel) { 
	var CheckboxModel = SpendManagerModel.extend({
		defaults: {
			value: null,
			isSelected: false,
			caption: null
		}
	});

	return CheckboxModel;
});

