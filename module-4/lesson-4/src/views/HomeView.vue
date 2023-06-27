<template>
  <div>
    <Header :navlink="navlinks" @send-data="recData" />
    <h1>Home view</h1>
    <h1>{{arr}}</h1>
    <h3>{{summa}}</h3>
    <h5>{{reverseNumbers}}</h5>
    <Footer />
  </div>
</template>

<script setup>
import { ref , computed } from "vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const arr=ref(null);
const numbers=ref([1,2,3,4,5,6,7,8,9,10])

const navlinks = ref([
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/services",
    title: "Services",
  },
]);

const summa=computed( ()=> numbers.value.reduce((a,b)=> {
  return a+b
}))

const reverseNumbers=computed( ()=> numbers.value.reverse());

const recData = (t) => {
  arr.value=t;
};

</script>

<style lang="scss" scoped></style>
