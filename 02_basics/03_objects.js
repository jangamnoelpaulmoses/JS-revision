// Objects can be declared as literal or constructor

// Singleton  when constructor, not singleton when literal


// const user = {} 

// or

// Object.create // constructor, singleton



// const user =  {
//     name :"noel",
//     name:"paul"
// }

// console.log(user.name); // paul

//******************** */


// const a = Symbol(`123`);
// console.log(a); // Symbol(123)
// console.log(typeof a); // Symbol




const sym = Symbol("jangam")
const sym2 = Symbol("NPMJ")
const a = {
    "name" : "noel",
    "full name" : "paul moses",
    age : 23,
    city : "Phoenix",
    sym : "myKey1", // cant be used  directly, sym value is just a string
    [sym2]  :"myKeyFinal",
    1: "abc"
}

console.log(a.name); // noel
 // two ways to access object values, 
 // 1: a.name , works only if  a string, it cant access a.full name , 
// 2: a["name"] or a.name or a["full name"] works, or a[1] ----> a[name] does not work

// console.log(a.sym); // myKey1
// console.log(typeof sym); // symbol

// console.log(typeof a.sym); // string

// console.log(a.sym2); // undefined
// console.log(a[sym2]); // myKeyFinal
// console.log(typeof a[sym2]); // symbol

// console.log(a);
a.car = "noel"

console.log(a);

//a.freeze() is a function to freeze object values, cannot change
// Functions in js can be treated as variables


a.greeting = function ()
{
    console.log("hello world");
    
}


//console.log(a.greeting); // undefined
console.log(a.greeting());




// ✅ "hello world" is printed because greeting() runs.
// ❌ undefined is printed because console.log() logs the return value of greeting(), which is undefined.

// const a = {
//     name: "noel",
//     age: 23
// };

// Object.freeze(a);

// a.city = "Phoenix"; // ❌ Cannot add new properties
// a.age = 30; // ❌ Cannot modify existing properties
// delete a.name; // ❌ Cannot delete properties

// console.log(a); // { name: 'noel', age: 23 }




// const obj = {
//     name: "Noel",
//     details: {
//         city: "Phoenix"
//     }
// };

// Object.freeze(obj);

// obj.details.city = "New York"; // ✅ Allowed (because `freeze()` is shallow)

// console.log(obj.details.city); // "New York" (changed!)


// to freeze objects of all levels, you should deep freeze by recursively itereating