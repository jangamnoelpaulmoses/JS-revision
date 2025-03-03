// destructure of objects


const noel = {
    age : 29,
    address : "United States",
    education : "Masters"
}


// to access address everytime, we need to call noel.address , we can also do this way

const {address } = noel

console.log(address); // United States

// or

const {address : a} = noel

console.log(a); // United States

//********************************************************************************************************* */

// API response can be arrays or objects