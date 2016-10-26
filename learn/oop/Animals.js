function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function () {
    console.log("Walk by Animal.prototype.walk() with name: " + this.name);
};

Animal.prototype.sound = function () {
    console.log("Sound by Animal.prototype.sound() with name: " + this.name);
};

function Rabbit(name) {
    Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function () {
    console.log("Walk by Rabbit.prototype.walk() with name: " + this.name);
};

var rabbit = new Rabbit("Kiryl");
rabbit.walk();
rabbit.sound();
console.log("hello");
console.log("hello");