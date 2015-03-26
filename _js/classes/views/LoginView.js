var template = require('../../../_hbs/logins.hbs');
var KomenCollection = require('../collections/GokkenCollection.js');

var LoginView = Backbone.View.extend({

	template: template,
	tagName: 'main',
	className: "cd-main-content",


	initialize: function(){
		console.log("view loaded")

		this.collection = new KomenCollection();
		this.listenTo(this.collection, 'sync', this.renderlogins);
		this.collection.fetch();



	},

	renderLogins: function(){

		console.log('[albumsView] RenderView');

		this.$logins.empty();
		this.collection.forEach(this.renderlogins, this);

	},


	render: function(){


		this.$el.html(this.template());
		this.$logins = this.$el.find('.cd-main-content');
		return this;

	}

});

module.exports = LoginView;
