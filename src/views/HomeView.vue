<script setup>
import Technologies from '@/views/Technologies/Technologies.vue';
import AboutMe from '@/views/AboutMe/AboutMe.vue';
import ProjectGallery from '@/views/ProjectGallery/ProjectGallery.vue';
</script>

<template>
  <div
    class="w-full flex flex-col gap-20 px-5 pb-10 md:px-10 lg:w-3/5 lg:mx-auto lg:px-0 max-w-[1000px]"
  >
    <section
      class="w-full h-[480px] flex flex-col justify-between lg:flex-row lg:items-center lg:h-auto"
    >
      <div class="w-full">
        <p class="text-4xl tracking-wider font-bold">HELLO ー !</p>
        <p class="text-5xl tracking-wider font-bold mt-2">
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
