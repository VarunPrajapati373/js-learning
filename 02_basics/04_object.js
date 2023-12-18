 const tinderUser = new Object()   //singleton objet 
// const tdi = {} //non -singleton object


tinderUser.id ="123abc"
tinderUser.name ="Smmay"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

// const regularUser = {
//     email: "Sammy@gmailcom",
//     fullName: {
//         userFullName: {
//             FirstName: "varun",
//             LastName: "Prajapati"
//         }
//     }
// }

//console.log(regularUser.fullName.userFullName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign(obj1,obj2)
//const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}

//console.log(obj3);

const users = [
    {
        id: 1,
        email: "varun@gmail.com"
    },{
        id: 2,
        email: "varun@gmail.com"
    },{
        id: 3,
        email: "varun@gmail.com"
    },{
        id: 4,
        email: "varun@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('email'));
// console.log(tinderUser.hasOwnProperty('name'));


//++++++++++++++++++++ OBJECT DE-Structure ++++++++++++++++++++++++++++++++++++

const course ={
    courseName : "Js in Hindi",
    price : "999",
    courseInstructor : "Hitesh Chaudhary"
}

//first way to access
console.log(course.courseInstructor);

//good way to access

const {courseInstructor} = course
//if you want to give Alias name then,
const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);