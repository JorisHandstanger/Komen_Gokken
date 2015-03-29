var template = require('../../../_hbs/slot.hbs');

var SlotView = Backbone.View.extend({

	template: template,
	tagName: 'div',

	initialize: function(options){
		this.options = options;
    _.bindAll(this, 'render');

		this.render();

	},

	render: function(){
		this.$el.html(this.template({id: this.options.id}));

		this.ctx = this.$el.find("#c" + this.options.id);
		this.result = this.$el.find("#cr" + this.options.id);

		this.setupCanvas();

		return this;

	},

	setupCanvas: function() {
		var players = this.options.players;

		var context = this.ctx[0].getContext('2d');
		var resultctx = this.result[0].getContext('2d');

		var imgArray = [];
		var imgCurr = 0;

		this.ctx.height = (64*players.length);

		for(i=1; i <= players.length; i++){
			imgArray[imgCurr] = new Image();
			var thisY = (i * 64) - 64;

			imgArray[imgCurr].onload = (function () {
					var thisY = (i * 64) - 64;
					var e = i;

          return function () {
              context.drawImage(this, 0, thisY);

              var user;

              user = players[e-1];

							context.font = "8pt Calibri";
         			context.fillText(user, 3, thisY+54);
          };

      }());

			if(i>4){
				imgArray[imgCurr].src = './assets/img/' + (i - 4) + '.png';
			}else {
				imgArray[imgCurr].src = './assets/img/' + i + '.png';
			}

			imgCurr += 1;
		}

		var lastImage = new Image();

		lastImage.onload = (function () {
        return function () {
            context.drawImage(this, 0, (4 * 64));
        };
    }());

		lastImage.src = './assets/img/1.png';

		var resultImg = new Image();

		var user = players[(this.options.user) - 1];

		resultImg.onload = (function () {
        return function () {
            resultctx.drawImage(resultImg, 0, 0);
            resultctx.font = "8pt Calibri";
         		resultctx.fillText(user, 3, 54);
        };
    }());

		resultImg.src = './assets/img/' + this.options.user + '.png';
	},

	roll: function(){

		this.ctx[0].className = "canvas animating";

		var _this = this;

		setTimeout(function() {
			_this.ctx.css("margin-top", "-512px");
		  _this.result.animate({marginTop:"0"}, 300, "linear");
		}, 2700);

	},


});

module.exports = SlotView;
