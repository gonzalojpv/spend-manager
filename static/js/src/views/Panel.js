// Panel.js
SpendManager.Views.Panel = Backbone.View.extend({
	className: 'left-panel',
	childViews: [],
	collection: null,
	defaults: {
		theme: null,
		template: null,
		data: [],
		field: null
	},
	initialize: function () {
		this.options = _.extend({}, this.options, this.defaults);
		this.settings();	
	},
	settings: function (data, field) {
		if (null === this.collection) {
			this.collection = new SpendManager.Collections.Panel();
			this.collection.on('reset', this.addItem, this);
		}
		this.collection.prepare(
			this.options.field, this.options.data
		);
	},
	addItem: function (model) {
		var view = new SpendManager.Views.PanelItem({
			model: model
		});
		this.$el.append(view.render().el);
		this.childViews.push(view);
	},
	render: function () {
		var i,
		len = this.options.data.length;

		if (len < 1) {
			return this;
		}

		this.$el.append(
			this.template();
		).addClass(this.options.theme);

		return this;
	}
});
