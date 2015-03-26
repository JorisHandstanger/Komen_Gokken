var Gokken = Backbone.Model.extend({


	defaults: {

		"dagen": "",

	},

	url: '/Komen_Gokken/api/logins/',

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	},


});

module.exports = Gokken;
