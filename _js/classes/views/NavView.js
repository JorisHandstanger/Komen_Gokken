var template = require('../../../_hbs/navigation.hbs');

var NavView = Backbone.View.extend({

	template: template,
	tagName: 'nav',
	className: "main-nav",


	initialize: function(){
		this.render();
	},

	render: function(){

		this.$el.html(this.template());
		return this;

	}

});

module.exports = NavView;
