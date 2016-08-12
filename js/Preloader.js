
Game.Preloader = function (game) {

    this.game = game;
	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

Game.Preloader.prototype = {

	preload: function () {

        
	},

	create: function () {
        Game.mage = new Game.Hero(this.game);
        Game.warrior = new Game.Hero(this.game);
        Game.ranger = new Game.Hero(this.game);
	},

	update: function () {

			this.state.start('MainMenu');

	}

};