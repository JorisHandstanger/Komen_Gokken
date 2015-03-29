var user = require('../models/User.js');

var UserCollection = Backbone.Collection.extend({

	model: user,
	url: './api/users',
	parse: function(response) {
      return response.results;
  },

  sync: function(method, model, options) {
      var that = this;
      var params = _.extend({
          type: 'GET',
          dataType: 'jsonp',
          url: that.url,
          processData: false
      }, options);

      return $.ajax(params);
  }

});

module.exports = UserCollection;
