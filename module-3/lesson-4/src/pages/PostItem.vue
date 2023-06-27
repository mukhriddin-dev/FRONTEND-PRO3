<template >
    <div class="card p-12 shadow m-4 border-green-600 border border-dashed">
        <h1>Post item {{ num }}</h1>

        <button class="bg-orange-500 p-2" @click="sendStatus">SEND STATUS</button>
    </div>

</template>
<script>
export default {
    name:'PostItem',

    data(){
      return{
        status:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
      }
    },

    props:{
        num:Number,
    },

    methods: {
       sendStatus(){
        return this.$emit('sendState', this.status )
       } 
    },
}
</script>
<style lang="scss">
    
</style>