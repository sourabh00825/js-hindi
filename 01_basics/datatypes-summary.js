// primitive

// 7 types of primitive : string , number , boolearn , null , undefined , symbol , bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol ('123')
console.log(id === anotherId);
// Referencec (Non primitive)

// types : Array , Objects , functions 

const heros =  ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "sourabh",
    age:21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
