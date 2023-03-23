// function sum (){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];        
//     }
//     return sum; 
// }

// function sum (...args){

//     let sum = 0;
//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];        
//     }
//     return sum; 
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);


// Function.prototype.myBind = function(){
//     const that = this; 
//     let args = Array.from(arguments);
//     return function (){
//         let argsTwo = Array.from(arguments);
//        return that.apply(args[0], args.slice(1).concat(argsTwo));
//     }
// }

Function.prototype.myBind = function (...args) {
    const that = this;
    //let args = Array.from(arguments);
    return function () {
        let argsTwo = Array.from(arguments);
        return that.apply(args[0], args.slice(1).concat(argsTwo));
    }
}


class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// console.log(markov.says("meow", "Ned"));
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// console.log(markov.says.myBind(pavlov, "meow", "Kush")());
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// console.log(markov.says.myBind(pavlov)("meow", "a tree"));
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// console.log(markov.says.myBind(pavlov, "meow")("Markov"));
// // Pavlov says meow to Markov!
// // true


function curriedSum(numArgs){

    let numbers = [];
    return function _curriedSum(num){
        numbers.push(num);
        if (numbers.length === numArgs){
            let sumnum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sumnum += numbers[i];
            }
            return sumnum;
        }else {
            return _curriedSum; 
        }
    }
}
// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

1234