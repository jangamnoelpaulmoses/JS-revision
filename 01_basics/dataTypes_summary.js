/**
 * 
 * Datatypes are of two types
 * 
 *  
 * 1. Primitive -  passed by call by value, not by reference
 * 
 * string, Number, Boolean, null, undefined, symbol(to make something unique), BigInt
 * 
 * 
 * 
 * 
 * 
 * 
 * 2. Non Primitive
 * 
 * these are reference types, called by reference, memory in reference
 * 
 * arrays, objects, functions 
 * 
 * 
 * 
 * 
 * 
 * 
 * *** JS is dynamically typed;
 * 
 */
const id= Symbol('123');
const id2= Symbol('123'); // type is symbol
console.log(id);
console.log(id2);

let a = [12, 4,34, 3543,34, 34,35]

console.log(id===id2); // false
 let obj ={
    name  : "noel",
    age:"25"

}
// you can treat function as variable;
const myFun = function(){
    console.log("hello");
}




console.log(obj.name);

myFun(); // hello
console.log(typeof myFun); // function (can also be called as object function)
console.log(typeof obj); // object
console.log(typeof a); // object