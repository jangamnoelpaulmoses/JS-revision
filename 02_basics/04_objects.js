// object singleton constructor

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.name =  "Sammy"
tinderUser.id = "123abc"
tinderUser["isLoggedIn"] = false ;

console.log(tinderUser); 


const regularUser = {
    email : "noel@gmail.com",
    fullname : {
        firstName : "noel",
        lastName : "paul"
    }
}

console.log(regularUser.fullname);
 // to merge objects 1 and 2


 const mergeObj = {tinderUser, regularUser}

 // console.log(mergeObj);
//  {
//     tinderUser: { name: 'Sammy', id: '123abc', isLoggedIn: false },
//     regularUser: {
//       email: 'noel@gmail.com',
//       fullname: { firstName: 'noel', lastName: 'paul' }
//     }
//   }



const mergeObj2 = Object.assign(tinderUser, regularUser) // or const mergeObj2 = Object.assign({}, tinderUser, regularUser) ==? {} is the target object

console.log(mergeObj2);
// {
//     name: 'Sammy',
//     id: '123abc',
//     isLoggedIn: false,
//     email: 'noel@gmail.com',
//     fullname: { firstName: 'noel', lastName: 'paul' }
//   }



const mergeObj3 = {...regularUser, ...tinderUser} // most used

console.log(mergeObj3);
// {
//     email: 'noel@gmail.com',
//     fullname: { firstName: 'noel', lastName: 'paul' },
//     name: 'Sammy',
//     id: '123abc',
//     isLoggedIn: false
//   }




// we often get array of objects

console.log(Object.keys(mergeObj3))
//[ 'email', 'fullname', 'name', 'id', 'isLoggedIn' ]

console.log(Object.values(mergeObj3))
// [
//     'noel@gmail.com',
//     { firstName: 'noel', lastName: 'paul' },
//     'Sammy',
//     '123abc',
//     false
//   ]


console.log(Object.entries(mergeObj3));
// [
//     [ 'email', 'noel@gmail.com' ],
//     [ 'fullname', { firstName: 'noel', lastName: 'paul' } ],
//     [ 'name', 'Sammy' ],
//     [ 'id', '123abc' ],
//     [ 'isLoggedIn', false ]
//   ]



console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
