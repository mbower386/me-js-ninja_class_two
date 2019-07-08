function Ninja(name) {
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;

  this.sayName = function () {
    console.log("My ninja name is " + this.name + "!");
  }
  this.showStats = function () {
    console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
  }
  this.drinkSake = function () {
    this.health += 10;

    if (this.health > 100) {
      this.health = 100;
    }
  }
  this.punch = function (enemy) {
    if (typeof (enemy) === Ninja) {
      enemy.health -= 5;
      console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
    }
  }
  this.kick = function () {
    if (typeof (enemy) === Ninja) {
      enemy.health -= 15;
      console.log(enemy.name + " was punched by " + this.name + " and lost 15 health!");
    }
  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
