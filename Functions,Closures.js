//Lexical Scope & Closure
let a="Riyadh"
let b="Neha"
function sum()
{
    return a+b
}
console.log(sum())

function outter()
{
    let ab="Closure"
    function inner()
    {
        console.log(ab)
    }
    inner()
}
outter()

//Function Factory

function work(name)
{
    return function(kaj)
    {
    console.log(`${name}, tmi ${kaj} koro`)   
    }
}

const riyadh=work("riyadh")
console.log(riyadh("poralekha"))



function multiplier(x) {
  return function(y) {
    return x * y;
  }
}

const double = multiplier(2);
console.log(double(5)); // 10

const triple = multiplier(3);
console.log(triple(4)); // 12

//Real life analogy
//making custom tiifin box

function tiffin(name)
{
    return function(dish, drinks){
        console.log(`${name}, ${dish} r ${drinks} khabe`)       
    }
}

//tiffin function excuted
const ammu=tiffin("Seema")

//kintu ekhno name mone rakhbe
ammu("Biriyani", "Mojo")

//output a show korbe:
//Seema, Biriyani r Mojo khabe
//function excute howar por o ammur name mone rkhse


//Function----------------

//declaretion(hoisted)
function greet()
{
    console.log("Hello boi")
}

//statement(not hoisted)
const hello=greet()

/*
// ✅ FUNCTION HOISTING IN JAVASCRIPT

// 1. Function Declaration → ✅ Fully Hoisted
// You can call it before the definition.
sayHello(); // Works!

function sayHello() {
  console.log("Hello!");
}

// 2. Function Expression → ❌ Not Hoisted Fully
// Only the variable is hoisted (not the function body).
// So calling before assignment gives an error.
sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization

const sayHi = function() {
  console.log("Hi!");
};

// 3. Arrow Function → ❌ Same as Function Expression
// Variable is hoisted, but not the function.
greet(); // ❌ Error: Cannot access 'greet' before initialization

const greet = () => {
  console.log("Greetings!");
};

// ✅ SUMMARY:
// Function Declaration:     ✅ Hoisted completely
// Function Expression:      ❌ Only variable name hoisted
// Arrow Function:           ❌ Only variable name hoisted

*/

//Arrow functions

const welcome=(name)=>
{
    console.log(`hello, ${name}`)
}
welcome("riyadh")


//parameters vs arguements

function add(x, y) {
  return x + y; // x and y are parameters
}
add(2, 3); // 2 and 3 are arguments

//rest parameteres
//(can take unlimited parameter as array)
function total(...item)
{
    return item.reduce((total, curr)=> total+curr)
}
console.log(total(1,2,3))//6

//default parameter set
//(no error if no value passed)
function sayHi(name ="Riyadh")
{
    console.log(`Hi! ${name}`)
}
sayHi("tourist")

//Anonymous function
const ram=()=>"Shinigami deteted"
console.log(ram())


// ✅ Immediately Invoked Function Expression (IIFE)

// This function runs immediately after it is defined,
// creating a new scope and avoiding polluting the global namespace.

const imeed=(function() {
  console.log("Runs immediately");
})();

// Output:
// Runs 

/*
function greet() {} // function
const obj = {
  greet() {}        // method
}
*/


//callback 

/*
You're doing homework, and you tell your mom:

"When dinner is ready, call me."

✅ You gave her a callback — you're saying:
“Run this function (call me) when you’re done 
(with dinner).”
*/


function doHomework(subject, whenDone) {
  console.log("Doing homework on", subject);
  whenDone(); // callback runs here
}

doHomework("Math", function() {
  console.log("Homework done!");
});

const person = {
  name: "Riyadh",
  talk() {
    console.log("My name is", this.name);
  }
};

const talkFunc = person.talk
talkFunc(); // What happens?


console.log(this)

const user = {
  name: "Riyadh",
  greet() {
    console.log("Hi,", this.name);
  }
};

user.greet(); //Hi Riyadh

const user1 = {
  name: "Riyadh",
  greet() {
    console.log("Hi,", this.name);
  }
};

const sayHii = user1.greet.bind(user);
sayHii(); // Hi, Riyadh


const person2 = {
  name: "Riyadh",
  greet: () => {
    console.log("Arrow:", this.name);
  },
  talk() {
    console.log("Regular:", this.name);
  }
};

person2.greet(); // Arrow:
person2.talk();  // Regular: 


class Car {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log("Car name:", this.name);
  }
}

const c = new Car("Supra");
c.show(); // ?

class human{
    constructor(name, age)
    {
        this.name=name
        this.age=age
    }
}
const ami=new human("Fahad", 20)
console.log(ami.name)