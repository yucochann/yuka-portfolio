<script setup>
import { RouterLink } from 'vue-router';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

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
    <div class="w-full flex flex-col gap-8">
      <p class="text-3xl tracking-wider font-semibold lg:text-center">
        關於 <span class="highlight">YUKA</span>
      </p>
      <div class="w-full flex flex-col gap-5 md:flex-row-reverse">
        <div class="w-full h-[450px] rounded-md md:w-1/2">
          <img
            src="https://i.imgur.com/cs5DDlE.gif"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="flex gap-5 flex-col leading-8 md:justify-between md:w-1/2">
          <p>
            我是 Yuka，具<span class="underline-wave">視覺傳達設計背景</span
            >，擁有多年的平面設計經驗，擅長視覺規劃。
          </p>
          <p>
            為了<span class="underline-wave"
              >結合設計與技術，轉職為前端工程師</span
            >
            ，熟悉網頁切版與 Vue.js 框架，並於培訓期間與團隊開發揪團網站。
          </p>
          <p>
            曾赴日學習日語，並在日本打工度假一年，培養<span
              class="underline-wave"
              >日文溝通能力</span
            >與<span class="underline-wave">跨文化團隊合作經驗</span>。
          </p>
          <p>
            未來目標是<span class="underline-wave"
              >持續精進前端技術，拓展全端開發能力</span
            >，同時深化日語與設計專業，打造更具價值的網站與數位產品。
          </p>

          <router-link to="/about">
            <button class="w-1/3 h-10 bg-button rounded-md text-white">
              瞭解更多
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
