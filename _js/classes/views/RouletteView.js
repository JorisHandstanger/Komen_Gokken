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

		 Window.Application.navigate("indeling", {trigger: true});

	},

	DraaiRoulette: function(e){

		console.log('[RouletteView] clicked');
    $('.roulettePopUp').delay( 3000 ).fadeIn( 600 );

    $('.rouletteSVG').css({
        "-webkit-transform": "rotate(660deg)",
        "-moz-transform": "rotate(660deg)",
        "transform": "rotate(660deg)"
    });

    $('.rouletteBol').css({
        "-webkit-transform": "rotate(235deg)",
        "-moz-transform": "rotate(235deg)",
        "transform": "rotate(235deg)"
    });


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
