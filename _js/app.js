var Handlebars = require("hbsfy/runtime");
var Application = require("./classes/routers/Application.js");

function init(){

	console.log("[App] start Backbone");

	Window.Application = new Application();

	//backbone gaat router opstarten:
	Backbone.history.start();

	//open menu
	$('.cd-menu-trigger').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').addClass('move-out');
	$('.main-nav').addClass('is-visible');
	$('.cd-shadow-layer').addClass('is-visible');
	$('.cd-menu-trigger').prop("disabled", true);

	$(".cd-main-content").css("overflow-x, hidden;");

	});
	//close menu
	$('.cd-close-menu').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').removeClass('move-out');
	$('.main-nav').removeClass('is-visible');
	$('.cd-shadow-layer').removeClass('is-visible');
	});
}

init();
