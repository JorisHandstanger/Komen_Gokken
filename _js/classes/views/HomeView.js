var DagView = require('./DagView.js');
var DagenCollection = require('../collections/DagenCollection.js');

var template = require('../../../_hbs/homeview.hbs');


var HomeView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",


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

		this.render();

		this.collection = new DagenCollection();
		this.listenTo(this.collection, 'sync', this.renderViews);
		this.collection.fetch();

	},

	renderViews: function  () {
		this.$days.empty();

		this.collection.forEach(this.renderDay, this);

	},

	renderDay: function  (model) {
		var view = new DagView({
			model: model
		});
		this.$days.append(view.render().el);
	},
	render: function(){

				this.$el.html(this.template());

		return this;
	}

});

module.exports = HomeView;
