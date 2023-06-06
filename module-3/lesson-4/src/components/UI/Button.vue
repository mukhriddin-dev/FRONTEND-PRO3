<template>
    <button :class="'bg-green-500 m-2 px-3 py-2 rounded-lg text-white focus:ring-2 ring-green-300 '+btnStyle">
      {{ innerText ? innerText : 'Button' }}
    </button>

</template>
<script>

export default {
  props:{
    btnStyle:String,
    innerText:String,
  },


  mounted() {
    console.log(this.props);
  },
}
</script>
<style lang="scss">
    
</style>