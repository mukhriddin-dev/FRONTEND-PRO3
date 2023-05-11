"use strict";

// var app = "react";


// function foo() {

//    console.log(app)

//     let test="test"

//      function bar(){

//     console.log(app)

//    }

//    bar()

// }
// foo()


// / Arrry vs Object


// / garbage collection in javascript


// let user={
//     name:"",
//     age:"",
// }

// user.name = "Sardor",
// user.age = 24

// console.log(user)

// user.name = "Samandar",
// user.age = 19

// user=null;

// console.log(user)


// / Map --> WeakMap

// const obj = {}

// const map = WeakMap( [
//     [
//         "name", "Samandar"
//     ],
//     [
//         "age", "19"
//     ],
//     [
//         "color", "red"
//     ]
// ] );

// let iterable=map.entries();
// console.log(iterable);
// iterable.next();
// iterable.next();
// console.log(iterable.next())

// Set ->
// ... spread , .. rest

// let category=['apple', 'samsung', 'apple', 'samsung', 'apple', 'xiomi', 'huawei']

// let data=new Set([1,2,3,4,5,6,7,8,9,10] );


// data.clear();


// console.log(data)

// 1 1
// data.add(1);
// data.add(2);
// data.add(3);
// data.add(1);
// const unique=Array.from( new Set(category) );
// console.log(category)
// console.log(data)
// console.log(unique)




let text = $('h1');
let title = $('.text');
let i = $('#text');


$("button").addEventListener('click', () => {
    document.body.style.background = "#000"
})

$$('li').forEach((li) => {
    li.addEventListener('click', (e) => {
        console.log(e.target)
        e.target.style.background = "#000"
    })
})


// $$('li')[3].addEventListener('click', (e)=>{
//          console.log(e.target)
// })


console.log(text, title, i)
