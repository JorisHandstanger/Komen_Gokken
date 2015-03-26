var HomeView = require('../views/LoginView.js');

var Application = Backbone.Router.extend({

	routes: {

		"logins": "logins",

	},


	empty: function(){

		$('.container').empty();

	},

	default : function(){

		this.navigate("logins", {trigger: true});

	},

	logins: function(){

		this.empty();
		this.logins = new LoginView();
		$('.container').append(this.logins.render().el);

	},



});

module.exports = Application;
