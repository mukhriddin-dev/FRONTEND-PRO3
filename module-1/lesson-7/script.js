"use strict";


// function test(){
//     console.log(this)
// }

// test();

// call , bind , apply

// const app=function(){
//     console.log(this)
// }
// app()


// const app=()=>{
//     console.log(this)
// }

// app();

// setTimeout( ()=>{
//     console.log(this)
// }, 1000 )

// const device= {

//     name: "Iphone 14",
//     price: 1250,
//     color:'deep purple',
//     memory:{cpu:16, cd: 256},
//     camera:[12,16,48,20],

//     about: function(){
//         return `device name: ${this.name} , price: ${this.price} , camera: ${this.camera} color: ${this.color} , OZU: ${this.memory.cpu} CD: ${this.memory.cd}`
//     }

// }


// let iphone=device.about();


// console.log(iphone)

// console.log(this.alert('qsdwaesfrdgtfhgjyuij'))

// JSON -> XML -> JSON


// let json = {
//     alert: "success",
//     number: "2233",
//     age: "34",
//     status:true
// }


// const newJSONPARSE=JSON.parse(JSON.stringify(json))
// console.log(json)
// newJSONPARSE.isActive=false;
// console.log(newJSONPARSE)

//  JSON -> JAVA -> JSON -> C# 
// console.log(document.body)

// let title=document.getElementById('text');
// let title=document.getElementsByClassName('text')
// let title=document.getElementsByTagName('h1')
// let title=document.getElementsByName('text')


// let title=document.querySelector('.text')

// console.log()

// function red(){
//     title.nextElementSibling.nextElementSibling.style.background="red"
// }
