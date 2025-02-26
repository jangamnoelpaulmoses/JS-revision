// 2  types of memorry;

// 1. Stack - Primitive




// 2. Heap - Non Primitive - passed as reference


let name = "noel"; // noel
name = "paul";  // paul

console.log(name); // paul



let myObj = {
    name : "moses",
    age: 25
}

let obj2 = myObj; 



console.log(obj2.name); // moses

obj2.name = "jangam" 
console.log(myObj.name) // jangam
console.log(obj2.name); // jangam