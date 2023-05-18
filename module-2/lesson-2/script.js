"use strict";

// async function getWork() {
//     let step=await 1000;
//     for (let i = 0; i <= step; i++) {
//         console.log(i)
//     }
// }

// getWork()

// // 32 daqiqa

// // 1 daqiqa

// console.log("Coffe")
// console.log("nimadur")

// / -------------- PROMISE ------------

// const promise = new Promise((resolve, reject) => {

//     const condit = [
//         1,
//         2,
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9
//     ];

//     if (! condit.length) {

//         setTimeout(() => {
//             resolve(condit)
//         }, 2000)

//     } else {

//         return reject('data is not defined')

//     }

// })

// promise.then((db) => console.log(db)).catch((err) => console.log(err)). finally(() => console.log('Finish'));

// const promise1 = "Hello, world!";

// const promise2 = new Promise((resolve, reject) => {
//   const condit = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   if (!condit.length) {
//     setTimeout(() => {
//       resolve(condit);
//     }, 2000);
//   } else {
//     return reject("data is not defined");
//   }
// });


// Promise.resolve(fullfiled)

// const promise3=Promise.resolve('promise3 : Vue.js')


// console.log( promise1 , 'Finish promise 1')
// promise2.then((db) => console.log(db)).catch((err) => console.log(err)). finally(() => console.log('Finish promise 2'));
// promise3.then((db) => console.log(db)).catch((err) => console.log(err)). finally(() => console.log('Finish promise 3'));


//// ----- Promise.all([*****])

// const result=Promise.all([promise1, promise2, promise3]); +


/// ------ Promise.allSettled ------

// const result=Promise.allSettled([promise1, promise2, promise3]); +


/// ------ Promise.race ------


// const result=Promise.race([promise1, promise2, promise3]); +


/// ------ Promise.any ----


// const result=Promise.any([promise1, promise2, promise3]); +


// result.then((data)=>console.log(data)).catch((err)=>console.log(err)).finally(()=>console.log("done !"))


// ES5 

// function App(name,price, version ){

//     this.name=name;
//     this.price=price;
//     this.version=version;

// }


// // ES6 class


// class App{
//     constructor(name,price,version){
//         this.name=name;
//         this.price=price;
//         this.version=version;
//     }
// }


// const fb=new App()

// const whatsApp=new App();
// console.log(whatsApp)
// const telegram=new App('telegram', '4.5$' , 11);
// console.log(telegram)





const BASE_URL='https://fakestoreapi.com';


function getAllProducts(){

    fetch(`${BASE_URL}/products`)
     .then((res)=> res.json()
     .then( data=> renderData(data)))

}

getAllProducts()


function renderData(data){

    
    

    if(data.length){
       
        data.forEach((el)=>{
            const card=createElement('div', 'card', ` 
            <img src="${el.image}" alt="product" class="card-img">
            <div class="card-body">
              <h2 class="card-title">
                ${el.title}  
              </h2>
              <h3>${el.category}</h3>
              <p class="card-text">
               ${el.description}
              </p>
              <strong>${el.price} $</strong>
            </div>
          `);

            $('.wrapper').append(card)
        })
    }


}

