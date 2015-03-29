var template = require('../../../_hbs/day.hbs');
var DagView = Backbone.View.extend({

	template: template,


	initialize: function(){

		//this.render();

	},

	render: function(){

		this.$el.html(this.template(this.model.attributes));
		return this;

	}

});

module.exports = DagView;
