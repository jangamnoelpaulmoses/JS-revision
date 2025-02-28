// const a = [12,34,2,13,5466,5]

// const b = [9,9,9,9,9,9,9,9]

// const c = [1,1,1,1,1,1,11,1]

// a.push(b); // passes array as a single value , pushes to existing array
// console.log(typeof a); // object

// const d = b.concat(c); // can only used for two arrays

// console.log(a);

// console.log(d) // passes individual array values, does not concat to esisting unlike push

// // more than these two, use a spread function/ operator

// const d1 = [...b,...c]; // can be used for more arrays or arguments unlike concat

const ar = [1,24,35645,75,[2,4,4,5,3],[4,5,6,64,[3,4,5,4,[1,2,4,[1,3,44,4],45,5],3,45]]]
const ar1 = [...ar]

console.log(ar1); //[1,24,35645,75,[2,4,4,5,3],[4,5,6,64,[3,4,5,4,[1,2,4,Array,45,5],3,45]]] sometimes it doesnt print deeply nested loops

// use flat method to separate all the elements in a single array

ar2 = ar.flat(Infinity);

console.log(ar2);


// sometimes in webscraping, the data can be in strings or objects or any time , but we need to convert to array for better manipulation



Array.isArray("noel") //false

const a5 = Array.from("noel") // a5 prints ['n', 'o',.....]
 const a6 = Array.from({name : "noel"}) // o/p [], as it is confused to convert keys or values from the object

 let s1= 22
 let s2 = 34
 let s3 = 44

 console.log(Array.of(s1,s2,s3)); // [22,34,44]
 s5 =[...s1,...s2] //
console.log(s5); //error  only for arrays
