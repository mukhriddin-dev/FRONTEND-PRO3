<template>
  <header style="background:rgb(105, 141, 240)">
    <div class="container">
      <nav>
        <a href="#" class="logo">LOGO</a>
        <ul>
          <li v-for="el in navlink" :key="el.title">
            <a href="#">{{ el.title }}</a>
          </li>
        </ul>

        <button @click="sendData">send data</button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { defineProps, onBeforeMount, onMounted  , defineEmits} from "vue";

const emits=defineEmits(['send-data'])

const props = defineProps({
  navlink: {
    type: Array,
    required: true,
  },
});


const sendData=()=>{
      emits('send-data', [1,2,3,4,5,6,7,8,9,10]);
}


onMounted(() => {
  console.log(props.navlink);
});

onBeforeMount(() => {
  console.log(props.navlink);
});
</script>

<style lang="scss" scoped></style>
