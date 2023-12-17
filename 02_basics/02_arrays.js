const marvel_heros = ["thor","IronMan","Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros); 
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const all_heroes = marvel_heros.concat(dc_heros)
// console.log(all_heroes);

//spread operator
const all_new_heros = [...marvel_heros,...dc_heros] //how to spread
console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_newArray = anotherArray.flat(Infinity) //give all in single array
console.log(real_newArray);

console.log(Array.isArray("Varun"));
console.log(Array.from("Varun"));
console.log(Array.from({name: "Varun"})); //give empty array

let score1= 100
let score2=200
let score3 = 300

console.log(Array.of(score1,score2,score3));

