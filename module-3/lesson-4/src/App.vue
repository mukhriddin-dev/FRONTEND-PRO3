<template>
  <div>
    <Header />
    <main class="main">
      <section id="main">
        <div class="container mx-auto">
          <Post :num="number" @sendApp="followState" />
          <button class="bg-orange-500 p-2" @click="sendPost">SEND</button>
          <button class="bg-red-500 p-2" @click="deletePost">DELETE</button>
          <button class="bg-cyan-500 p-2" @click="updatedPost">UPDATE</button>

        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Post from "./pages/Post.vue";
import axios from "axios";

export default {
  data() {
    return {
      number: 0,
      posts: [],
      load: true,
      childState: null,
    };
  },
  components: {
    Header,
    Footer,
    Post,
  },

  methods: {
    incr() {
      this.number++;
    },
    setToggle() {
      this.toggle = !this.toggle;
    },

    followState(e) {
      this.childState = e;
    },

    async getPost() {
      try {
        const posts = await axios.get("http://localhost:6060/posts");
        if (posts.status == 200) {
          console.log(posts.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
    sendPost() {

      let postObj={
        id: 2,
        title: "lorem ipsum plus ",
        description: "lorem ipsum dolor sit amet plus",
      }
      
      axios.post("http://localhost:6060/posts", postObj);

    },

    deletePost(){
      axios.delete(`http://localhost:6060/posts/${2}`);
    },

    updatedPost(){
      let postObj={
        id: 2,
        title: "lorem lorem lorem ",
        description: "lorem ipsum dolor sit amet minus",
      }
      axios.put(`http://localhost:6060/posts/${2}`, postObj )
    }

  },

  mounted() {
    this.getPost();
    console.log(this.load);
    console.log(this.posts);
  },

  beforeCreate() {
    console.log("BeforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  unmounted() {
    console.log("Unmounted");
  },
};
</script>
<style lang="scss">
.main {
  min-height: 100vh !important;
}
</style>
