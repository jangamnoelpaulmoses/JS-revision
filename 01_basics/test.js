const c = [1,1,1,1,1,1,11,1]
const b = [9,9,9,9,9,9,[8,8,8],9,9]
// a.push(b); // passes array as a single value , pushes to existing array
// console.log(typeof a); // object

const d = [...b,...c]

// console.log(a);

console.log(d.flat(Infinity))