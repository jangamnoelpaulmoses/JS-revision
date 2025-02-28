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




