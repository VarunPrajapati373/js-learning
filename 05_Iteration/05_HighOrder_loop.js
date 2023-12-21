// const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const nums = myNumbers.map((num)=> num+10)
// //++++++++++++++++++ Chaining Method +++++++++++++++++++++++++++++++
// const nums2 = myNumbers.map((num) => num*10).map((num)=> num+1).filter((num)=> num>=40)
// console.log(nums2);

//+++++++++++++++++++++++++++++ REDUCE +++++++++++++++++++++++++++++++++++

const myNum =[1,2,3]

const Total = myNum.reduce((acc, curVal)=>{
    console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc+curVal
},0)

console.log(Total);