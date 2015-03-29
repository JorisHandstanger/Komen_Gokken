var navView = require('../views/NavView.js');
var slotmachineview = require('../views/SlotMachineView.js');
var homeview = require('../views/HomeView.js');
var rouletteview = require('../views/RouletteView.js');

var klassementview = require('../views/Klassement.js');

var kalenderview = require('../views/Kalender.js');

var Application = Backbone.Router.extend({

	routes: {

		"indeling": "indeling",
		"deelnemen": "deelnemen",
		"home": "home",
		"klassement": "klassement",
		"kalender": "kalender",
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

	klassement: function(){

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.klassement = new klassementview();
		$('.container').append(this.klassement.render().el);

	},

	kalender: function(){

		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.kalender = new kalenderview();
		$('.container').append(this.kalender.render().el);


	}

});

module.exports = Application;
