<script>
import { userlist } from "../constants/userList.js";

export default {
  name: "About",
  data() {
    return {
      users: [],
      load: true,
    };
  },
  methods: {
    async getAllUsers() {
      try {
        const userlist = await fetch("https://reqres.in/api/users?page=1");
        const user = await userlist.json();
        this.users = user?.data;
        this.load = false;
      } catch (err) {
        console.log(err);
      }
    },
  },

  mounted() {
    console.log(this.users);
    this.getAllUsers();
  },
  
};
</script>

<template>
  <section>
    <div class="container">
      <h1>About</h1>

      <ul class="list-group">
        <li class="list-group-item text-center text-danger" v-if="load">LIST EMPTY</li>

        <li
          v-else
          v-for="(el, index) in users"
          :key="index"
          class="list-group-item d-flex"
        >
        
          <img :src="el.avatar" :alt="el.first_name" />
          <div class="ms-4">
            <h4>{{ el.first_name }} {{ el.last_name }}</h4>
            <p>{{ el.email }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style>
#about {
  background-image: url("https://picsum.photos/id/521/1000/800");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 70px - 60px);
  display: grid;
  place-items: center;
  font-size: 32px;
  background-attachment: fixed;
}
</style>
