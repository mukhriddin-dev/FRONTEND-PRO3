"use strict";
// / EVENTS ->

// MOSUE EVENTS
/*

 click ->
 dblclick ->

 mouseup ->
 mousedown ->
 mousemove ->
 mouseout ->
 mosueleave ->
 mouseover ->

*/


// let card=document.querySelector('.card');
// let mouse=document.querySelector('.mouse');


// card.onclick=function(){
//       console.log(this)
// }

// card.addEventListener('mousedown', (e)=>{
//    e.target.style.backgroundColor = 'blue';
// console.log(e.target)
// })

// card.addEventListener('mouseup', (e)=>{
//     e.target.style.backgroundColor = 'green';
//    console.log(e.target)
// })

// window.addEventListener('mousemove', (e)=>{

//     const x=e.clientX;
//     const y=e.clientY;

//     mouse.style.transform=`translate(${x}px, ${y}px)`

// })


// let input =document.querySelector('#input');
// let outer=document.querySelector('#outer');

// input.addEventListener('focus', (e)=>{
//     console.log(e.target.value)
//     outer.innerHTML=e.target.value;
//     console.log("on focus")
//     e.target.style.border="2px solid green"
// })

// input.addEventListener('blur', (e)=>{
//     console.log(e.target.value)
//     outer.innerHTML=e.target.value;
//     console.log("on blur")
//     e.target.style.border="2px solid red"
// })


// console.log(phones)


let wrapper = document.querySelector('.wrapper');
let optionCategory = document.querySelector('#category');

function dynamicElements(data) {


    data.forEach((el) => {

        const div = document.createElement('div');
        div.setAttribute('class', 'card');

        div.innerHTML = `<div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="${
            el.picture
        }" class="img-fluid"/>
                <a href="#!">
                 <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
                 </div>
                 <div class="card-body">
                  <h5 class="card-title">${
            el.name
        }</h5>
                    <ul class="list-unstyled">
                    <li>RAM: ${
            el.RAM
        }</li>
                    <li>ROM: ${
            el.ROM
        }</li>
                    <li>Chipset: ${
            el.chipset
        }</li>
                    <li>releasedDate: ${
            el.releasedDate
        }</li>
                    </ul>
                  <a href="#!" class="btn btn-primary">Button</a>
                </div>`;

        wrapper.append(div);

    })


}


dynamicElements(phones)


const dynamicOptions = () => {

    const category = [];

    phones.forEach((el) => {
        if (! category.includes(el.category)) {

            category.push(el.category)

            const option = document.createElement('option');

            option.textContent = el.category;

            optionCategory.append(option);


        }
    })

};

dynamicOptions()


optionCategory.addEventListener('change', (e) => {

    wrapper.innerHTML = "";

    const filterProduct = phones.filter((el) => el.category.toLowerCase() === e.target.value.toLowerCase())

    if (e.target.value === 'all') {
        dynamicElements(phones)
    } else {
        dynamicElements(filterProduct)
    }


});


// decloration, expression , arrow

// IIFE -> immediately invoked function expression
// function composition ->
// pipe function  ->
// higher order function
// first class function


// Higher ordered functions -> functions return values function

// const app=(text)=>{

//     return  function(){
//         return  text.split(" ")
//     }
// }

// console.log( app('Hello world')() )


// First class -> function

// function higher(a){

//     console.log(a)

// }


// higher('Hello')


// / forEach , map , reduce , filter


// let arr = [
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
// ];


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// //-------- forEach

// const dt = arr.forEach((elements, index, arr) => {
//            if(elements%2==0){
//             console.log(elements)
//            }
// })

// console.log(dt)


// -------- map

// const dt = arr.map((elements, index, arr) => {

//        if(elements%2==0){
//           return elements
//        }
// })

// console.log(dt)

// / ---- filter

// const dt = arr.filter((e) => {
//     return e%2==0
// })

// console.log(dt)

// --- reduce


// const val=arr.reduce( (acc, element) => { return acc+element }  )


// console.log(val)
