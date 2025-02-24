// Typesctript wont allow to compare different data types
console.log(null > 0); // false
console.log(null==0);   // false

console.log(null >=0);// true

// Reason - when we use comparosopn operators such as >, >=, <, <= (not ==),   it will assign null to 0;
// Comparision and equality checks are different

// === is strict check


console.log("2">2);
console.log("3" === 2); // false