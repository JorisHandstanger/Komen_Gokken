var navView = require('../views/NavView.js');
var slotmView = require('../views/slotmView.js');
var homeview = require('../views/HomeView.js');

var Application = Backbone.Router.extend({

	routes: {

		"indeling": "indeling",
		"home": "home",
		"*actions": "default"

	},

	empty: function(){

		$('.container').empty();

	},

	default : function(){

		this.navigate("indeling", {trigger: true});

	},

	indeling: function(){
		this.empty();

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.slotmachine = new slotmView();
		$('.container').append(this.slotmachine.render().el);

	},

	home: function(){

		this.empty();

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.homeview = new slotmView();
		$('.container').append(this.homeview.render().el);

	}

});

module.exports = Application;
