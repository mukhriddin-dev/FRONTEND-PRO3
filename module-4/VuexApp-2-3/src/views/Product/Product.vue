<template>
  <div>
    <h1 v-if="$store?.state?.useProductStore?.loading"  class="text-align-center">loading . . . </h1>
    <h1 v-else>
      <ul class="list-group">
        <li v-for="el in $store?.state?.useProductStore?.products" :key="el.id" class="list-group-item">
          {{el.title}}
        </li>
      </ul>
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  computed: {
    filterPr() {
      return this.product.filter((item) => item % 2 == 0);
    },
  },

  mounted() {
    this.$store.dispatch("getPost"); 
  },
};
</script>

<style lang="scss" scoped></style>
