<template>
  <Header />
  <main>
    <Home />
  </main>
  <Footer />
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Service from "./components/Service.vue";
import Blog from "./components/Blog.vue";
import Contact from "./components/Contact.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  data() {
    return {
      count: 0,
    };
  },
  components: {
    Header,
    Footer,
    Service,
    Home,
    About,
    Blog,
    Contact,
  },
  methods: {
    incr() {
      this.count++;
    },
  },
};
</script>

<style lang="css" scoped>
main{
  min-height: calc(100vh - 70px - 60px);
}
</style>
