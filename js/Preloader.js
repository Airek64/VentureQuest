
Game.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

Game.Preloader.prototype = {

	preload: function () {

        
	},

	create: function () {
       

	},

	update: function () {

			this.state.start('MainMenu');

	}

};