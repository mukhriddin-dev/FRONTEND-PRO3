"use strict";

const BASE_URL = "http://localhost:8080";

// C = create (POST) , R= read (GET) , U= upadate (PUT, PATCH) , D= delete (DELETE);

// ------- GET ----

const tbody = document.querySelector("#tbody"),
  taskTitle = document.querySelector("#task"),
  add = document.querySelector("#add");

async function getTask() {
  try {
    const response = await fetch(`${BASE_URL}/task`);
    const result = await response.json();

    console.log(result);
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
                } class="btn btn-primary edit">update</button>
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

  fetch(`${BASE_URL}/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
  });
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
})