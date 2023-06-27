<template>
  <Navbar />
  <main>
      <router-view />
  </main>
  <Footer />
</template>

<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar, Footer },
  name: "home-page",
};
</script>

<style lang="scss" scoped></style>
