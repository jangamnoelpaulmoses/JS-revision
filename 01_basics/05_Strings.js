const name1 = "noel"
const repoCount = 20;

// console.log(name + repoCount+" Value"); // noel20 Value outdated


// String interpolation - back ticks ``


console.log(`my name is ${name1} and my repo count is ${repoCount}`);


const name2 = new String (`pauliee`); // this is an object, not a string

console.log(name2) // pauliee

console.log(name2[0]) // p

console.log(name2.__proto__)


let obj = {
    0 : "paul",
    1 : "moses",
}


console.log(obj[0])
console.log(name2.toUpperCase());

console.log(name2);

console.log(name1.length) //4


/*
Strings have manyinbuilt features like, replace, slice(that can read words from backwards, 
with negative index), subString(start, end),
 includes, trim()[removes white spaces]


*/