// Checkbox.js

define([
	'underscore',
	'backbone',
	'views/SpendManager'
	/*,
	'models/Checkbox'*/
], function (_, Backbone, SpendManagerView
	/*, CheckboxModel*/
	) { 
	var CheckboxView = SpendManagerView.extend({
		tagName: 'li',
		events: {
			'click .item': 'onClick'
		},
		onClick: function (e) {
			e.preventDefault();
			var isSelected = this.model.get('isSelected');
			this.model.set('isSelected', !isSelected);
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
			this.options.template = this.options.template || 
			'<a href="/" data-value="<%= value %>"><span class="item"></span><%= title %></a>';

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
	return CheckboxView;
});