var Dag = require('../models/Dag.js');

var DagenCollection = Backbone.Collection.extend({

	model: Dag,
	url: './api/dag',
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

module.exports = DagenCollection;
