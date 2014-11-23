// SpendManager.View
define([
	'underscore',
	'backbone'
], function (_, Backbone) { 
	var SpendManagerView = Backbone.View.extend({
		defaults: {
			theme: null,
			parentView: null,
			caption: null
		},
		initialize: function (options) {
			this.options = _.extend({}, this.defaults, options);
			this.settings();
		},
		settings: function () {

		},
		addTheme: function (theme) {
			if (!!this.options.theme) {
				if (this.el.className.indexOf('theme-') > -1) {
					this.el.className = this.el.className.replace(/theme\-([A-Za-z0-9\-_])+/, 'theme-' + this.options.theme);
				} else {
					this.$el.addClass('theme-' + this.options.theme);
				}
			}
		},
		close: function () {
			if (!!this.model) {
				this.model.off();
			}
			if (!!this.collection) {
				this.collection.off();
			}
			this.off();
			this.undelegateEvents();
			this.$el.empty();
		}
	});

	return SpendManagerView;
});
