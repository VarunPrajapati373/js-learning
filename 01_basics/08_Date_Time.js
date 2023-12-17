// DATES

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let CreatedDate = new Date(2023,0,23)

// console.log(CreatedDate.toString());

// let CreatedDate1= new Date(2023,0,23,5,3)
// console.log(CreatedDate1.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

//customise Data formate
newDate.toLocaleString('default',{
    weekday: "long"
})