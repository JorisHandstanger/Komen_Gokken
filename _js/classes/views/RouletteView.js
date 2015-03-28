var template = require('../../../_hbs/roulette.hbs');

var RouletteView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",

	events: {
		'click .btnProceed': 'GaNaarIndeling'
	},

	GaNaarIndeling: function(e){

		console.log('[RouletteView] clicked');

		Window.Application.navigate("indeling", {trigger: true, replace:true});


	},

	initialize: function(){
		this.render();
	},

	render: function(){

		this.$el.html(this.template());
		return this;

	}

});

module.exports = RouletteView;
