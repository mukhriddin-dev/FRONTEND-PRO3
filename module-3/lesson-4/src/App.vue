<template>
  <div>
    <Header />
    <main class="main">
      <section id="main">
        <div class="container mx-auto text-center text-2xl m-4">{{ number }}</div>
        <button class="bg-green-600 p-3 m-3" @click="incr">incr</button>
        <button class="bg-red-600 p-3 m-3" @click="setToggle">card toggle</button>

        <div class="card p-6 shadow m-4 border-green-600 border border-dashed" v-show="toggle">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatem
            eligendi earum ea quisquam a ipsum, in nulla veritatis, nihil similique
            voluptates fuga amet optio dolores aut aspernatur ipsam. Error debitis iusto
            hic magnam, quam dicta ipsa inventore ratione numquam temporibus quidem
            reprehenderit dolores, eaque quae tempora neque modi! Voluptatibus optio
            distinctio cumque atque dolore veniam voluptas ipsum eius quia deserunt rem
            obcaecati, aut consequuntur praesentium blanditiis qui repellat illum omnis
            earum laboriosam? Accusantium quos ipsum amet assumenda facilis qui voluptates
            dolores accusamus doloribus, ex quidem blanditiis in reprehenderit minima nisi
            magnam doloremque, placeat sit laborum aperiam obcaecati? Deserunt ducimus
            beatae vero voluptatum aspernatur totam tempora aut numquam natus, magni
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {
      number: 0,
    };
  },
  components: {
    Header,
    Footer,
  },

  methods: {
    incr() {
      this.number++;
    },
    setToggle() {
      this.toggle = !this.toggle;
    },
  },

  mounted() {
    console.log("Mounted");
  },

  beforeCreate() {
    console.log("BeforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  unmounted() {
    console.log("Unmounted");
  },
};
</script>
<style lang="scss">
.main {
  min-height: 100vh !important;
}
</style>
