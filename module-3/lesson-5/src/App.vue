<template >
  <div>
   <Header/>
   <main class="min-h-screen">
    <div class="container mx-auto">
      <div class="border-blue-400 min-h-screen border-dashed rounded-md border p-5">
        <router-view></router-view>
      </div>
    </div>
   </main>
   <Footer/>
  </div>
</template>
<script>
import Footer from './components/Footer/Footer.vue';
import Header from './components/Header/Header.vue';
import Home from './views/Home.vue';
import Company from "./views/Product.vue";

export default {
  components: { Header, Footer, Home , Company},

}
</script>
<style lang="scss" scoped>
 
</style>