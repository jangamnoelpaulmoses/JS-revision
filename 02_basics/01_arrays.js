// const myArr = [34,5635,64,57,568,45,6, true, "adfsdf"]

// const arr = [1,2,5,45,76,86,8,7,9] // object

// // or

// const arr2  = new Array(1,234,3,4,54,1,6,) // object



// const arr3 = arr2;

// arr3[1] = 12;
// console.log(arr2[1]); //12
// console.log(typeof arr) //obj
// console.log(typeof arr2) //obj


// arr2.indexOf(234) ---- 2


// slice vs splice on arrays

const arr = [1,2,3,5,67,88]

const sliceArr = arr.slice(1,3) 
console.log(sliceArr);// 2,3  ----> index 1 and 3 not included
console.log(arr); //[ 1, 2, 3, 5, 67, 88 ] original array not changed

const spliceArr = arr.splice(1,3)
console.log(spliceArr);// 2,3,5  ----> index 1 not included and 3 is included
console.log(arr); // cuts the original array as well

const arr2= [1,2,34,5,67];

arr2[3]=77;
console.log(arr2[3]); // 77

// const a =5;
//   a++;   // error


// Keyword	Can Modify Value?	Can Reassign?	Scope
// const	✅ (For arrays/objects) ❌ (For primitives)	❌ No	Block scope
// let	✅ Yes	✅ Yes	Block scope