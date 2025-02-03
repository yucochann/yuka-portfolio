<script setup>
import { ref, onMounted, watch } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const sections = ref([
  {
    id: 1,
    title: '結合設計與程式開發的能力',
    description:
      '在培訓班期間完成揪團網站專案，<span class="underline-wave">負責討社群功能的資料撈取、渲染及全網站 UI 優化</span>，結合設計背景與技術能力提升使用者體驗。',
  },
  {
    id: 2,
    title: '熟悉前端技術與框架',
    description:
      '掌握 HTML、CSS、JavaScript，熟練 Vue.js 框架，具 API 串接與動態資料處理能力，靈活解決專案需求。',
  },
  {
    id: 3,
    title: '視覺設計與用戶體驗規劃',
    description:
      '具文宣設計、社群圖片美編及空間規劃經驗，熟悉用戶需求分析，提升專案整體視覺與使用者體驗。',
  },
  {
    id: 4,
    title: '日商經驗與溝通協調能力',
    description:
      '曾於日商<span class="underline-wave">負責全店鋪商品 POP 設計</span>，與合作百貨、廠商及店鋪溝通協調，提升專案執行效率。',
  },
  {
    id: 5,
    title: '跨文化適應力',
    description:
      '於 2019 年赴北海道語言學校學習日文，並於 2023 年前往東京打工度假，增進日語能力及跨文化溝通經驗，具備商業日語初級口說能力，<span class="underline-wave">能適應多元文化環境並建立良好協作關係</span>。',
  },
]);

onMounted(() => {
  window.scrollTo({
    top: 0,
  });
  AOS.init();
});

watch(sections, () => {
  AOS.refresh();
});
</script>

<template>
  <div
    class="px-5 pb-14 flex flex-col gap-10 md:px-10 md:gap-16 lg:w-3/5 lg:mx-auto lg:px-0"
  >
    <div class="w-full flex flex-col gap-10">
      <p class="text-4xl tracking-wider font-semibold text-center">
        關於 <span class="highlight">YUKA</span>
      </p>
      <div class="flex flex-col gap-5 md:flex-row">
        <div class="w-full h-auto overflow-hidden rounded-md md:w-1/2">
          <img
            src="https://i.imgur.com/cs5DDlE.gif"
            alt=""
            class="w-full h-full object-cover md:object-contain"
          />
        </div>
        <div class="md:w-1/2 flex flex-col gap-5">
          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            v-for="section in sections"
            :key="section.id"
            :id="section.id"
            class="flex flex-col gap-2"
          >
            <p class="text-with-rect">
              <span class="opacity-70 font-semibold tracking-wider text-2xl">
                {{ section.title }}
              </span>
            </p>
            <p class="tracking-wide leading-7" v-html="section.description"></p>
          </section>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-col gap-5 md:flex-row-reverse md:items-center">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="w-full h-auto overflow-hidden rounded-md md:w-1/3"
      >
        <img
          src="https://i.imgur.com/wqVxGAR.gif"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="flex flex-col gap-3 md:w-2/3"
      >
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-2xl">
            未來期許
          </span>
        </p>
        <ul class="list-disc pl-5">
          <li style="list-style: disc !important" class="mb-3">
            提升並累積前端開發經驗，結合設計與技術創造更優質的產品。
          </li>
          <li style="list-style: disc !important" class="mb-3">
            學習系統性的專案管理知識，增強與團隊協作的能力。
          </li>
          <li style="list-style: disc !important" class="mb-3">
            持續精進 JavaScript 和 Vue.js
            技術，未來學習後端技術，成為全端開發者。
          </li>
          <li style="list-style: disc !important" class="mb-3">
            加強日語能力（考取日檢 N1）及英語能力（多益 750
            分），以便於國際化團隊中工作。
          </li>
          <li style="list-style: disc !important" class="mb-3">
            持續經營自己的IG圖文社群。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
