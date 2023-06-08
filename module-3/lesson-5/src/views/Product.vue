<template>
  <div class="min-h-full">
    <h1 class="text-blue-500">Products page</h1>

    <h1 v-if="loading" class="text-blue-600 font-bold text-center block m-5 text-2xl">
      LOADING . . .
    </h1>

    <div v-else class="flex gap-6 flex-wrap justify-center">
      <Card v-for="(el, index) in products" :key="index" :state="el" />
    </div>
  </div>
</template>
<script>
import Card from "../components/UI/Card.vue";
import getAllProducts from "./service/products/product";

export default {
  components: { Card },
  name: "Product",
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    getPrduct() {
      getAllProducts().then((res) => {
        if (res.status == 200) {
          this.products = res.data;
          this.loading = false;
        }
      });
    },
  },
  mounted() {
    console.log("mounted");
    this.getPrduct();
    console.log(getAllProducts);
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>
<style lang="scss"></style>
