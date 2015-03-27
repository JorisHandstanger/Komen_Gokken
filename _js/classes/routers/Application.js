var navView = require('../views/NavView.js');
var slotmView = require('../views/slotmView.js');

var Application = Backbone.Router.extend({
	routes: {
		"week": "week",
		"*actions": "default"
	},


	empty: function(){

		$('.container').empty();

	},

	default : function(){
		this.navigate("week", {trigger: true});

	},

	week: function(){
		this.empty();
		this.nav = new navView();
		$('.container').append(this.nav.render().el);

		this.slotmachine = new slotmView();
		$('.container').append(this.slotmachine.render().el);

	},



});

module.exports = Application;
