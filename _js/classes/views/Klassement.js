var template = require('../../../_hbs/klassement.hbs');

var Klassement = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",

	events: {

		'click .cd-menu-trigger': 'OpenClickNavigation',

	},

	OpenClickNavigation: function(){


	console.log('navigation click');

	event.preventDefault();
	$('.cd-main-content').addClass('move-out');
	$('.main-nav').addClass('is-visible');
	$('.cd-shadow-layer').addClass('is-visible');
	$('.cd-menu-trigger').prop("disabled", true);

	$(".cd-main-content").css("overflow-x, hidden;");

	//close menu

	$('.cd-close-menu').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').removeClass('move-out');
	$('.main-nav').removeClass('is-visible');
	$('.cd-shadow-layer').removeClass('is-visible');
	$('.cd-menu-trigger').prop("disabled", false);

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

module.exports = Klassement;
