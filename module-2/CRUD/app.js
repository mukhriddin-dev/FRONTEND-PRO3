"use strict";

const BASE_URL = "http://localhost:8080";

// C = create (POST) , R= read (GET) , D= delete (DELETE) , U= upadate (PUT, PATCH) 

// ------- GET ----


const tbody = document.querySelector("#tbody"),
      taskTitle = document.querySelector("#task"),
      add = document.querySelector("#add");
      let updateVal=document.querySelector("#updateVal");
      let save=document.querySelector("#save");
      let logout = document.querySelector("#logout");

async function getTask() {
  try {
    const response = await fetch(`${BASE_URL}/task`);
    const result = await response.json();
    taskRender(result);

  } catch (e) {
    console.log(e);
  }
}

getTask();

// --------------- UI RENDER FUNCTIONS ----------------------------

function taskRender(task = []) {

  if (task.length) {
    task.forEach((item, index) => {
      let tr = document.createElement("tr");
      tr.innerHTML = ` 
            <td>${index + 1}</td>
            <td>${item.title}</td>
            <td>
                <button data-del=${
                  item.id
                } class="btn btn-danger del">delete</button>
            </td>
            <td>
                <button data-edit=${
                  item.id
                } class="btn btn-primary edit" data-bs-toggle="modal" data-bs-target="#exampleModal">update</button>
            </td>
        `;

      tbody.append(tr);

    });
  } else {
    alert("Task list is empty");
  }
}



// ------- POST --------------------------------

function addTask() {

  const val = taskTitle.value;

  const newTask = {
    id: Date.now(),
    title: val,
    status: false
  };

 if(newTask.title.trim().length===0){
    alert('please fill the title')
 }else{
  fetch(`${BASE_URL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  });
 }

}



add.addEventListener("click", () => {
  addTask();
});



// ------ DELETE --------------------------------

const deleteTask =(id)=>{
    fetch(`${BASE_URL}/task/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      });
}


tbody.addEventListener('click', (e)=>{

    if(e.target.classList.contains('del')){

        const id=e.target.getAttribute('data-del');
        deleteTask(id)
    }

    if(e.target.classList.contains('edit')){
      const id=e.target.getAttribute('data-edit');
      localStorage.setItem('updateID', id )

      fetch(`${BASE_URL}/task/${id}`).then((res)=>res.json())
      .then((res)=> setVal(res.title))

    }
})

function setVal(update){
  updateVal.value=update
}

///// ---------------- UPDATE -----------------------------

const updateTask =()=>{

let id=localStorage.getItem('updateID');
console.log(id)
  const newTask = {
  
    title: updateVal.value,

  };

  console.log(newTask);

  if(newTask.title.trim().length===0){
    alert('place fill  task title')
  }else{
    fetch(`${BASE_URL}/task/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    });
  }

} 


save.addEventListener('click', ()=>{
  updateTask()
})

if(!localStorage.getItem('token')){
    location.replace('/login.html')
}



// updateTask(1685118545214, newTask)

function guard(){
  if(!localStorage.getItem('token')){
      location.replace('/login.html')
  }else{
      location.replace('/index.html')
  }
}

logout.addEventListener('click', ()=>{
  localStorage.clear();
  guard();
})