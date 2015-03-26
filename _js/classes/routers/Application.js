var LoginView = require('../views/LoginView.js');
var navView = require('../views/NavView.js');

var Application = Backbone.Router.extend({
	routes: {
		"logins": "logins",
		"*actions": "default"
	},


	empty: function(){

		$('.container').empty();

	},

	default : function(){
		this.navigate("logins", {trigger: true});

	},

	logins: function(){
		this.empty();
		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.logins = new LoginView();
		$('.container').append(this.logins.render().el);

	},



});

module.exports = Application;
