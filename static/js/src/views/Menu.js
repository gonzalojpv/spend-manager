// Menu.js
define([
	'underscore',
	'views/SpendManagerContainer',
	'collections/Menu',
	'views/MenuItem'
], function (_, SpendManagerContainerView, MenuCollection,
	MenuItemView) { 
	var MenuView = SpendManagerContainerView.extend({
		childViews: [],
		collection: null,
		defaults: {
			theme: null,
			title: null,
			template: '<%= title %><ul></ul>',
			data: [],
			field: null
		},
		settings: function () {
			if (null === this.collection) {
				this.collection = new MenuCollection();
				this.collection.on('add', this.addItem, this);
			}
			this.renderTemplate();
			this.collection.prepareData(
				this.options.data,
				this.options.field 
			);
		},
		addItem: function (model) {
			var view = new MenuItemView({
				model: model
			})
			uniq = _.uniqueId();
			this.$('ul').append(view.render().el);
			view.on('itemSelected', this.onItemSelected, this);
			this.childViews[uniq] = view;
		},
		onItemSelected: function (item) {
			this.collection.selectItem(item);
			this.trigger(
				'itemSelected',
				item
			);
		},
		renderTemplate: function () {
			var i,
			len = this.options.data.length,
			compiled = _.template(this.options.template);

			if (len < 1) {
				return this;
			}

			this.$el.append(
				compiled(this.options)
			);

			this.addTheme();

			return this;
		},
		render: function () {
			return this;
		}
	});
	return MenuView;
});
