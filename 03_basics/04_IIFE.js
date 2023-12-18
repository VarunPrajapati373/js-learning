//Immediately Invoked Function Expression (IIFE)
//due to global scope pollution and for avoiding it we use IIFE

(function chai(){
    //named IIFE = chai
    console.log(`DB CONNECTED`);
})();

//IFFE don't know where to stop execution, so for stopping that we need ";"

(()=>{
    //non-named IIFE
    console.log("DB-Connected");
})();

//how to pass parameter in above statement

((name)=>{
    console.log(`DB-Connected ${name}`);
})('Varun')
