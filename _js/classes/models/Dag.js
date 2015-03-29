var Dag = Backbone.Model.extend({

	defaults: {
		text: "dit is de default text"
	},

	urlRoot: './api/dag',

	sync: function(method, model, options) {

		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	}

});

module.exports = Dag;
