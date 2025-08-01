//constructor
function person(name, uni , age){
    this.name = name
    this.age = age
    this.uni = uni
    this.line = () => {
        console.log(`my name is ${name}, I study in ${uni} & I am ${age} `)
    }
}

//object creation
const riyadh = new person('Riyadh', 'AIUB', 24)

//accessing values
riyadh.uni = "NSU" // updates university to NSU

//iterating over objects
for(let x in riyadh) {
    console.log(x, ":", riyadh[x])
    // name : Riyadh
    // age : 24
    // uni : NSU
    // line : ƒ () { console.log(`my name is ${name}, I study in ${uni} & I am ${age} `) }
}

//Object utilities
console.log(Object.keys(riyadh))     // ["name", "age", "uni", "line"]
console.log(Object.values(riyadh))   // ["Riyadh", 24, "NSU", ƒ]
console.log(Object.entries(riyadh))  // [["name", "Riyadh"], ["age", 24], ["uni", "NSU"], ["line", ƒ]]

//nested objects
const Country = {
    name: "Bangladesh",
    capital: "Dhaka",
    government: {
        main: "Yusuf Sorkar",
        support: "jonogon",
        expire: "dunno"
    }   
}

console.log(Country)
/*
{
  name: 'Bangladesh',
  capital: 'Dhaka',
  government: { main: 'Yusuf Sorkar', support: 'jonogon', expire: 'dunno' }
}
*/

// Object destructuring
const { name: newname } = Country
console.log(newname) // Bangladesh

const { government: { main: Cheif } } = Country
console.log(Cheif) // Yusuf Sorkar

const { fav = "Uganda" } = Country
console.log(fav) // Uganda

//Array Destructuring and Skipping
const array = ['Cricket', 'Football', 'Basketball', 'Badminton']
const [first, , third] = array
console.log(third) // Basketball

//Practise----------------
const car = {
    company: "Toyota",
    engine: "V8",
    model: "Supra-mk4",
    start() {
        console.log("raatatattatttttaaaaaaa!")
    }
}
console.log(car)
// {company: 'Toyota', engine: 'V8', model: 'Supra-mk4', start: ƒ}
car.start() // raatatattatttttaaaaaaa!

//Write a function that takes an object and returns keys that have string values.
function retstring(obj){
    for(let x in obj){
        if(typeof(obj[x]) === 'string'){
            console.log(obj[x])
        }
    }
}
retstring(Country)
// Bangladesh
// Dhaka

//Clone & merge objects
const obj1 = { name: "Srabon" }
const obj2 = { name: "Riyadh" }
const brother = Object.assign({}, obj1, obj2)
console.log(brother) // { name: 'Riyadh' }

const obj3 = Object.assign({}, obj1)
console.log(obj3) // { name: 'Srabon' }

//Spread operator
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr = [...arr1, ...arr2]
console.log(arr) // [1, 2, 3, 4, 5, 6]

//Optional chaining
const student = {
    name: 'Riyadh',
    Course: {
        topic: "Web",
        Enterance: 2022
    }
}
console.log(student.Course?.major) // undefined

const jsonboy = JSON.stringify(student)
console.log(jsonboy) // {"name":"Riyadh","Course":{"topic":"Web","Enterance":2022}}

const parseboy = JSON.parse(jsonboy)
console.log(parseboy) // Same as original object

//-------------[Day-2]-----------------
//Higher Order Functions

// map
const num = [2, 4, 6, 8, 10]
const d = num.map(x => x * 2)
console.log(d) // [4, 8, 12, 16, 20]

// filter
const fil = num.filter(x => x > 5)
console.log(fil) // [6, 8, 10]

// map + filter
const better = () => {
    const a = num.map(x => x)
    const b = a.filter(x => x > 5)
    return b
}
console.log(better()) // [6, 8, 10]

// reduce
const sum = num.reduce((run , curr) => run * curr, 1)
console.log(sum) // 3840

num.forEach(element => {
    console.log(element)
})
// 2
// 4
// 6
// 8
// 10

const country = [
  { name: 'Bangladesh', capital: 'Dhaka' },
  { name: 'USA', capital: 'Washington D.C.' },
  { name: 'India', capital: 'New Delhi' }
];
const user = country.find(u => u.capital === 'Dhaka')
console.log(user) // { name: 'Bangladesh', capital: 'Dhaka' }

// let vs var
let pro = "Montu"
var noob = "Boltu"
var noob = "Asif"
console.log(pro, noob) // Montu Asif

{
    let pro = "Srabon"
    var noob = "Ridoy"
    console.log(pro, noob) // Srabon Ridoy
}

console.log("---Array Methods-----")
const meth = [1, 2, 3, 4, 5, 6]
console.log(meth) // [1, 2, 3, 4, 5, 6]

meth.push(123)
console.log(meth) // [1, 2, 3, 4, 5, 6, 123]

meth.pop()
meth.pop()
console.log(meth) // [1, 2, 3, 4, 5]

meth.unshift(12)
meth.unshift(10)
meth.shift()
console.log(meth) // [12, 1, 2, 3, 4, 5]

const hey = meth.map(x => x * 2)
console.log(hey) // [24, 2, 4, 6, 8, 10]

const you = hey.filter(x => x > 10)
console.log(you) // [24]

const summ = hey.reduce((runn, curr) => runn * curr, 1)
console.log(summ) // 92160

console.log(meth.find(x => x % 2 != 0)) // 1
console.log(meth.findIndex(x => x % 2 == 0)) // 0

console.log(meth.includes(3)) // true
console.log(meth.indexOf(4)) // 4

meth.sort((a, b) => a - b)
console.log(meth) // [1, 2, 3, 4, 5, 12]

console.log(meth.slice(1, 4)) // [2, 3, 4]
console.log(meth.splice(2, 1)) // [3] → removes item at index 2

console.log(meth.every(x => x > 10)) // false
console.log(meth.some(x => x > 10)) // true

console.log("--------String method-----")

let str = "World at war"
let str2 =str.concat(str)

console.log(str) // World at war

console.log(str.length)       // 13
console.log(str.charAt(2))    // r

console.log(str.slice(1, 4))      // orl
console.log(str.substring(1, 4))  // orl

console.log(str.indexOf('a'))     // 6
console.log(str.includes('ai'))   // false
console.log(str.startsWith('Hello')) // false
console.log(str.endsWith('!'))       // false

console.log(str.toUpperCase())   // WORLD AT WAR
console.log(str.toLowerCase())   // world at war

console.log('   Riyadh   '.trim()) // Riyadh
console.log(str.split(" "))         // ['World', 'at', 'war']

console.log(str.replace('war', 'love'))   // World at love
console.log(str.replaceAll('a', '@'))     // World @t w@r
