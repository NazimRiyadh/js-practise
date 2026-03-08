function person(name, age, uni)
{
    this.name=name;
    this.age=age;
    this.uni=uni;
    function start()
    {
        console.log("poralekha shuru")
    }
}

const first=new person("Riyadh", 24, "AIUB")
console.log(first)
first.name="Ridoy"
console.log(first)


for(let x in first)
{
    console.log(x, ":", first[x])
}

console.log(Object.entries(first))
console.log(Object.keys(first))
console.log(Object.values(first))

const Gym={
    name: "MuscleFuel",
    address: "Ruporshi Banglar edike",
    fees: 800,
    trainer:{
        name:"Samim",
        age:21
    }
}
console.log(Gym.trainer.name)

const {name: gym_name}= Gym
console.log(gym_name)

const {address: thikana}=Gym
console.log(thikana)

const {trainer:{name: trainer_name}}=Gym
console.log(trainer_name)

const{bg= "B+"}=Gym
console.log(bg)

const pushup=["normal", "diamond", "military", "incline", "wall"]
const[easy, , , ,mid]=pushup
console.log(mid)

const idendity={
    name:"tamim",
    age:24,
    uni:"AUST",
    weight:80
}
function retstring(obj){
for(let x in idendity)
{
    if(typeof(idendity[x])==="string")
        console.log(idendity[x])
}
}
retstring(idendity)


//clone & merge object

const billu={
    name:"kolti",
    color:"white_orange",
    status:"missing"
}

const dog={
    dname:"tommy",
    dcolor:"white_brown",
    dstatus:"injured"
}

const animal=Object.assign({}, dog, billu)
console.log(animal)

const doggy=Object.assign({},dog)
console.log(doggy)
doggy.breed="deshi"
console.log(doggy)


//spread operator
const yo=["yo", "yo", "chiki", "chiki"]
const takdhum=["dhin", "tana", "dhum", "tana"]

const song=[...yo,...takdhum]
console.log(song)

//Optional chaining
console.log(billu?.breed)

//converting to json
const json_billu=JSON.stringify(billu)
console.log(json_billu)

//converting to object
const obj_billu=JSON.parse(json_billu)
console.log(obj_billu)

//Higher Order function
const num=[2, 4, 5, 3, 7]
const double=num.map(x=>x*2)
console.log(double)

const chakni=double.filter(x=>x>4)
console.log(chakni)

const total=chakni.reduce((accu, curr)=>curr*accu,1)
console.log(total)

chakni.forEach(element => {
    console.log(element)
});

let pro="samim"
var inter="arif"
const beginner="riyadh"
{
    let pro="Tamir"
    var inter="Samin"
    const beginner="tamim"
}
console.log(pro)
console.log(inter)
console.log(beginner)

const coke_studio=[3, 1, 2, 4, 8]
coke_studio.push(10)
console.log(coke_studio)
coke_studio.pop()
console.log(coke_studio)
coke_studio.shift()
console.log(coke_studio)
coke_studio.unshift(20)
console.log(coke_studio)


console.log(coke_studio.find(x=>x%2==0))
console.log(coke_studio)
console.log(coke_studio.findIndex(x=>x>0))

let task="tommy k scabo khawate hobe"
console.log(task.length)
console.log(task.charAt(2)) 

console.log(task.slice(4,9))
console.log(task.substring(1, 4)) 

let fruits = ["apple", "banana", "mango", "orange"];
let removed = fruits.splice(1, 2); 

console.log(removed); // ["banana", "mango"]
console.log(fruits);  // ["apple", "orange"] ❌ changed

let fruitss = ["apple", "orange"];
fruitss.splice(1, 0, "banana", "mango"); 

console.log(fruitss); // ["apple", "banana", "mango", "orange"]


//lexical scope
//the use scope of variable in function
function outter()
{
    let apple=10;
    function inner()
    {
        const l=`I am inner, i have ${apple}`
        console.log(l)
        return l
    }
    return inner()
}
outter()

//closure
function create_acc(amount)
{
    let balance=amount
    return{
        deposit(taka){balance+=taka},
        withdraw(taka){balance-=taka},
        getbalance(){
            console.log(balance)
        }
    }
}

const riyadh=create_acc(100)
riyadh.getbalance()
riyadh.deposit(100)
riyadh.getbalance()

//function factory

function garments(name)
{
    return {kaj(domain, beton)
    {
        console.log(`ami ${name}, ami kaj kori
            ${domain} e, amr beton ${beton}`
        )
    }
}
}

const roksana= garments("rokasane")
roksana.kaj("apperal", 1000)

//hoisting 
//var hoisting 
console.log(hoisting)
var hoisting=100;

/*
console.log(let_hoisting)
let let_hoisting=10
will privide error//reference error
*/

sayHello();
function sayHello()
{
    console.log("hello boi!")
}

/*
will rovide error
function expression reference error

console.log(yoyo)
const yoyo=()=>{
    console.log("yo yo honey singh")
}
*/

//imediately called fucntion
const kiyo=(()=>
console.log("ki mia ki obostha"))
()

const arrow={
    name: "S_Line",
    type: "thriller",
    rating: 9,
    info(){
        console.log(`${name} is ${this.type}`)
    }
}
arrow.info()


function call_later(chicko, mogger)
{
    console.log(`I am ${chicko}`)
    mogger();
}
function mogger()
{
    console.log("I love mogging")
}
call_later("Chicko", mogger)

const abbu={
    time: 4.30,
    terminal: 2,
    gari: "toyota",
    infoo(){
        console.log(`abbu ${this.time} e asbe`)
    }
}
abbu.infoo();