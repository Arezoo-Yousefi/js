const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy -= damage;
        if(this.energy <= 0){
            this.loseLife();
            this.energy = 100;
        }
    },
    recoverenergy: function(energyUp){
        this.energy += energyUp;
        if(this.energy > 100){
            this.energy = 100;
        }
    },
    loseLife: function(){
        this.lives -= 1;
    },
    recoverLife: function(){
            this.lives += 1;
            if(this.lives >= 99){
                this.lives = 99;
            }
    },
}
player.name = "Arezoo";
player.loseLife();
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverenergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife();
player.recoverLife();
player.recoverLife();
console.log(`${player.name} has ${player.energy} energy and  ${player.lives} lifes`);