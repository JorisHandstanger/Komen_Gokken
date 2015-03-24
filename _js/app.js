var Handlebars = require("hbsfy/runtime");
var Application = require("./classes/routers/Application.js");

function init(){

	Window.Application = new Application();

	//backbone gaat router opstarten:
	Backbone.history.start();




}

init();
