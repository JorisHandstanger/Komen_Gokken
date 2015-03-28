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
		var players = ["persoon1", "persoon2", "persoon3", "persoon4"];

		this.ypos = 0;

		var context = this.ctx[0].getContext('2d');
		var resultctx = this.result[0].getContext('2d');

		var imgArray = [];
		var imgCurr = 0;

		this.ctx.height = (64*players.length)*2;

		for(i=1; i <= players.length*2-1; i++){
			imgArray[imgCurr] = new Image();

			imgArray[imgCurr].onload = (function () {
          var thisY = (i * 64) - 64;

          return function () {
              context.drawImage(this, 0, thisY);
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
            context.drawImage(this, 0, (7 * 64));
        };
    }());

		lastImage.src = './assets/img/1.png';

		var resultImg = new Image();

		resultImg.onload = (function () {
        return function () {
            resultctx.drawImage(resultImg, 0, 0);
        };
    }());

		resultImg.src = './assets/img/' + this.options.user + '.png';
		resultctx.fillStyle="#FFFFFF";
		resultctx.fillRect(0,0,66,66);
	},

	roll: function(){

		this.ctx[0].className = "canvas animating";

		console.log(this.ctx[0].className);
		var _this = this;

		setTimeout(function() {
			_this.ctx.css("margin-top", "-512px");
		  _this.result.animate({marginTop:"0"}, 300, "linear");
		}, 3000);

	},


});

module.exports = SlotView;
