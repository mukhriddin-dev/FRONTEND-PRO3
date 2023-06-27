<template>
 <router-view/>

</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar, Footer },
};
</script>

<style lang="css">
main{
  min-height: 90vh;
}
</style>
