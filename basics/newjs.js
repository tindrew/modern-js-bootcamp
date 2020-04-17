//basics
// 4 ways to declare a string
var myString = "String"
let someString = 'another string';
const aString = `Backticks String${myString}`;
const anotherString = new String('this is a string')
// 3 ways to declare numbers
let num = 345
const someNum = new Number(34);
const num1 = parseInt('3456');

// 2 ways to write an array
const myArray = [1, 2, 3];
const anotherArray = new Array(3)

anotherArray[0] = 1;
anotherArray[1] = 2;
anotherArray[2] = 3;

// 2 ways to write an object
const anObject = {
    aThing: 2,
    anotherThing: 22
}

const myObject = new Object ({
    thisKey: 'drew',
    thisValue: 42
})

// two kinds of classes
class Maths {
    add(a, b) {
        return a + b;
    }
    static minus(a, b) {
        return a - b;
    }
}



// static methods can only be used on the class itself (It's statically bound to the class)
// add is an 'instance' method, used as a constructed version of the class


const myMath = new Maths;

console.log(myMath.add(3, 6))
console.log(Maths.minus(9, 5))

// this in the class is equal to the constructed object. This refers to the generated object
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setEmail(email) {
        this.email = email;
    }
    
}
// 'this' is only for instance class, not for static
const drew = new User ('Drew', 42);
console.log(drew);
drew.setEmail('tindrew@')
console.log(drew);

// promises examples
async function myFunc () {
    return 42;
}
function myFunc2 () {
    return new Promise(function (resolve, reject) {
        resolve(42);
    })
}


//reject examples
function myFunc3 () {
    return new Promise(function(resolve, reject) {
        reject('some error');
    })
}

async function myFunc4 () {
    throw new Error('Some Error')
}



