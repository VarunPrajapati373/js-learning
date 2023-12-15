//# primitive based on call by value, changes in copy of value
//7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123');
// const AnotherId = Symbol('123');

// console.log(id=== AnotherId);


//# non- primitive or Reference type
//Arrays, Objects, Functions

//const heros = ["shaktiman", "naagraj", "doga"]; //array

//object
// let myObj= {
//     name: "varun",
//     age: 22
// }

// const myFucntion = function (){

//     console.log("hello world");
// }


// console.log(typeof BigBumver); //undefined
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//Stack(primitive datatype),  Heap(Non- primitive datatype)

//stack ke ander copy milega usme change krne pe original value ni change hoga
//heap ke andr original value milega usme change hoga value change krne pe

//stack example (primitive dataType)
let firstName = "varun"
let secondName = firstName
secondName="tarun"
console.log(firstName);
console.log(secondName);


//heap example (non -primitive dataType)
let userOne= {

    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email="varun@gmail.com"
console.log(userOne)
console.log(userTwo);