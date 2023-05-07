"use strict";

// const laod=setTimeout(()=>{
//       location.reload();
// },1200)




    // let  text=document.querySelector('.text'),
    //      input=document.querySelector('input'),
    //      btn=document.querySelector('.btn');

    // nodeName ->
    // tagName ->
    // nodeType ->
    // className ->

    // --> getAttribute('nameATTR') -> HAR QANDAY ATTRIBUTE QIYMATINI OLIB BERADI !

    // --> setAttribute('nameATTR',value) -> HAR QANDAY ATTRIBUTEGA QIYMAT TAYINLAYDI !  YOKI QO'SHADI !

    // --> hasAttribute -> attribute bor yoki yo'qligini tekshiradi .

    // --> CSStyleDeclaration -> OBJECT har qanday elementda mavjud bo'sh propertylar obyekti.

    // dataset attribute -->

    // function setInput(){
    //     // input.setAttribute('type', "password");
    //     input.setAttribute('placeholder',"enter password")
    //     console.log(input.value);
    // }

    // // inline - > attributes

    // btn.onclick=setInput;

    // console.log(text.style.backgroundColor="aqua");
    // text.style.color="red";
    // text.style.width="500px";
    // text.style.margin="30px";

    // text.style.cssText="background-color:aqua; color:red; width:500px; margin:30px";

    // // onClick , onChange , onIn

    // input.oninput=function(){
    //       if(input.value.trim().length>6){
    //         input.style.border="4px solid green";
    //       }else{
    //         input.style.border="4px solid red";
    //       }
    // }

    // dataset

    let photos = document.querySelectorAll(".cover");

    // photos[0].dataset.types="photo";
    // photos[1].dataset.types="photo";

    // photos[2].dataset.types="art";
    // photos[3].dataset.types="art";

    // photos[4].dataset.types="tech";
    // photos[5].dataset.types="tech"

    // photos[6].dataset.types="music";
    // photos[7].dataset.types="music";

    // diynamic ->

    // createElement -> dinamik element genartsiya qiladi.
    // append -> ohiridan element qo'shadi
    // prepend -> boshidan element qo'shadi

    let images = [
        {
            url: "https://picsum.photos/id/311/300/300",
            category: "photo",
            id: 1,
            title: "this is a photo"
        },
        {
            url: "https://picsum.photos/id/312/300/300",
            category: "photo",
            id: 2,
            title: "this is a photo"
        },
        {
            url: "https://picsum.photos/id/313/300/300",
            category: "photo",
            id: 3,
            title: "this is a photo"
        },
        {
            url: "https://picsum.photos/id/314/300/300",
            category: "art",
            id: 4,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/315/300/300",
            category: "art",
            id: 5,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/316/300/300",
            category: "art",
            id: 10,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/317/300/300",
            category: "tech",
            id: 6,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/318/300/300",
            category: "tech",
            id: 7,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/319/300/300",
            category: "tech",
            id: 8,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/320/300/300",
            category: "sport",
            id: 9,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/321/300/300",
            category: "life",
            id: 8,
            title: "this is a photo"
        }, {
            url: "https://picsum.photos/id/322/300/300",
            category: "life",
            id: 9,
            title: "this is a photo"
        },
    ];

    let gallery = document.querySelector(".gallery");
    let category = document.querySelector("#photos");

  

    let options = [];

    function addElmant(obj) {

        let img = document.createElement("img");
        let option = document.createElement("option");

        if (!options.includes(obj.category)) {
            options.push(obj.category);
            category.append(option);
        }

        option.value = obj.category;
        option.textContent = obj.category;

        img.setAttribute("src", `${
            obj.url
        }`);
        img.setAttribute("alt", `${
            obj.title
        }`);
        img.dataset.category = obj.category;
        gallery.append(img);
    }


    for (let i = 0; i < images.length; i++) {
        addElmant(images[i]);
    }



// / addEventListener -> add event listener


// select.addEventListener("event_name", function , arg3 )

category.addEventListener("change", function (e) {
    console.log(e.target.value)
})


const filterCards = (str) => {
    console.log(str)
}
