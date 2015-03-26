var Gokken = require('../models/Gokken.js');


var GokkenCollection = Backbone.Collection.extend({

	model: Gokken,
	url: '/Komen_Gokken/api/logins/',

	initialize: function(options){
		if(options){
			this.format = options.format;
		}
	},

	sync: function(method, model, options) {
		if(model.methodUrl && model.methodUrl(method.toLowerCase())) {
			options = options || {};
			options.url = model.methodUrl(method.toLowerCase());
		}
    Backbone.Collection.prototype.sync.apply(this, arguments);
	},


});



module.exports = GokkenCollection;
