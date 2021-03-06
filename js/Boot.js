var Game = {};

Game.Boot = function (game) {

};

Game.Boot.prototype = {

    init: function () {

        //  Unless you specifically know your game needs to support multi-touch I would recommend setting this to 1
        this.input.maxPointers = 1;

        //  Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = false;

        if (this.game.device.desktop)
        {
            //  If you have any desktop specific settings, they can go in here
            this.scale.pageAlignHorizontally = true;
            this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        }
        else
        {
            //  Same goes for mobile settings.
            //  In this case we're saying "scale the game, no lower than 480x260 and no higher than 1024x768"
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.setMinMax(480, 260, 1824, 1026);
            this.scale.forceLandscape = true;
            this.scale.pageAlignHorizontally = true;
        }

    },

    preload: function () {


    },

    create: function () {

        this.state.start('Preloader');

    }

};