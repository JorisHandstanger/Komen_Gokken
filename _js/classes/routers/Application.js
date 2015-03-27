var navView = require('../views/NavView.js');
var slotview = require('../views/SlotView.js');
var homeview = require('../views/HomeView.js');
var rouletteview = require('../views/RouletteView.js');

var Application = Backbone.Router.extend({

	routes: {

		"indeling": "indeling",
		"deelnemen": "deelnemen",
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

		this.slotmachine = new slotview();
		$('.container').append(this.slotmachine.render().el);

	},

	deelnemen: function(){

		this.empty();

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.deelnemen = new rouletteview();
		$('.container').append(this.deelnemen.render().el);


	},

	home: function(){

		this.empty();

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.home = new homeview();
		$('.container').append(this.home.render().el);

	},

});

module.exports = Application;
