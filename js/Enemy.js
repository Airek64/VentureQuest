Game.Enemy = function(game){
    this.game = game;
    this.itemDrop = null;
    this.dropChance = null;
    this.escChance = null;
    this.expGain = null;
    
}

Game.Enemy.inherits(Game.Character);

Game.Enemy.method('getItemDrop', function() {
    return this.itemDrop;
});

Game.Enemy.method('getDropChance', function() {
    return this.dropChance;
});

Game.Enemy.method('getEscChance', function() {
    return this.escChance;
});

Game.Enemy.method('getExpGain', function() {
    return this.expGain;
});

Game.Enemy.method('setItemDrop', function(item) {
    this.itemDrop = item;
});

Game.Enemy.method('setDropChance', function(chance) {
    this.dropChance = chance;
});

Game.Enemy.method('getEscChance', function(chance) {
    this.escChance = chance;
});

Game.Enemy.method('getExpGain', function(exp) {
    this.expGain = exp;
});

