<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
  <Navbar class="fixed top-0 left-0 w-full z-50"></Navbar>
  <div class="mt-24">
    <RouterView></RouterView>
  </div>
  <Footer />
</template>

<style scoped></style>
