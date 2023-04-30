"use strict";

// ------- Object ---

// literal object creation

// let person={
//     isname: 'Bobur',
//     age: 20,
//     isStudent: true,
// };


// // dot nation

// console.log(person.isname)

// // bracket notation

// console.log(person['age'])

// console.log(person)

// let selectLang=prompt('Select language');

// let language={
//     uz: {
//         Home: "Bosh sahifa",
//         About: "Biz haqimizda"
//     },

//     en: {
//         Home: "Home",
//         About: "About"
//     }
// }

// console.log(language[selectLang])

// console.log(Math)

// .this , bind , call , apply

// let types=prompt('amalni kiriting !')
// let num1=+prompt('n1=')
// let num2=+prompt('n2=')

// let calc = {
//     add: function (a, b) {

//         if (a && b) {
//             return a + b
//         }

//     },
//     minus: function (a, b) {
//         return a - b
//     },
//     devison: function (a, b) {
//         return a / b
//     },
//     multple: function (a, b) {
//         return a * b
//     }
// }


// let result = calc(num1,num2)

// console.log(result)

// console.log(result)
// console.log(calc.add(34, 24))

// console.log(calc.devison(34, 24))

// console.log(calc.add(12))


// new object();

// const car=new Object( {isName:"Lexus"} );
// console.log(car)

// object.create();

// let newObj=Object.create({});

// newObj.age=24;
// console.log(newObj)

// constructor , class , object.assign , JSON.stringify , JSON.parse




// // Object -> method :  keys , values,  entries , fromEntries

// let objKeys = Object.keys(obj1);
// let objValues = Object.values(obj1);
// let objFull= Object.entries(obj1)
// let reverseObj= Object.fromEntries(objFull)


// console.log(objKeys)
// console.log(objValues)
// console.log(objFull)
// console.log(reverseObj)


let obj1 = {
    key1: "value1",
    key2: "value2",
    key3: "value3"
}


// console.log(obj1.key1)


//  ----- Array -----


//  literal creates an array

// let week=[ 'Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday' , ['Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday' , ['Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday']] ];

// console.log(week.flat(3))

// new Arry 

// let week=new Array('Monday' , 'Tuesday' , 'Wednesday', 'Thursday', 'Friday');

// console.log(week[4])

let arr=[];

// arr[0]="javascript";
// arr[1]='php';
// arr[2]='nodejs';
// arr[0]='Vuejs';
// arr[3]="laravel"

// delete arr[2]

let array2=[1,2,3,4,5,6,7,8,9,10,11];

arr.push('java','php','node_modules') // ohiridan  qo'shadi 
arr.push('vuejs')

arr.unshift('Angular')   // boshidan qo'shadi 
arr.unshift('React') 

arr.shift();  // boshidan o'chiradi
arr.shift();

arr.pop() // ohiridan o'chiradi
arr.pop() 


console.log(array2)
console.log(arr)

let array3=array2.concat(arr).concat('delphi', 'c++', 'xml')  /// concat => arrayni bir-biriga ulaydi

console.log(array3)

// slice -> nusxa oladi arraydan .slice(index, indexgacha)

let copyArr=array3.slice(0,5)

console.log(copyArr)

// splice -> arraydan kesib oladi ta'sir ko'rsatadi .slice(index, n ta)

console.log(array3.splice(0,10))
console.log(array3)

// .indexOf elementni indexni aniqlatydi.

console.log(array3.indexOf('xml'))

// includes -> arrayda element bor yoki yo'qligini tekshiradi

console.log(array3.includes('c++'))

// join() array to string , orasiga nimdur yozib beradi.

console.log(array3.join(" "))

console.log(array3.length)



