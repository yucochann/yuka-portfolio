<script setup></script>

<template>
  <section class="w-full flex flex-col gap-10">
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
      <p class="text-4xl tracking-wider font-semibold lg:text-center">
        <span class="highlight">專案</span> と
        <span class="highlight">作品集</span>
      </p>
      <div class="w-full flex flex-col gap-5">
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-3xl"
            >Joitogether</span
          >
        </p>
        <div class="flex flex-col md:flex-row gap-5">
          <div
            class="w-full h-56 bg-blue-300 rounded-md md:w-1/2 lg:w-1/3"
          ></div>
          <div class="flex flex-col gap-5 md:justify-between md:w-2/3">
            <p class="text-md lg:text-xl lg:tracking-wider">
              提供用戶發起和加入團體活動的功能。當使用者有興趣參與某項活動但無法找到夥伴時，可以在平台上開設揪團活動並與其他人組團。
            </p>
            <button class="w-1/3 h-10 bg-button rounded-md text-white">
              瞭解更多
            </button>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col gap-5">
        <p class="text-with-rect">
          <span class="opacity-70 font-semibold tracking-wider text-3xl"
            >設計作品集ー畫說</span
          >
        </p>
        <div class="flex flex-col md:flex-row gap-5">
          <div
            class="w-full h-56 bg-blue-300 rounded-md md:w-1/2 lg:w-1/3"
          ></div>
          <div class="flex flex-col gap-5 md:justify-between md:w-2/3">
            <p class="text-md lg:text-xl lg:tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates atque incidunt cupiditate? Impedit placeat amet
              adipisci itaque a neque nesciunt quibusdam, magnam obcaecati,
              expedita unde dolore. Eveniet dolorum tenetur incidunt.
            </p>
            <button class="w-1/3 h-10 bg-button rounded-md text-white">
              瞭解更多
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
