"use strict"

let m_value = "amazing"
if (m_value === "amazing")
    console.log("Hello Javascript")

console.log("debug info here🎉 ")

// type-conversion
//string
let value = true
console.log(typeof value)

value = String(value)
console.log(typeof value)

//number
let str = "123"
console.log(str, typeof str)

let num = Number(str);
console.log(num, typeof num);

let m_fun = function showMessage() {
    console.log("more detail");
}

console.log(m_fun)

class User {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log("Welcome " + this.name)
    }
}

console.log(typeof User)