window.onload = function() {
	var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'gameContainer');
	//	Add the States your game has.
	game.state.add('Boot', Game.Boot);
	game.state.add('Preloader', Game.Preloader);
	game.state.add('MainMenu', Game.MainMenu);

	//	Start the Boot state.
	game.state.start('Boot');
};
