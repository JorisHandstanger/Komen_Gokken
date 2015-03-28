var template = require('../../../_hbs/roulette.hbs');

var RouletteView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",

	events: {
		'click .btnProceed': 'DraaiRoulette',
		'click .btnProceed2': 'GaNaarIndeling'
	},

	GaNaarIndeling: function(e){

		 Window.Application.navigate("indeling", {trigger: true, replace:true});

	},

	DraaiRoulette: function(e){


		console.log('[RouletteView] clicked');

     $('.roulettePopUp').show();

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
