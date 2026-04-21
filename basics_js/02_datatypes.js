"use strict"; // treat all JS code as newer version of JS
// alert("Hello"); it will throw error because everything here is in document(node js) not browser


// number -> 2^53
// bigint
// string
// bool -> true/false
// null
// undefined

console.log(typeof null); // object
console.log(typeof undefined) // undefined

let id = Symbol('123') // for uniqueness
let anotherId = Symbol('123')

console.log(id === anotherId) // false

// Non - primitive datatypes = array, objects, functions as when they are passed to some function then there address is passed not their copy

const heros = ["Ironman", "Thor", "Arya Stark"]

let myObj = {
    name : "Arya Stark",
    age : 12,
    Address : "Winterfell"
}

let myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof anotherId)



// *****************************************************

// Types of Memory -> Stack and Heap
// For Primitive(number, string, symbol, boolean etc) -> Stack
// For Non-Primitive -> Heap


let userOne = {
    email : "nitin@google",
    empId : 123456
}

let userTwo = userOne

userTwo.email = "nitin@flipkart"

console.log(userOne.email)

// As we have discussed earlier that non- primitive data types are stored in heap and whenever we copy they give the address so userOne gave address where it was pointing in heap and userOne and userTwo both were in stack and pointing to same memory location on heap
