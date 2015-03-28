var navView = require('../views/NavView.js');
var slotmachineview = require('../views/SlotMachineView.js');
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

		this.navigate("deelnemen", {trigger: true});

	},

	indeling: function(){

		this.empty();

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.slotmachine = new slotmachineview();
		$('.container').append(this.slotmachine.render().el);

	},

	deelnemen: function(){

		this.empty();


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
