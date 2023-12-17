//ARRAY

const myAr = [0,1,2,3,4,5]
// const Alpha = ["A","B","C"]
// const MAr2 = new Array(1,2,3,4)

// console.log(myAr[1]);

// //Array Methods
// myAr.push(6)
// console.log(myAr);
// myAr.pop()
// console.log(myAr);

// myAr.unshift(9) //it will add value at starting in Array
// console.log(myAr);
// myAr.shift() //it will remove element from the front
// console.log(myAr); 

// console.log(myAr.includes(9));
// console.log(myAr.indexOf(3));

// const newArray = myAr.join() //it will bind and convert array into string

//SLICE and SPLICE

console.log("A", myAr);
const myn1 = myAr.slice(1,3)

console.log(myn1);
console.log("B", myAr);

const myn2 = myAr.splice(1,3) //this will manupulate original array
console.log("C", myAr);
console.log(myn2);
