<template>
  <div>
    <h1 class="text-xl m-3 text-indigo-600 text-bold">{{ $route.name }}</h1>



    <h1 class="text-2xl text-center" v-if="loading">LOADING . . . </h1>

    

    <div v-else class="grid grid-cols-3 h-auto gap-4 p-5">

        <Card v-for="el in products" :key="el.id" :db="el"/>



    </div>
  </div>
</template>
<script>
import Card from '../../components/UI/Card.vue'
import Test from '../../components/UI/Test.vue'
import { getAllProducts } from '../../service/product/product'

export default {
  components: { Card, Test },
  name: 'product',
  data() {
    return {
      products: [],
      loading: true
    }
  },

  methods: {
    getAllProdct() {
      getAllProducts().then((res) => {
        this.products = res.data
        this.loading = false
      })
    }
  },
  mounted() {
    console.log(getAllProducts())
    console.log(this.products)
    this.getAllProdct()
  }
}
</script>
<style lang="scss"></style>
