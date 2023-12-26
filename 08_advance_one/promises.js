// const promiseOne = new Promise(function(resolve, reject){
//     //Do an Async Task
//     //DB calls, network

//     setTimeout(function(){
//         console.log("Async Tasks are compelete");
//         resolve() //connect resolve and then method
//     },1000)
// })  //create promise


// //consumption of promise
// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })

//++++++++++++++++++++ ANOTHER WAY TO WRITE PROMISE ++++++++++++++++++++++++++++++++

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task - 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async Task -2 Completed");
// })

//++++++++++++++++++ Another promise (Data Consumption) ++++++++++++++++++++++++++++++++++

// const promiseThree = new Promise(function(resolve, reject){
//     //Do an Async Task
//     //DB calls, network

//     setTimeout(function(){
//         resolve({username: "Chai", email:"chai@example.com"}) //connect resolve and then method
//     },1000)
// })  //create promise

// //consumption of promise
// promiseThree.then(function(user){
//     console.log(user);
// })

//++++++++++++++++++ Another promise () ++++++++++++++++++++++++++++++++++

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error= true
//         if(!error){
//             resolve({username: "Varun", password: "123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch(function(e){
//     console.log(e);
// }).finally(()=> console.log("The promise is either resolved or rejected"))