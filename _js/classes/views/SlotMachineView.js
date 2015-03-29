var template = require('../../../_hbs/slotmachine.hbs');
var SlotView = require('./SlotView.js');

var SlotMachineView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",

	events: {
		'click .slotbutton': 'roll',
		'click .btnProceed2': 'GaNaarHome'

	},

	GaNaarHome: function() {

		 Window.Application.navigate("home", {trigger: true, replace:true});

	},

	initialize: function(){
		var users = ["jan", "pier", "tjores", "corneel"];

		this.slot1 = new SlotView({
			id: 1,
			user: 2,
			players: users
		});

		this.slot2 = new SlotView({
			id: 2,
			user: 3,
			players: users
		});

		this.slot3 = new SlotView({
			id: 3,
			user: 3,
			players: users
		});

		this.slot4 = new SlotView({
			id: 4,
			user: 4,
			players: users
		});

	},

	render: function(){

		this.$el.html(this.template());
		this.$el.find("#slots").append(this.slot1.$el);
		this.$el.find("#slots").append(this.slot2.$el)
		this.$el.find("#slots").append(this.slot3.$el)
		this.$el.find("#slots").append(this.slot4.$el)
		this.slot1.render();
		this.slot2.render();
		this.slot3.render();
		this.slot4.render();
		return this;
	},

	roll: function(){


    $('.roulettePopUp').delay( 7000 ).fadeIn( 600 );

		this.slot1.roll();

		var _this = this;

		setTimeout(function() {
			_this.slot2.roll();
		}, 500);

		setTimeout(function() {
			_this.slot3.roll();
		}, 1000);

		setTimeout(function() {
			_this.slot4.roll();
		}, 1500);
	}

});

module.exports = SlotMachineView;
