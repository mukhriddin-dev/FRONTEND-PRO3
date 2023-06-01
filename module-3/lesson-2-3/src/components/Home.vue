<script>
import img from "../assets/images/vue.jpg";

export default {
  name: "Home",
  data() {
    return {
      img: img,
      inputPlaceholder: "enter your text",
      inputType: "text",
      cardToggle: true
    };
  },
  methods: {
    changeType() {
      this.inputType = "password";
    },
    onToggle(){
      this.cardToggle=!this.cardToggle;
    }
  },

  mounted() {},
};
</script>

<template>
  <section>
    <div class="container">
      <input
        :type="inputType"
        :placeholder="inputPlaceholder"
        class="d-block form-control w-25"
      />

      <button class="btn btn-warning m-2" @click="changeType">password</button>
      <button class="btn btn-primary m-2" @click="onToggle">toggle card</button>

        <h1>{{cardToggle}}</h1>

      <div  :class=" `${ cardToggle ? 'd-block': 'd-none'} card p-5 shadow mx-auto w-75` ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eius quo iure enim
          ullam ut natus voluptatum, officiis ipsam consequuntur sequi? Recusandae
          deserunt ut, ipsa placeat quod beatae, illo et nostrum harum adipisci cupiditate
          minima vel. Distinctio, omnis labore eum accusamus laudantium amet eligendi
          recusandae.
        </p>
      </div>


    </div>
  </section>
</template>

<style>
#home {
  background-image: url("https://picsum.photos/id/41/1000/800");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 70px - 60px);
  display: grid;
  place-items: center;
  font-size: 32px;
  background-attachment: fixed;
}

input {
  width: 20%;
  height: 45px;
  margin: 15px;
}
</style>
