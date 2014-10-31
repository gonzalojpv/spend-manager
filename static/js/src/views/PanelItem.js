// PanelItem.js
SpendManager.Views.PanelItem = Backbone.View.extend({
	parentView: null,
	defaults: {
	},
	events: {
		'click': 'onClick'
	},
	onClick: function () {
		this.parentView.trigger(
			'itemSelected',
			this.model.get('value')
		);
		this.model.set('isSelected', true);
		return false;
	},
	initialize: function () {
		this.options = _.extend({}, this.options, this.defaults);
		this.model.on('change:isSelected', this.onSelectedValueChange, this);
		this.parentView = this.options.parentView;
	},
	onSelectedValueChange: function () {
		var isSelected = this.model.get('isSelected');
		if (isSelected) {
			if (!this.$el.hasClass('selected')) {
				this.$el.addlass('selected');
			}
		} else {
			if (this.$el.hasClass('selected')) {
				this.$el.removelass('selected');
			}
		}
	},
	render: function () {
		return this;
	}
});
