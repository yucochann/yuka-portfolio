<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
  });
});
</script>
<template>
  <div
    class="w-full min-h-screen px-5 flex flex-col gap-10 pb-14 md:w-2/3 lg:w-3/5 md:mx-auto lg:px-0"
  >
    <div class="flex flex-col gap-5 lg:mb-8 lg:gap-8">
      <p class="text-3xl tracking-wider font-bold lg:text-center lg:text-4xl">
        畫說
      </p>
      <div class="flex flex-col gap-5">
        <div
          class="w-full h-auto rounded-md overflow-hidden shadow-md md:aspect-w-21 md:aspect-h-9"
        >
          <img
            src="https://i.imgur.com/HQT9Wgs.gif"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex flex-col gap-8">
          <div class="leading-8 tracking-wide flex flex-col">
            <p class="text-md leading-8 lg:tracking-wider">
              因為一開始喜歡畫畫，而將作品集名字取為<span class="underline-wave"
                >畫說</span
              >，希望能<span class="underline-wave">透過自己的畫</span
              >向大家傳達想法。<br />
              而後開始踏入設計，也將自己的畫作與想法融入設計中，讓畫說能夠持續更新，朝著自己喜歡的方向繼續更新下去。
            </p>
          </div>
          <a
            href="https://issuu.com/yucaportfolio/docs/_2024"
            class="lg:w-1/2 lg:mx-auto"
            target="_blank"
          >
            <button class="w-full h-10 bg-button rounded-md text-white">
              前往作品集
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
