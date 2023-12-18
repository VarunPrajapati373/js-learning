// function sayMyName(){
//     console.log("V");
//     console.log("A");
//     console.log("R");
//     console.log("U");
//     console.log("N");
// }

// sayMyName()

// function addTwoNumbers( number1, number2){  //when you pass anything in function definition as Input we called it as PARAMETER
//     console.log(number1+number2);
// }

// const result = addTwoNumbers(3,4) //when you pass anything while calling any function, we called it as ARGUMENTS
// console.log("result: ",result); //this will give undefine beause you are not returning value.

// function addTwoNumbers( number1, number2){ 
//     let result = number1+number2
//     return result

//     //new way to return
//   //  return number1+number2
// }

// console.log(result);

function loginUserMessage(username){ // Incase if you want to avoid undefined situation, you can pass default value as (username = "Dummy")

    if(username === undefined){
        console.log("Please Enter the username");
        return
    }
    return `${username} just logged in...`
}

console.log(loginUserMessage("Varun")); //if we are not passing any argument it will take undefined


//if you don't know how many parameter are going to pass, then you can use REST operator (...)

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500));

//if you want to pass OBJECT to FUNCTION

const user ={
    username : "Varun",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user);

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));