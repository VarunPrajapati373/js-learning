//singleton object creation when using constructor
//Object.create

const mysmb = Symbol("key1")

//object literals
const JsUser = {
    name: "Varun",
    "full name": "varun prajapati",
    //for using symbol in object we have to use square brackett
    [mysmb]: "Key2",
    age: 18,
    location: "Jaipur",
    email: "varun@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//ways to access objects
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysmb]);

//overwriting values 
JsUser.email="varun123@gmail.com"
//Object.freeze(JsUser) //object got freeze not change will reflect
JsUser.email="varun1321@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());