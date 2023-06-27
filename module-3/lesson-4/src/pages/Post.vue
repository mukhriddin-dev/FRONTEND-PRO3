<template >
    <div class="card p-12 shadow m-4 border-green-600 border border-dashed">
        <h1>Post  {{ num }}</h1>

        <PostItem @sendState="postItemFollow"/>

    </div>

</template>
<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
    name:'Post',

    data(){
      return{
       state:null,
      }
    },

    methods: {
        postItemFollow(e){
         this.state = e
         this.$emit('sendApp', e)
        }
    }

}
</script>
<style lang="scss">
    
</style>