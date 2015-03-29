var DagView = require('./DagView.js');
var DagenCollection = require('../collections/DagenCollection.js');

var HomeView = Backbone.View.extend({

	tagName: 'div',

	events: {

		'click .cd-menu-trigger': 'OpenClickNavigation',

	},

	OpenClickNavigation: function(){


	console.log('navigation click');

	event.preventDefault();
	$('.cd-main-content').addClass('move-out');
	$('.main-nav').addClass('is-visible');
	$('.cd-shadow-layer').addClass('is-visible');
	$('.cd-menu-trigger').prop("disabled", true);

	$(".cd-main-content").css("overflow-x, hidden;");

	//close menu

	$('.cd-close-menu').on('click', function(event){
	event.preventDefault();
	$('.cd-main-content').removeClass('move-out');
	$('.main-nav').removeClass('is-visible');
	$('.cd-shadow-layer').removeClass('is-visible');
	$('.cd-menu-trigger').prop("disabled", false);

	});

	},

	initialize: function(){

		this.collection = new DagenCollection();
		this.listenTo(this.collection, 'sync', this.renderView);
		this.collection.fetch();

	},

	renderView: function  () {
		this.$el.empty();

		this.collection.forEach(this.renderDay, this);
	},

	renderDay: function  (day) {
		var view = new DagView({
			model: day
		});
		this.$el.append(view.render().el);
	},
	render: function(){
		return this;
	}

});

module.exports = HomeView;
