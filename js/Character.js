Game.Character = function() {

    this.health = null;
    this.attackPower = null;
    this.def = null;
    this.critChance = null;
    this.critResistance = null;
    this.sprite = null;
    this.statusEffect = null;
    
}

Game.Character.prototype = {
    
    // params: damage = the damage that is removed from the health
    dealDamage: function(damage) {
        this.health -= damage;
    },
    
    getHealth: function(){
        return this.health;
    },
    
    getAttackPower: function(){
        return this.attackPower;
    },
    
    getDef: function(){
        return this.def;
    },
    
    getCritChance: function(){
        return this.def;
    },
    
    getCritResistance: function(){
        return this.critResistance;
    },
    
    getSprite: function(){
        return this.sprite;
    },
    
    getStatusEffecct: function(){
        return this.statusEffect;
    },
    
    setHealth: function(health){
        this.health = health;
    },
    
    setAttackPower: function(attackPower){
        this.attackPower = attackPower;
    },
    
    setDef: function(def){
        this.def = def;
    },
    
    setCritChance: function(critChance){
        this.critChance = critChance;
    },
    
    setCritResistance: function(critResist){
        this.critResistance = critResist;
    },
    
    setSprite: function(sprite){
        this.sprite = sprite;
    },
    
    setStatusEffect: function(status){
        this.statusEffect = status;
    }
    
}