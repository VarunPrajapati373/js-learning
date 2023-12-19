// FOR LOOP

const array = [1,2,3,4,5]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


//break and continue

for (let index = 1; index < 20; index++) {

    if(index==5){
        console.log(`Detected: ${index}`);
      //  break //loop will break
      continue //loop will run but igone the target value
    }

   console.log(`Value of i is ${index}`);   
    
}