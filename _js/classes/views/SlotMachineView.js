var template = require('../../../_hbs/slotmachine.hbs');
var SlotView = require('./SlotView.js');
var userCollection = require('../collections/UserCollection.js');

var SlotMachineView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",

	events: {
		'click .slotbutton': 'roll',
		'click .btnProceed2': 'GaNaarHome'
	},

	GaNaarHome: function() {

		 Window.Application.navigate("home", {trigger: true});

	},

	initialize: function(){

		var users = [];
		$.ajax({
		    async: false,
		    url: "./api/users",
		    dataType: "json",
		    success:  function(data) {
		        data.forEach(function(e){
							users.push(e.voornaam);
						});
		    }
		 });

		var dagen = [1, 2, 3, 4];
		dagen.sort(function() { return 0.5 - Math.random() });
		this.verdeling = [];

		this.verdeling[dagen[0]] = users[0];
		this.verdeling[dagen[1]] = users[1];
		this.verdeling[dagen[2]] = users[2];
		this.verdeling[dagen[3]] = users[3];

		this.slot1 = new SlotView({
			id: 1,
			user: dagen[0],
			players: users
		});

		this.slot2 = new SlotView({
			id: 2,
			user: dagen[1],
			players: users
		});

		this.slot3 = new SlotView({
			id: 3,
			user: dagen[2],
			players: users
		});

		this.slot4 = new SlotView({
			id: 4,
			user: dagen[3],
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
		var naam;
		$.ajax({
			async: false,
			url: 'index.php?page=checkloggedin',
			success: function(data) {
				naam = data.voornaam;
			}
		});

		var dag = this.verdeling.indexOf(naam);

		$('#dag')[0].innerHTML = dag;
    $('.roulettePopUp').delay( 7500 ).fadeIn( 600 );

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
