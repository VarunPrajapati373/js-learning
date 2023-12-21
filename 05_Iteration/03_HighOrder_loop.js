//+++++++++++++++++++++++++++++++++ FOR OF +++++++++++++++++++++++++++++++++++++++

const arr = [1,2,3,4,5]
// for (const iterator of object) {

// }

// for (const num of arr) {
//     console.log(num);
// }

//MAPs
const map = new Map()
map.set("1", "one")
map.set("2", "two")
map.set("3", "three")
map.set("4", "four")

//console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}

//object
// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key, value] of myObj) { //Objects are not iterable, there is different method to loop objects

//     console.log(key, ':-', value);
// }

//++++++++++++++++++++++++++++++++++ FOR - IN loop +++++++++++++++++++++++++++++++++++++++

//For Object Iterable
// const myObject ={
//     Js : "JavaScript",
//     rb : "Ruby",
//     cpp : "C++",
//     swift : "Swift by Apple"
// }
// //for iterating object
// for (const key in myObject) {

//     console.log(`${key} shortcut is for ${myObject[key]}`);
    
// }

// const programming = ["js","rb","py","java", "cpp"]

// for (const key in programming) {
//    console.log(key);
//    console.log(programming[key]);
// }

//++++++++++++++++++++++ forEach loop +++++++++++++++++++++++++++++

const programming = ["js","rb","py","java", "cpp"]

// first Variation of FOR-EACH loop
// programming.forEach(function (val){
//     console.log(val);
// })

//Another Variation Of FOR-EACH Loop
// programming.forEach((item)=>{
//     console.log(item);
// })

//Another Way by Passing FUNCTION
// function printMe(item){
//     console.log(item);
// }
// programming.forEach(printMe)

// programming.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
// })

// const myCoding =[
// {
//     languageName : "javaScript",
//     languageFileName: "js"
// },
// {
//     languageName : "python",
//     languageFileName: "py"
// },
// {
//     languageName : "java",
//     languageFileName: "java"
// }]

myCoding.forEach((item)=>{
    console.log(item.languageName);
    console.log(item.languageFileName);
})