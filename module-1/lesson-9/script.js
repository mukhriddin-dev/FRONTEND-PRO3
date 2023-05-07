"use strict";   
/// EVENTS -> 

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
//   console.log(e.target)
// })

// card.addEventListener('mouseup', (e)=>{
//     e.target.style.backgroundColor = 'green';
//    console.log(e.target)
//  })

// window.addEventListener('mousemove', (e)=>{

//     const x=e.clientX;
//     const y=e.clientY;

//     mouse.style.transform=`translate(${x}px, ${y}px)`
    
//  })


let input =document.querySelector('#input');
let outer=document.querySelector('#outer');

input.addEventListener('focus', (e)=>{
    console.log(e.target.value)
    outer.innerHTML=e.target.value;
    console.log("on focus")
    e.target.style.border="2px solid green"
})  

input.addEventListener('input', (e)=>{
    console.log(e.target.value)
    outer.innerHTML=e.target.value;
    console.log("on blur")
    e.target.style.border="2px solid red"
})