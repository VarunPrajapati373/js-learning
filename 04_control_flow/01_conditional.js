// IF-ELSE - Long hand Notation

const score = 400

if(score === 400){
    let power = "fly"
    console.log(`User score ${score} and it can ${power}`);
}else{
    console.log("there is no power");
}

//short hand notation of IF-ELSE

const balance =1000

if(balance >500) console.log("test");


//nested if else ladder is also there

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true

if(userLoggedIn && loggedInFromGoogle){
    console.log("yes Checked");
}

if(userLoggedIn || loggedInFromGoogle){
    console.log("yes Checked");
}