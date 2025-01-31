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
      class="w-full h-auto flex flex-col gap-10 justify-between md:flex-row md:items-center"
    >
      <div class="w-full">
        <p class="text-3xl tracking-wider font-bold">HELLO ー !</p>
        <p class="text-4xl tracking-wider font-bold mt-2">
          我是
          <span class="highlight">YUKA</span>！
        </p>
        <p class="text-2xl tracking-wider font-bold mt-10">
          正在努力成為一名<span class="highlight">前端工程師</span>
        </p>
      </div>
      <div class="w-full h-auto rounded-md overflow-hidden">
        <img
          src="https://i.imgur.com/yRE3HYw.gif"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
    <ProjectGallery />
    <AboutMe />
    <Technologies />
  </div>
</template>

<style scoped></style>
