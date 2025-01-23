<script setup>
import Navbar from '@/views/Navbar/Navbar.vue';
import Footer from '@/views/Footer/Footer.vue';
</script>

<template>
  <Navbar class="fixed top-0 left-0 w-full"></Navbar>
  <div class="mt-24">
    <RouterView></RouterView>
  </div>
  <Footer />
</template>

<style scoped></style>
