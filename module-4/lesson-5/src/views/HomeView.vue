<script setup>
import { useCounterStore } from '../stores/counter';
import { useProductStore } from '../stores/product';
import { onMounted } from 'vue';

const store=useCounterStore();
const product=useProductStore();

console.log(store)


onMounted(()=>{
  product.setPost()
})

</script>

<template>
  <main>
    <!-- <h1>Home page</h1> -->
<!-- 
    <h1>{{store.count}}</h1>
    <h2>{{store.doubleCount}}</h2>

    <button @click="store.decrement()">DECR</button>
    <button @click="store.increment()">INCR</button> -->

    <h1 class="text-center" v-if="product.loading">LOADING . . .</h1>
    <h1 class="text-center" v-if="product.errorMessage"> {{ product.errorMessage }} </h1>

    <ul v-if="!product.loading" class="list-group w-50 mx-auto">
      <li class="list-group-item" v-for="(el,index) in product.products" :key="index">
     <p>{{el.title}}</p>
      </li>
    </ul>






  
  </main>
</template>
