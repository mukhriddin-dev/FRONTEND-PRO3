"use strict";


// a+=b;
// a-=b;
// a=a*b; x
// a*=b;
// a**=b;
// a%=b;
// a+="salom";
// 17/8=16/8+1/8
// console.log(a)

// console.log('55'/1)  // NaN -> Not a Number

// / type conversion


// console.log(typeof ( '55'/1 )) //
// console.log(10=='10');  // ? true
// console.log(10==='10');  // ? false
// -> ! is not -> emas
// console.log(10!=='10') // true
// console.log(!true)
// console.log(11>=10)
// console.log(12<=9)


// let str='javascript';

// let number=Number(str);
// console.log(number)

// let num=12;
// let str=String(num);
// console.log(str)
// console.log(typeof str)


// ------  Truthy and Falthy ------

// Truthy -> 1

// Falthy -> undefined , emty spaces , null , NaN  ,  0


// let a = 1/0; // undefined

// if (a) {
//     console.log('xa')
// } else {
//     console.log("yo'q")
// }

// // console.log(12*'');

// console.log(1/0)

// talk about me

// TEMPLATE LITERAL


// let str="Java";

// let str2="Script";

// let str3=str+str2;

// console.log(`Welcome to  ${str+str2}  ${str2}`)
// console.log("Welcome to   "+str+str2+"   smth")


// console.log(Math)

// let num=12.24236;

// console.log(Math.floor(num)) //  <
// console.log(Math.ceil(num))  //   >
// console.log(Math.round(num)) //   =
// console.log(Math.abs(num))  // modul
// console.log(Math.min(1,2,3,435464,76,7,65))
// console.log(Math.pow( 169 , 1/3 )) // 32 // 13
// console.log(Math.sqrt(25))
// console.log(Math.trunc(num)) // butun
// console.log(Number(num.toFixed(3))) // qisimgacha olish
// console.log(Math.ceil( Math.random()*100 )) // random number


// ------ Conditional operator "if else" ------


let light = 'green';
let startedAt=10;


if (light === 'green') {

    console.log('Go !')

} else if (light === 'yellow') {

    console.log('Attention !!!')

} else {
    console.log('STOP')
}
