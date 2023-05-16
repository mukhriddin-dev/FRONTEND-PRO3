"use strict";


// let wrapper = $('.wrapper');
// let boxItem = $$('.box');

// // console.log(wrapper, boxItem)

// let arr = [
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9
// ]

// arr.forEach((el) => {

//     const card = createElement('div', "card", `       
//     <img src="https://picsum.photos/id/32${el}/300/250" alt="rasm" />
//       <div class="card-body p-3">
//         <h2>Card title</h2>
//        <p>
//          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis minima
//          atque, inventore impedit facere eos laborum omnis. Exercitationem rem
//          doloremque aperiam maiores dolor architecto.
//        </p>
//      </div>
//  `)

//     wrapper.append(card)

// })


// console.log(card)


// boxItem.forEach(element => {

//     element.addEventListener('click', (e) => {
//         e.target.classList.add('rounded-circle');
//         console.log(e.target)
//     })

// });

// wrapper.addEventListener('click', (e) => {

//     if (e.target.classList.contains('box')) {
//         let id = e.target.getAttribute('data-id');
//         e.target.textContent = id;
//         e.target.classList.toggle('rounded-circle');
//     }

// });

// console.log(box)


// // -------------- CLASS LIST ------------------------------

// textContent  , innerHTML , setAttribute , getAttribute

// .add()

// box.classList.add('box', 'p-5', 'rounded-fill')

// // .remove()

// box.classList.remove('box');


// // .contains

// box.classList.contains('p-7');
// true or false


// console.log(box.classList)

// console.log(box)

// example ---- card toggled ----

// toogle ->


// $('.btn').addEventListener('click', (e)=>{

//     let condt=$(".card").classList.contains('d-block');

//     if(condt){

//         e.target.classList.remove('btn-danger');
//         e.target.classList.add('btn-success')
//         e.target.classList.toggle()
//         e.target.textContent="show"


//         $(".card").classList.remove('d-block')
//         $(".card").classList.add('d-none')

//     }else{

//         e.target.classList.remove('btn-success');
//         e.target.classList.add('btn-danger')
//         e.target.textContent="hide"


//         $(".card").classList.remove('d-none')
//         $(".card").classList.add('d-block')

//     }


// })


// $(".btn").addEventListener('click', (e) => {

//     $('.card').classList.toggle('d-none');
//     e.target.classList.toggle('bg-success');

//     if (e.target.classList.contains('bg-success')) {
//         e.target.textContent = "Show"
//     } else {
//         e.target.textContent = "Hide"
//     }
// })

// localStorage ga ma'lumot qo'shadi .


// localStorage.setItem('keyname', 'value')
// localStorage.setItem('token', 'dqwewrtiydjsbkrdjngknwearifj328ru8324urf93')
// localStorage.setItem('role', 'admin')
// localStorage.setItem('role1', 'adminjon')


// ma'lumotni olish

let token = localStorage.getItem('token');
let role = localStorage.getItem('role');

// bitta donasini o'chirish

localStorage.removeItem('role1')

// hammasini o'chirish

localStorage.clear();


console.log(token)
console.log(role)
