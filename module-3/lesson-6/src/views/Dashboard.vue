<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <Header />
    <!-- aside -->
    <Sidebar />
    <!-- main -->
    <main class="p-4 md:ml-64 h-auto pt-20">
      <div class="border-2 max-w-[1050px] border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-auto mb-4">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  components: { Header, Sidebar },
  data() {
    return {}
  },
  mounted() {}
}
</script>
<style lang="scss"></style>
