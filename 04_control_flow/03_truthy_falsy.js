//how to check array is empty or not

const arr =[]

if(arr.length===0){
    console.log("Array is empty");
}

//how to check object is empty or not

const emptyObj = {}   // object will return array as for keys or Values

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");    
}


//Nullish Coalescing Operator (??): null and undefined
//working is if you null and no value then assign null else value
let val1;
val1 = 5 ?? 10 //here it will take first
val2 = null ?? 10
val3 = undefined ?? 23
console.log(val1);
console.log(val2);
console.log(val3);

//Terniary Operation
//condition ? true : false

console.log((2>3)? true :false);