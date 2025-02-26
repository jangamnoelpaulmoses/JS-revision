//  const score = 400 // Js automatically detects as number, but can be explicitly defined as number

//  const balance = new Number (1000) // explicitly defined

//  console.log(balance);
 

// balance.toString();

// console.log(typeof balance)

// const n1 = 233.854 //233.9

// console.log( n1.toPrecision(4)) //range of precision is 1-21 ----> string type


// const n2 =1000000
// console.log(n2.toLocaleString()) // 1,000,000
// console.log(typeof n2.toLocaleString(`en-IN`))// 10,00,000 , string type







// ++++++++++++++++++ Maths +++++++++++++++++++++++++++++++

console.log(Math) //Object [Math] {}


console.log(Math.abs(-4)) // 4 , if its +4 it will be 4 only
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.1)) //5 , floor is bottom value
console.log(Math.min(1,23,6456,5,7,3)) //1
console.log(Math.random()) // always between >=0 && <= 1 most used by default

console.log((Math.random()*10) +1)  // 1-9 random 

let min = 10 ;
let max = 20 ; 

console.log((Math.random()*max - min + 1 )-min)