"use strict";


// ----- call  -----

// const userList = [
//     {
//         id: 7,
//         email: "michael.lawson@reqres.in",
//         first_name: "Michael",
//         last_name: "Lawson",
//         avatar: "https://reqres.in/img/faces/7-image.jpg",
//     },
//     {
//         id: 8,
//         email: "lindsay.ferguson@reqres.in",
//         first_name: "Lindsay",
//         last_name: "Ferguson",
//         avatar: "https://reqres.in/img/faces/8-image.jpg",
//     },
//     {
//         id: 9,
//         email: "tobias.funke@reqres.in",
//         first_name: "Tobias",
//         last_name: "Funke",
//         avatar: "https://reqres.in/img/faces/9-image.jpg",
//     },
//     {
//         id: 10,
//         email: "byron.fields@reqres.in",
//         first_name: "Byron",
//         last_name: "Fields",
//         avatar: "https://reqres.in/img/faces/10-image.jpg",
//     },
//     {
//         id: 11,
//         email: "george.edwards@reqres.in",
//         first_name: "George",
//         last_name: "Edwards",
//         avatar: "https://reqres.in/img/faces/11-image.jpg",
//     },
//     {
//         id: 12,
//         email: "rachel.howell@reqres.in",
//         first_name: "Rachel",
//         last_name: "Howell",
//         avatar: "https://reqres.in/img/faces/12-image.jpg",
//     },
// ];

// function fullInfo(){
//     console.log(`full name: ${this?.first_name} ${this?.last_name} ,  email:  ${this?.email}`)
// }

// for (let user of userList) {
//     // fullInfo.call(user)
// }


// const person = {
// isname: "Jahongir",
// age: 23,
// job: "Web Developer",
// };

// function fullInfo() {
//     return `${res} full name: ${this?.isname} , age: ${this?.age} ,  job:  ${this?.job}`;
// }

// const data=fullInfo.call(person, 'first result: ' , 'last result: ');

// console.log(data)

// ---------- apply --------

// fullInfo.apply(person, ["first result: ", "last result: "]);

// -------- bind -----------

// const data=fullInfo.bind(person);
// console.log(data('bu yerda: '))


// -------------------- ASYNC / AWAIT -----------------------------


// END POINT -> /posts

// const BASE_URL = "https://jsonplaceholder.typicode.com";


// async function getPost() {


//     const response = await fetch(`${BASE_URL}/posts`);
//     const result = await response.json();

//     console.log(result);
//     console.log(is)


// }

// const params={
//     method: 'GET',
//     headers: {
//         "Content-Type": "application/json"
//     }
// }

// async function getPost() {

//     try {
//         const response = await fetch(`${BASE_URL}/comments`, params);

//         const result = await response.json();
//         console.log(response)
//         console.log("hello world")
//         console.log(result);

//     } catch (err) {

//         console.log(err)

//     }
// }


// getPost()


// / GET  | POST  | DELETE | PUT | PATCH

// NODE PACKAGE MANAGER -> NPM 




