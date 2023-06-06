<template>
  <div class="w-[300px] m-h-[450px] shadow-lg m-4">
    <img :src="state.image" alt="nimadur" />
    <div class="card-body p-5">
      <h2 class="card-title font-bold text-xl">{{state.title}}</h2>
      <p>
     {{ state.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        img:String,
        title:String,
        text:String,
        state:Object,
    }
};
</script>
<style lang="scss"></style>
