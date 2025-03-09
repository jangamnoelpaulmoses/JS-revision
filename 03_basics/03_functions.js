// const user = {
// username : "noel",
// age : 25

// }


function handleObj( anyobject)
{
    console.log(`This is the username, ${anyobject.username}  and this is the age,  ${anyobject.age}`)
}

// handleObj(user) //This is the username, noel  and this is the age,  25
// or

handleObj({
    username : "noel",
    age : 25
    
    }) //handleObj(user) //This is the username, noel  and this is the age,  25


    // WITH ARRAYS 
const arr = [1,2,3,3,4]

function getArr(someArr)
{
    return someArr[1]; 
}

const c =getArr(arr);

console.log(c); //2
