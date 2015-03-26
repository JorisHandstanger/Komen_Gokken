var template = require('../../../_hbs/logins.hbs');
var AlbumCollection = require('../collections/GokkenCollection.js');


var LoginView = Backbone.View.extend({

	template: template,


	initialize: function(){


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
