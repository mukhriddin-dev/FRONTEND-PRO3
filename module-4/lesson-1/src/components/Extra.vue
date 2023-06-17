<template>
  <div class="extra">
    <h1>Extra 1</h1>
    <h1>{{$store.state}}</h1>
    <extra-2 />
   
  </div>
</template>

<script>
import Extra2 from "./Extra2.vue";
export default {
  components: { Extra2 },

};
</script>

<style lang="scss" scoped>
.extra {
  padding: 80px;
  border: 2px dashed black;
}
</style>
