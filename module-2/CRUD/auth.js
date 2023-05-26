"use strict";


let loginForm = document.querySelector('.login-form'),
    username=document.querySelector('#username'),
    password=document.querySelector('#password');

    let BASE_URL="https://api.escuelajs.co/api/v1"


const useAth=()=>{
    const user={
        email:username.value,
        password:password.value
    }


    fetch(`${BASE_URL}/auth/login`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            "Authorization": "Bearer"+localStorage.getItem("token")
        },
        body:JSON.stringify(user)
    }).then((res)=>res.json()).then((result)=>{
        if(result.access_token){
            localStorage.setItem('token', result.access_token)
        }else{
            localStorage.removeItem('token')
        }
        guard()
    })

}

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    useAth()
})

function guard(){
    if(!localStorage.getItem('token')){
        location.replace('/login.html')
    }else{
        location.replace('/index.html')
    }
}

