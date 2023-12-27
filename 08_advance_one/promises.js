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

// ++++++++++++++++++++++++++++ Another intresting promise ++++++++++++++++++++++++++++++++++++

const promiseFive = new Promise(function(resolve, reject){

    setTimeout(function(){
                let error= false
                if(!error){
                    resolve({username: "Javascript", password: "123"})
                }else{
                    reject('ERROR: Something went wrong')
                }
            },1000)

})

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}

consumePromiseFive()

//++++++++++++++++++++++++++++ Another Promise +++++++++++++++++

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

//Another method to do the same using thenable method


// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))


