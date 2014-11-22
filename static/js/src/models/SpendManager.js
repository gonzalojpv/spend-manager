// SpendManagerModel.js
define([
	'underscore',
	'backbone'
], function (_, Backbone) { 
	var SpendManagerModel = Backbone.Model.extend({
		translate: function (values, type) {
			type = type || 'numeric';

			var wasArray = $.isArray(values), i,len, tmp;
			if (!$.isArray(values)) {
				values = (null !== values && 'undefined' !== typeof values) ? [values] : [];
			}

			if (len < 1) {
				return null;
			}

			len = values.length;

			for (i = 0; i < len; i+=1) {
				switch(type) {
					case 'date':
							tmp = new Date(values[i]);
							if (!!tmp) {
								values[i] = tmp.getTime();
							}
						break;
					case 'string':
							values[i] = values[i].toString();
						break;
					case 'color':
							tmp = parseInt(values[i], 10);
							if (!!tmp) {
								values[i] = tmp.toString(16);
							}
					case 'numeric':
							values[i] = Math.ceil(values[i]);
						break;

				}
			}

			return 1 === values.length ? values[0] : values;
		}
	});
	return SpendManagerModel;
});