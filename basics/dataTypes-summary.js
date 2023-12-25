// Primitive

// 7 types : Sting, Number, Boolean, null, undefind, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// console.log(isLoggedIn);
// console.log(outsideTemp);


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 38648787485786859448658n
// console.log(typeof Array)

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //Array


let myObj = {
    name: "suryakant",     // objects
    age: 22,
}

const myfunction = function(){
    console.log("Hello Suryakant");
}
console.log(typeof myfunction)