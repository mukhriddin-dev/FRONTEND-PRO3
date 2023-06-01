const app = Vue.createApp({
    data() {
        return {
            isName: "Vue js development",
            number: 0,
            todo: [
                {id: 1, title: "Vue2 vs Vue3"},
                {id: 2, title: "Vue3 vs Vuex"},
            ],
            taskTitle: "",
        };
    },

    methods: {
        incr() {
            this.number += 1;
        },
        decr() {
            this.number -= 1;
        },

        addNewTask() {

            let task = {
                id: Date.now(),
                title: this.taskTitle,
            };

            if(task.title.trim().length>0){
                  this.todo.push(task);
                  this.taskTitle = ""
             }else{
                alert('Please fill the task title')
             }
        },
    },

});

let div = document.querySelector("#app");
app.mount(div);

// let number=0;

// const inc=()=> {
//     number++;
// }

// v-on: v-for , data() , methods ,  {{}} , @click
