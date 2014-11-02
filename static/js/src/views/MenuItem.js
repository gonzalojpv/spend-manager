// MenuItem.js
define([
	'underscore',
	'views/SpendManager'
	/*,
	'models/MenuItem'*/
], function (_, SpendManagerView
	/*, MenuItemModel*/
	) { 
	var MenuItemView = SpendManagerView.extend({
		parentView: null,
		tagName: 'li',
		events: {
			'click': 'onClick'
		},
		onClick: function (e) {
			e.preventDefault();
			var isSelected = this.model.get('isSelected');
			if (isSelected) {
				return true;
			}
			this.model.set('isSelected', true);
			this.trigger(
				'itemSelected',
				this.model.get('value')
			);
		},
		settings: function () {
			this.model.on('change:isSelected', this.toggleSelected, this);
		},
		toggleSelected: function () {
			var isSelected = this.model.get('isSelected');
			if (isSelected) {
				if (!this.$el.hasClass('selected')) {
					this.$el.addClass('selected');
				}
			} else {
				if (this.$el.hasClass('selected')) {
					this.$el.removeClass('selected');
				}
			}
		},
		render: function () {
			this.options.template = this.options.template || '<a href="/" data-value="<%= value %>"><%= title %></a>';

			var data = this.model.toJSON(),
			compiled = _.template(this.options.template);

			this.$el.html(
				compiled(data)				
			);

			if (!!data.spriteClass) {
				this.$el.addClass(data.spriteClass);
			}
			this.toggleSelected();

			return this;
		}
	});
	return MenuItemView;
});
