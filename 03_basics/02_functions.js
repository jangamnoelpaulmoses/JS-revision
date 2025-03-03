// rest operator or spreaad operator


function cart(num)
{
    return num; 
}

console.log(cart(2)); //2

function cart1(...num)
{
    return num
}
console.log(cart1(1,2,3,4,5)); // 1,2,3,4,5


function cart3(val1 , val2, ...num)
{
    return num
}

console.log(cart3(1,2,3,4,5)); //3,4,5




