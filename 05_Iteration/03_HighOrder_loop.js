//for of


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

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);

}