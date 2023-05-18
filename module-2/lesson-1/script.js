"use strict";

// const { document } = require("postcss");

// const array = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10
// ]; // orginal array

// const copy = array; // shallow copy / clone array

// copy.push(11);

// const obj = {
//     isTrue: true
// };
// const obj2 = obj;

// obj2.isTrue = false;
// obj2.color = "silver";

// console.log(obj)
// console.log(obj2)

// console.log("1: ", array);
// console.log("2: ", copy)

// ---------- DEEP COPY ------------ //

// for , for - of  elements , for-in index , forEach , map  . . .
// ...spread oerator

// const array = [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}];

// const copyArray=[];

// for(let element of array) {
//     copyArray.push(element); // deep copy 1
// }

// copyArray.push(11)


// array.forEach( el => {
//     copyArray.push(el); // deep copy 2
// })


// const copyArray=array.map( el => el) // deep copy 3
// copyArray.push(11)


// const copyArray=[...array, ...array] // by spread operator deep copy
// copyArray.push(11)
// console.log("orginal : ", array)
// console.log("copy : ", copyArray)


// / ------ DEEP COPY OBJECT -----


// const car = {
//     isname: "KIA",
//     color: "black",
//     ispower: 508,
//     maxSpeed: 340,
// }


// for (let i in car) {
//     if (typeof car[i] === 'object') {
//         for (let j in car[i]) {
//             console.log(`${j} ${
//                 car[i][j]
//             }`)
//         }
//     } else {
//         console.log(`${i} = ${
//             car[i]
//         }`)
//     }

// }

// const car = {
//     isname: "KIA",
//     color: "black",
//     ispower: 508,
//     maxSpeed: 340,
// }

// const moto={
//     name: "HONDA",
//     Speed:540,
//     colors: "lime"
// }


// const newCar=Object.assign( {} , car) /// deep clone
// newCar.maxSpeed=350;


// const newCar=JSON.parse(JSON.stringify(car)) /// deep clone
// newCar.maxSpeed=350;


// const newCar={...car, ...moto} /// by spread operator deep copy
// newCar.maxSpeed=350;

// console.log(car)
// console.log(newCar)


// / OBJECT ASSIGN

// JSON

// ...SPREAD


// const arr=['php', 'js', 'ruby', 'rust', 'golang', 'nuxt'];


// const [one,two,three,four, ...any]=['php', 'js', 'ruby', 'rust', 'golang', 'nuxt'];

// console.log(two)
// console.log(any)

// rest opertaor


// function generator(a,b, ...c){
//       console.log(a, b)

//       c.forEach((item)=>{
//         console.log(item+"ok")
//       })

// }

// generator('red', 'green', 'yellow', 'orange', 'lime')

// const car = {
//     isname: "KIA",
//     color: "black",
//     ispower: 508,
//     maxSpeed: 340,
//     full:{
//         country:"Uzbekistan",
//         price:"38000",
//         date:{
//             startedAt:"2022-05-05",
//             finishedAt:"2023-05-05"
//         }
//     }
// }


// const {isname, ispower, maxSpeed , full:{ date : { finishedAt }} }=car;

// // optional chaining

// console.log(isname  , maxSpeed , ispower)
// console.log(finishedAt)


// console.log(car.full.date.finishedAt)

// const response=setTimeout(()=>{ console.log("is Working ")}, 2000 )  // run

// let i=0;

// const steper=setInterval(()=> {
//     i++;
//     console.log(`step ${i}`)
// } , 1000)

// let btn=document.querySelector('button');

// btn.addEventListener('click',  ()=>{
//     clearInterval(steper)
// } )


// micro task
//


// const res = setTimeout( (s) => {
//     console.log(s)
// }, 1000, "ok")
// console.log(res)

// function done(text) {
//     console.log(text)
// }


// function firstClass(sms) {
//     console.log(sms)
// }


// // CALLBACK HELL

// function callback(d, f) {
//     console.log("calling : firstClass , done")
//     setTimeout(() => {
//         f('1 very good')
//         setTimeout(() => {
//             d('2 good')
//             setTimeout(() => {
//                 console.log(item)
//                 setTimeout(() => {
//                     console.log("step 4")
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }

// callback(done, firstClass)
