<script setup>
import { onMounted } from 'vue';
import Aos from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  Aos.init();
});
</script>

<template>
  <section
    data-aos="fade-up"
    data-aos-duration="1000"
    class="w-full flex flex-col gap-10"
  >
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

    <div class="w-full flex flex-col gap-10">
      <p class="text-3xl tracking-wider font-semibold lg:text-center">
        擅長的
        <span class="highlight">工具</span>
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full flex flex-col gap-5 md:bg-white md:bg-opacity-30 md:p-5 md:rounded-md"
        >
          <p class="text-with-rect">
            <span class="opacity-70 font-semibold tracking-wider text-2xl"
              >前端</span
            >
          </p>
          <p class="leading-8">
            能夠純手刻網頁並 <span class="underline-wave">實作佈局</span>、<span
              class="underline-wave"
              >事件處理</span
            >、與 <span class="underline-wave">後端 API 串接</span>。
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>RWD 響應式設計</li>
            <li>Vue3</li>
            <li>Tailwind CSS</li>
            <li>Naive UI</li>
            <li>API 串接</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full flex flex-col gap-5 md:bg-white md:bg-opacity-30 md:p-5 md:rounded-md"
        >
          <p class="text-with-rect">
            <span class="opacity-70 font-semibold tracking-wider text-2xl"
              >後端</span
            >
          </p>
          <p class="">
            <span class="underline-wave">略懂後端操作</span> 等相關知識。
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Node.js</li>
            <li>Express</li>
            <li>Prisma</li>
            <li>MySQL</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full flex flex-col gap-5 md:bg-white md:bg-opacity-30 md:p-5 md:rounded-md"
        >
          <p class="text-with-rect">
            <span class="opacity-70 font-semibold tracking-wider text-2xl"
              >工具與平台技能</span
            >
          </p>
          <p class="">專案中使用的工具</p>
          <ul class="list-disc list-inside space-y-1">
            <li>Git</li>
            <li>GitHub</li>
            <li>Railway</li>
          </ul>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="w-full flex flex-col gap-5 md:bg-white md:bg-opacity-30 md:p-5 md:rounded-md"
        >
          <p class="text-with-rect">
            <span class="opacity-70 font-semibold tracking-wider text-2xl"
              >設計相關技能</span
            >
          </p>
          <ul class="list-disc list-inside space-y-1">
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>CIS 企業識別系統</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
