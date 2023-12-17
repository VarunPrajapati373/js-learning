// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //decimal ke baat kitna chaiye

// const otherNumber = 23.4343
// console.log(otherNumber.toPrecision(3)); //kitni value pe focus hai

// const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN'))

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

//++++++++++++++++++++ MATHS ++++++++++++++++++++++++++

// console.log(Math.abs(-4));
// console.log(Math.round(3.6));
// console.log(Math.ceil(3.6));
// console.log(Math.floor(3.6));
// console.log(Math.max(3,6,2,7));
// console.log(Math.min(3,3,6,2,7));

console.log(Math.random()); //always gives value between 0-1
console.log(Math.random()*10);

//if you want random number to be generated between 10-20

const min =10
const max = 20

console.log(Math.floor(Math.random()*(max - min +1))+ min);
