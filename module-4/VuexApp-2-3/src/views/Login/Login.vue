<template>
  <div class="wrapper">
    
    <form class="w-25 mx-auto" @submit.prevent="signin()">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input
          v-model="email"
          type="text"
          id="form2Example1"
          class="form-control border"
        />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>

      <!-- Password input -->

      <div class="form-outline mb-4">
        <input
          v-model="password"
          type="password"
          class="form-control border"
        />
        <label class="form-label" for="form2Example2">Password</label>
      </div>

     

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-facebook-f"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-google"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-twitter"></i>
        </button>

        <button type="button" class="btn btn-link btn-floating mx-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {Auth} from "../../service/auth"

export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    signin() {
      const user = {
        email: 'john@mail.com',
        password: 'changeme',
      };
      
      if(user.password.length===0 || user.email.length===0){
        alert("Please enter your password and email address")
      }else{
        Auth(user).then((response)=>{
          localStorage.setItem('token', response?.data?.access_token);
          this.$store.commit('SET_TOKEN', response?.data?.access_token)
          if(localStorage.getItem('token')){
            this.$store.commit('SET_AUTH')
            this.$router.push({name:"home-page"})
            localStorage.setItem('isActive', true)
          }
        })
      }

    },
  },
};
</script>

<style lang="css" scoped>
.wrapper {
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
