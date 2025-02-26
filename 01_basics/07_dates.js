let myDate =  new Date();

console.log(myDate);


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

const d2 =  new Date(2023 , 1,22)
console.log(d2)


// view date documentation for more, or even about time stamp!!!


let myTimeStamp = Date.now()


console.log(myTimeStamp) ; // 21354684646 milli second time from 1970


d2.toLocaleString('default', {
    weekday:"long"
}) // research more on this topic 
