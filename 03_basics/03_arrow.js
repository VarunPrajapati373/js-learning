const user={
    username: "Varun",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="Sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){                //this will not work in function context
//     let username = "Varun"
//     console.log(this.username);
// }

//same as above

// const chai = function (){                //this will not work in function context
//     let username = "Varun"
//     console.log(this.username);
// }

// chai()

//++++++++++ Arrow Function ++++++++++++++++++

// const chai = () => {              
//     let username = "Varun"
//     console.log(this.username);
// }

// chai()

//explicit return
const addTwo =(num1, num2) =>{
    return num1+num2
}

//another way of using arrow function

//implicit return
const add2 =(num1, num2) => num1+num2  //or you can wrap num1+num2 into parenthisis.

//NOTE:- if you use {} then return is must, and if you use () then, no need of parenthesis.

console.log(addTwo(2,3));
console.log(add2(3,4));

//for returning object parenthisi is must
const obj =(num1,num2)=>({username: "Varun"})
console.log(obj());
