Game.Hero = function(game, level, experience, equipment){
    this.game = game;
    this.level = level;
    this.exp = experience;
    this.equipment = equipment;
    this.abilityPower = null;
    this.abilities = null;
    this.requiredExp = null;

}

Game.Hero.inherits(Game.Character);

Game.Hero.method('getLevel', function() {
    return this.level;
});

Game.Hero.method('getExp', function() {
    return this.exp;
});

Game.Hero.method('getEquipment', function(){
    return this.equipment;
});

Game.Hero.method('getAbilityPower', function(){
    return this.abilityPower;
});

Game.Hero.method('getAbilities', function(){
    return this.abilities;
});

Game.Hero.method('getRequiredExp', function(){
    return this.requiredExp;
});

Game.Hero.method('setLevel', function(level) {
    this.level = level;
});

Game.Hero.method('setExp', function(exp) {
    this.exp = exp;
});

Game.Hero.method('setEquipment', function(equip){
    this.equipment = equip;
});

Game.Hero.method('setAbilityPower', function(ap){
    this.abilityPower = ap;
});

Game.Hero.method('setAbilities', function(abilities){
    this.abilities = abilities;
});

Game.Hero.method('setRequiredExp', function(requiredExp){
    this.requiredExp = requiredExp;
});
