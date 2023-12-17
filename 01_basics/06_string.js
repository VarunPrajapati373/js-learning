const name = "Varun"
const repoCount = 17

//old method
// console.log(name + repoCount + "value");

//new method - must use- called String Polation
//console.log(`hello my name is ${name} and repoCount is ${repoCount}`);


 const gameName = new String('Varun-pra-jap-ati')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t')); 

//last index will not include
const newString = gameName.substring(0,6) // we cannot give negative value as range, but it will not obey your value if you give
console.log(newString);

//in Slice function we can give negative value and it will start from reverse
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "    varun    "
console.log(newString1);
console.log(newString1.trim());


const url = "https://hitste.com/vp%20HC"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));


