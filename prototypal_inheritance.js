Function.prototype.inherits = function (SuperClass){

    function Surrogate(){}
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this; 
}

function MovingObject() { 
    
  
}

MovingObject.prototype.move = function(){
    console.log("vroom");
}

function Ship() { }
Ship.inherits(MovingObject);
const ship = new Ship;
ship.move();

function Asteroid() { }

Asteroid.prototype.go = function(){
    console.log("zoom");
}

Asteroid.inherits(MovingObject);
//ship.go();
const object = new MovingObject;
//object.go();

console.log(Ship instanceof MovingObject)