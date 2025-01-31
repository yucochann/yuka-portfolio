<script setup>
import { onMounted, ref, watch } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = ref([
  {
    title: 'Joitogether',
    description: [
      "提供用戶<span class='underline-wave'>發起和加入活動</span>的揪團網站。",
      "前端使用<span class='underline-wave'>Vue.js 實現動態頁面</span>，並利用<span class='underline-wave'>JavaScript 完成互動</span>功能，提升使用者體驗。",
    ],
    image: 'https://i.imgur.com/gPdXzlk.png',
    link: '/project/joitogether',
  },
  {
    title: '設計作品集ー畫說',
    description: `
  <p>最初喜歡畫畫，而將作品集名字取為
    <span class="underline-wave">畫說</span>，希望能
    <span class="underline-wave">透過自己的畫向大家傳達想法</span>。</p>
  <p>而後開始踏入設計，也將自己的畫作與想法融入設計中，
    讓畫說能夠持續更新，朝著自己喜歡的方向繼續更新下去。</p>
`,
    image: 'https://i.imgur.com/ZMZwGI1.png',
    link: '/project/picturing',
  },
]);

onMounted(() => {
  AOS.init();
});

watch(projects, () => {
  AOS.refresh();
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
        <span class="highlight">專案</span> と
        <span class="highlight">作品集</span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        v-for="(project, index) in projects"
        :key="index"
        class="w-full flex flex-col gap-5"
      >
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-2xl">
            {{ project.title }}
          </span>
        </p>
        <div class="flex flex-col md:flex-row gap-5">
          <div
            class="w-full h-auto rounded-md overflow-hidden shadow-md md:w-1/2 md:aspect-w-21 md:aspect-h-9"
          >
            <img :src="project.image" class="w-full h-full object-cover" />
          </div>
          <div class="md:w-1/2 flex flex-col gap-5 md:justify-between">
            <div class="leading-8 tracking-wide flex flex-col">
              <ul
                v-if="Array.isArray(project.description)"
                class="list-disc pl-5"
              >
                <li
                  v-for="(desc, i) in project.description"
                  :key="i"
                  style="list-style: disc !important"
                  class="mb-2"
                  v-html="desc"
                ></li>
              </ul>
              <p v-else v-html="project.description"></p>
            </div>
            <RouterLink :to="project.link" class="w-1/3 h-10">
              <button class="w-full h-full bg-button rounded-md text-white">
                瞭解更多
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <!-- <div class="w-full flex flex-col gap-5">
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-2xl"
            >Joitogether</span
          >
        </p>
        <div class="flex flex-col md:flex-row gap-5">
          <div
            class="w-full h-auto rounded-md overflow-hidden shadow-md md:w-1/2 md:aspect-w-21 md:aspect-h-9"
          >
            <img
              src="https://i.imgur.com/NIordW3.gif"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2 flex flex-col gap-5 md:justify-between">
            <div class="leading-8 tracking-wide flex flex-col">
              <ul class="list-disc pl-5">
                <li style="list-style: disc !important" class="mb-2">
                  提供用戶<span class="underline-wave">發起和加入活動</span
                  >的揪團網站。
                </li>
                <li style="list-style: disc !important" class="mb-2">
                  前端使用<span class="underline-wave"
                    >Vue.js 實現動態頁面</span
                  >
                  ，並利用<span class="underline-wave"
                    >JavaScript 完成互動</span
                  >
                  功能，提升使用者體驗。
                </li>
              </ul>
            </div>
            <RouterLink to="/project/joitogether" class="w-1/3 h-10">
              <button class="w-full h-full bg-button rounded-md text-white">
                瞭解更多
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-5">
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-2xl">
            設計作品集ー畫說
          </span>
        </p>
        <div class="flex flex-col md:flex-row gap-5">
          <div
            class="w-full h-auto rounded-md overflow-hidden shadow-md md:w-1/2 md:aspect-w-21 md:aspect-h-9"
          >
            <img
              src="https://i.imgur.com/HQT9Wgs.gif"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="md:w-1/2 flex flex-col gap-5 md:justify-between">
            <div class="leading-8 tracking-wide flex flex-col">
              <p class="">
                因為一開始喜歡畫畫，而將作品集名字取為<span
                  class="underline-wave"
                  >畫說</span
                >，希望能<span class="underline-wave">透過自己的畫</span
                >向大家傳達想法。<br />
                而後開始踏入設計，也將自己的畫作與想法融入設計中，讓畫說能夠持續更新，朝著自己喜歡的方向繼續更新下去。
              </p>
            </div>
            <RouterLink to="/project/picturing" class="w-1/3 h-10">
              <button class="w-full h-full bg-button rounded-md text-white">
                瞭解更多
              </button>
            </RouterLink>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped></style>
