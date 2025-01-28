<script setup>
import { ref } from 'vue';

// 功能按鈕與對應目標區塊
const items = ref([
  { id: 1, name: '註冊 / 登入', target: 'registerLogin' },
  { id: 2, name: '社群討論區', target: 'discussion' },
  { id: 3, name: '建立活動', target: 'createEvent' },
  { id: 4, name: '活動報名', target: 'eventSignup' },
  { id: 5, name: '活動審核系統', target: 'reviewSystem' },
  { id: 6, name: '活動評價系統', target: 'eventRating' },
  { id: 7, name: '購物車金流', target: 'shoppingCart' },
  { id: 8, name: '個人頁面', target: 'profile' },
]);

// 功能區塊內容資料
const sections = ref([
  {
    id: 'registerLogin',
    title: '註冊登入功能',
    description:
      '提供<span class="underline-wave">一般信箱註冊</span>與 <span class="underline-wave">Google 第三方登入</span> 功能。<br/>透過 Firebase 驗證用戶資料，用戶可上傳大頭貼並同步資料至後端 MySQL 資料庫。',
    image: 'https://i.imgur.com/oGJFHR2.png',
  },
  {
    id: 'discussion',
    title: '社群討論區功能',
    description:
      '用戶可以在這裡發表文章，並在喜歡的文章中留言或按讚，在這個小天地找到志同道合的人！<br/>透過<span class="underline-wave">MySQL 資料庫</span> 與 <span class="underline-wave">RESTful API</span>發送以及請求資料，並將結果渲染至畫面中，',
    image: 'https://i.imgur.com/tHnU3x8.png',
  },
  {
    id: 'createEvent',
    title: '建立活動功能',
    description:
      '用戶可以透過建立活動來將活動資料輸入後端資料庫，並且<span class="underline-wave">串接 Google Map 設定活動地點</span>。<br/>使用者也可以設置活動的審核條件與是否需要先付款參加的選項。',
    image: 'https://i.imgur.com/vD655PO.png',
  },
  {
    id: 'eventSignup',
    title: '活動報名功能',
    description:
      '用戶可以<span class="underline-wave">瀏覽活動詳情</span>、<span class="underline-wave">報名活動</span>、<span class="underline-wave">留言</span>以及觀看<span class="underline-wave">團主過去的評價</span>，並決定是否報名參加或留言活動。<br/>將後端的活動資料渲染至畫面中，並根據不同的報名條件判斷，顯示相應的彈窗提示。',
    image: 'https://i.imgur.com/Rlz6k7e.png',
  },
  {
    id: 'reviewSystem',
    title: '審核系統功能',
    description:
      '團主可以<span class="underline-wave">瀏覽報名者的資料</span>，並<span class="underline-wave">決定是否批准其加入活動</span>。<br/>在活動需要先付款的情況下，報名者必須先付款才能進入審核階段。如果團主決定拒絕該用戶的報名，費用會自動退還給用戶。',
    image: 'https://i.imgur.com/t1qR5a1.png',
  },
  {
    id: 'eventRating',
    title: '活動評價系統功能',
    description:
      '活動結束後，參與者可以<span class="underline-wave">對團主與活動進行評價</span>或<span class="underline-wave">留下評論</span>，也可以選擇<span class="underline-wave">是否追蹤團主</span>。用戶可查看過去其他人對團主的評價，並顯示最多四則評論。<br/>透過 RESTful API 發送與請求資料，實現資料的更新與顯示。',
    image: 'https://i.imgur.com/N1e0PS9.png',
  },
  {
    id: 'shoppingCart',
    title: '購物車金流功能',
    description:
      '用戶可在此為需要先付款的活動進行付費，<span class="underline-wave">付款與退款方式均透過儲值金處理</span>。當儲值金不足時，用戶可以前往儲值頁面進行儲值，並透過<span class="underline-wave">串接藍新金流</span>完成儲值操作。',
    image: 'https://i.imgur.com/k36UpGE.png',
  },
  {
    id: 'profile',
    title: '個人頁面功能',
    description:
      '用戶可以查看自己或是點擊的用戶的所有資料，包括<span class="underline-wave">個人專長喜好</span>、<span class="underline-wave">過去開團的評價</span>、<span class="underline-wave">開過的團</span>、<span class="underline-wave">發過的文</span>及<span class="underline-wave">追蹤的用戶</span>。<br/>透過撈取資料並將結果渲染在頁面中。',
    image: 'https://i.imgur.com/3MI4say.png',
  },
]);

// 滾動至指定區塊
const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId);
  if (targetElement) {
    const offset = targetElement.offsetTop;
    const height = targetElement.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrolloTo = offset - (viewportHeight - height) / 2;
    window.scrollTo({
      top: scrolloTo,
      behavior: 'smooth',
    });
  }
};
</script>
<template>
  <div class="w-full px-5 flex flex-col gap-10">
    <div class="flex flex-col gap-5">
      <p class="text-4xl tracking-wider font-semibold">Joitogether</p>
      <div class="w-full h-52 rounded-md overflow-hidden shadow-md">
        <img
          src="https://i.imgur.com/xnnypcz.gif"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="text-xl leading-9 tracking-wide flex flex-col gap-3">
        <p>
          - 提供用戶<span class="underline-wave">發起和加入活動</span
          >的揪團網站。
        </p>
        <p>
          -
          當使用者想找點事情打發時間但朋友都在忙，或者是沒有朋友的情況下，可以利用平台開設揪團活動並與其他人組團出遊或是聚餐。也可在此平台上認識志同道合的朋友！
        </p>
        <p>
          - 前端使用<span class="underline-wave">Vue.js 實現動態頁面</span>
          ，並利用<span class="underline-wave">JavaScript 完成互動</span>
          功能，提升使用者體驗。
        </p>
      </div>
      <button class="p-2 bg-button rounded-md text-white">前往專案</button>
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
    <div class="flex flex-col gap-5">
      <p class="text-4xl tracking-wider font-semibold">專案主要功能</p>
      <p class="text-xl">點擊文字可快速到達該區塊</p>
    </div>
    <div class="flex flex-col gap-10">
      <div class="">
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-3">
          <!-- 每個功能按鈕 -->
          <div
            v-for="item in items"
            :key="item.id"
            @click="scrollToSection(item.target)"
            class="bg-blue-300 text-white text-center font-bold py-4 rounded-lg cursor-pointer hover:bg-blue-400 transition"
          >
            {{ item.name }}
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
      <div class="flex flex-col gap-10">
        <section
          v-for="section in sections"
          :key="section.id"
          :id="section.id"
          class="h-auto flex flex-col gap-3"
        >
          <!-- 標題與描述 -->

          <p class="text-with-rect">
            <span class="opacity-70 font-semibold tracking-wider text-3xl">{{
              section.title
            }}</span>
          </p>
          <!-- 圖片區塊 -->
          <img
            :src="section.image"
            :alt="section.title"
            class="w-full h-52 max-w-md bg-blue-300 rounded-lg shadow-md"
          />

          <p
            class="text-xl tracking-wide leading-10"
            v-html="section.description"
          ></p>
        </section>
      </div>
    </div>
  </div>
</template>
