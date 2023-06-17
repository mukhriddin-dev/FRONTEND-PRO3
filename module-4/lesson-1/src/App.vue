<template>
  <div
    class="wrapper"
    :style="`${
      $store.state.them === 'light'
        ? 'color:black; background:white'
        : 'color:white; background:black'
    }`"
  >
   
    <h1>App {{ $store.state.counter }}</h1>
    <!-- <h1>{{ $store.state }}</h1> -->
    <button @click="$store.commit('decrement')">DECR</button>
    <button @click="$store.commit('increment')">INCR</button>
    <button @click="$store.dispatch('getPost', 'salom function')">get all posts</button>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed porro eaque molestias
      est excepturi. Veritatis tempore eveniet, eligendi ducimus exercitationem inventore
      illo alias rem consectetur quasi libero, nostrum aperiam quas perferendis sequi
      quam?
    </p>
    <extra />
  </div>
</template>

<script>
import Extra from "./components/Extra.vue";
export default {
  components: { Extra },

};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 80px;
  border: 2px dashed black;
}
</style>
