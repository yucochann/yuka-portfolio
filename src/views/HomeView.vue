<script setup>
import Technologies from '@/views/Technologies/Technologies.vue';
import AboutMe from '@/views/AboutMe/AboutMe.vue';
import ProjectGallery from '@/views/ProjectGallery/ProjectGallery.vue';
import Footer from '@/views/Footer/Footer.vue';
</script>

<template>
  <div class="w-full flex flex-col gap-14 px-5 pb-10">
    <section class="w-full h-[480px] flex flex-col justify-between">
      <div class="w-full">
        <p class="text-4xl tracking-wider font-semibold">HELLO ー !</p>
        <p class="text-5xl tracking-wider font-semibold mt-2">
          我是
          <span class="highlight">YUKA</span>！
        </p>
      </div>
      <div class="w-full h-80 bg-blue-300 rounded-md"></div>
    </section>
    <ProjectGallery />
    <AboutMe />
    <Technologies />
  </div>
</template>

<style scoped></style>
