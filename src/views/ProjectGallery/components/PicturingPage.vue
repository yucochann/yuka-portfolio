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
    <div class="lg:flex lg:justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 80"
        class="w-1/4 md:w-1/5 lg:w-1/6"
      >
        <path
          d="M -50.28571428571429 37.5 Q -36 37.5 -21.71 22.5 Q 6.86 -7.5 35.43 22.5 Q 49.71 37.5 64 37.5 Q 78.29 37.5 92.57 22.5 Q 121.14 -7.5 149.71 22.5 Q 164 37.5 178.29 37.5 Q 192.57 37.5 206.86 22.5 Q 235.43 -7.5 264 22.5 Q 278.29 37.5 292.57 37.5 Q 306.86 37.5 321.14 22.5 Q 349.71 -7.5 378.29 22.5 Q 392.57 37.5 406.86 37.5 Q 421.14 37.5 435.43 22.5 Q 464 -7.5 492.57 22.5 Q 506.86 37.5 521.14 37.5 Q 535.43 37.5 549.71 22.5 Q 578.29 -7.5 606.86 22.5 Q 621.14 37.5 635.43 37.5 Q 649.71 37.5 664 22.5 Q 692.57 -7.5 721.14 22.5 Q 735.43 37.5 749.71 37.5 Q 764 37.5 778.29 22.5 Q 806.86 -7.5 835.43 22.5 Q 849.71 37.5 864 37.5"
          fill="none"
          stroke="#388bde"
          stroke-width="15"
          transform="translate(0, 17.5)"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped></style>
