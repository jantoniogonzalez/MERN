class Ninja{
    constructor(name, health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log("Name: "+this.name)
        console.log("Health: "+this.health)
        console.log("Speed: "+this.speed)
        console.log("Strength: "+this.strength)
    }
    drinkSake(){
        this.health += 10
        console.log(this.name+"'s health has increased by 10")
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdom(){
        super.drinkSake()
        console.log("If you always say no, you'll never say yes")
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();

const superSensei1 = new Sensei("Master Splinter");
superSensei1.speakWisdom();
superSensei1.showStats();