// GroupCheckbox.js
define([
	'views/SpendManagerContainer',
	'collections/GroupCheckbox',
	'views/Checkbox'
], function (SpendManagerContainerView, GroupCheckboxCollection,
	Checkbox) { 
	var GroupCheckboxView = SpendManagerContainerView.extend({
		defaults: {
			data: [],
			template: '<%= title %><ul></ul>',
			field: null,
			title: null,
			theme: null
		},
		collection: null,
		settings: function () {
			if (null === this.collection) {
				this.collection = new GroupCheckboxCollection();
				this.collection.on('add', this.addItem, this);
			}
			this.renderTemplate();
			this.collection.prepareData(
				this.options.data,
				this.options.field 
			);
		},
		addItem: function (model) {
			var view = new Checkbox({
				model: model
			})
			uniq = _.uniqueId();
			this.$('ul').append(view.render().el);
			view.on('itemSelected', this.onItemSelected, this);
			this.childViews[uniq] = view;
		},
		onItemSelected: function (item) {
			var selectedValues = this.collection.getItemSelected();
			this.trigger(
				'itemsChanged',
				selectedValues
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
	return GroupCheckboxView;	
});
