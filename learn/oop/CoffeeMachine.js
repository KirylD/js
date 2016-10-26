function CoffeeMachine(power) {
    this.waterAmount = 0;
    var self = this;
    var WATER_HEAT_CONST = 3.00;

    function determineTime() {
        return self.waterAmount * WATER_HEAT_CONST * power;
    }

    function giveCoffee() {
        console.log("coffee");
    }
    
    this.run = function () {
        setTimeout(giveCoffee, determineTime());
    }
}

var coffeeMachine = new CoffeeMachine(2.20);
coffeeMachine.waterAmount = 1.000;

coffeeMachine.run();