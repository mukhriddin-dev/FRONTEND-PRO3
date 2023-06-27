<template>
  <div
    v-if="load"
    role="status"
    class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
  >
    <div
      class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
    >
      <svg
        class="w-12 h-12 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path
          d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
        />
      </svg>
    </div>
    <div class="w-full">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div
        class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div
        class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
      ></div>
      <div
        class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
      ></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>

  <section v-else class="bg-white dark:bg-gray-900 relative">
    <button
      @click="$router.push({ name: 'product' })"
      class="bg-red-600 text-white font-bold px-3 absolute right-2 py-2 rounded focus:bg-red-500 m-2 focus:ring-4"
    >
      go back
    </button>

    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 sm:py-16 lg:px-6"
    >
      <div class="flex gap-4 justify-start items-center">
        <!-- <h1>{{item?.images}}</h1> -->
        <div class="m-5 h-[400px] flex flex-col justify-center">
          <img
            v-for="(img, index) in item?.images"
            :key="index"
            :src="img"
            class="max-w-[120px] min-h-[120px] m-1"
            alt="index"
          />
        </div>

        <img
          class="w-full dark:hidden max-h-[400px] max-w-[400px]"
          :src="item?.category?.image"
          alt="dashboard image"
        />
      </div>

      <div class="mt-4 md:mt-0">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          {{ item?.title }}
        </h2>
        <div class="flex gap-4">
          <h3
            class="mb-4 text-2xl tracking-tight font-extrabold text-orange-500 dark:text-white"
          >
            {{ item?.category?.name }}
          </h3>
          <h3
            class="mb-4 text-2xl tracking-tight font-extrabold text-green-600 dark:text-white"
          >
            {{ item?.price }}$
          </h3>
        </div>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {{ item?.description }}
        </p>
        <a
          href="#"
          class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
        >
          Get started
          <svg
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { getProductItem } from "../../service/product/product";

export default {
  name: "productItem",
  data() {
    return {
      item: null,
      load: true,
    };
  },

  mounted() {
   
      getProductItem(this.$route.params.id).then((res) => {
        this.item = res.data;
        this.load = false;
        console.log(this.item);
      });
  
  },
};
</script>

<style lang="scss" scoped></style>
