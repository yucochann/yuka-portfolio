<script setup>
import { ref } from 'vue';

const images = [
  'https://hips.hearstapps.com/hmg-prod/images/091308-66ebdf638a057.jpeg',
  'https://ibw.bwnet.com.tw/ac_gallery/2024/12/b22854e6-e8cc-c3e2-b5cd-2d378c8fcee7_620.jpeg',
  'https://upload.wikimedia.org/wikipedia/zh/3/3a/Chiikawa.jpeg',
];

const currentIndex = ref(0);

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};
</script>

<template>
  <div class="w-full h-full">
    <div class="bg-blue-100 relative flex justify-center pt-10 h-[500px]">
      <div class="absolute top-[210px] w-4/5">
        <img
          src="@/assets/yukabanner.png"
          alt=""
          class="w-full h-full object-cover drop-shadow-2xl"
        />
      </div>
    </div>
    <section
      class="relative flex flex-col gap-5 items-center justify-center bg-blue-200 py-3"
    >
      <p class="font-bold tracking-wider text-2xl text-slate-600">
        專案介紹ーJoitogether
      </p>
      <div class="relative w-3/4 h-60 overflow-hidden rounded-md">
        <div
          class="w-full h-full object-cover flex gap-10 transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 113}%)` }"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <button
        @click="prevImage"
        class="absolute top-1/2 left-2 text-opacity-50 p-2 rounded-full"
      >
        &#60;
      </button>
      <button
        @click="nextImage"
        class="absolute top-1/2 right-2 text-opacity-50 p-2 rounded-full"
      >
        &#62;
      </button>
      <div class="absolute -top-10 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 100"
          width="100%"
        >
          <path
            d="M 0 30 Q 21.33 30 42.67 15 Q 85.33 -15 128 15 Q 149.33 30 170.67 30 Q 192 30 213.33 15 Q 256 -15 298.67 15 Q 320 30 341.33 30 Q 362.67 30 384 15 Q 426.67 -15 469.33 15 Q 490.67 30 512 30 Q 533.33 30 554.67 15 Q 597.33 -15 640 15 Q 661.33 30 682.67 30 Q 704 30 725.33 15 Q 768 -15 810.67 15 Q 832 30 853.33 30 Q 874.67 30 896 15 Q 938.67 -15 981.33 15 Q 1002.67 30 1024 30 Q 1045.33 30 1066.67 15 Q 1109.33 -15 1152 15 Q 1173.33 30 1194.67 30 L 1024 100 L 0 100 Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div class="absolute -top-8 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 100"
          width="100%"
        >
          <path
            d="M 0 30 Q 21.33 30 42.67 15 Q 85.33 -15 128 15 Q 149.33 30 170.67 30 Q 192 30 213.33 15 Q 256 -15 298.67 15 Q 320 30 341.33 30 Q 362.67 30 384 15 Q 426.67 -15 469.33 15 Q 490.67 30 512 30 Q 533.33 30 554.67 15 Q 597.33 -15 640 15 Q 661.33 30 682.67 30 Q 704 30 725.33 15 Q 768 -15 810.67 15 Q 832 30 853.33 30 Q 874.67 30 896 15 Q 938.67 -15 981.33 15 Q 1002.67 30 1024 30 Q 1045.33 30 1066.67 15 Q 1109.33 -15 1152 15 Q 1173.33 30 1194.67 30 L 1024 100 L 0 100 Z"
            fill="rgb(191 219 254)"
          ></path>
        </svg>
      </div>
      <div class="absolute -bottom-10 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 100"
          width="100%"
        >
          <path
            d="M 0 70 Q 21.33 70 42.67 85 Q 85.33 115 128 85 Q 149.33 70 170.67 70 Q 192 70 213.33 85 Q 256 115 298.67 85 Q 320 70 341.33 70 Q 362.67 70 384 85 Q 426.67 115 469.33 85 Q 490.67 70 512 70 Q 533.33 70 554.67 85 Q 597.33 115 640 85 Q 661.33 70 682.67 70 Q 704 70 725.33 85 Q 768 115 810.67 85 Q 832 70 853.33 70 Q 874.67 70 896 85 Q 938.67 115 981.33 85 Q 1002.67 70 1024 70 L 1024 0 L 0 0 Z"
            fill="#fff"
          ></path>
        </svg>
      </div>
      <div class="absolute -bottom-8 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 100"
          width="100%"
        >
          <path
            d="M 0 70 Q 21.33 70 42.67 85 Q 85.33 115 128 85 Q 149.33 70 170.67 70 Q 192 70 213.33 85 Q 256 115 298.67 85 Q 320 70 341.33 70 Q 362.67 70 384 85 Q 426.67 115 469.33 85 Q 490.67 70 512 70 Q 533.33 70 554.67 85 Q 597.33 115 640 85 Q 661.33 70 682.67 70 Q 704 70 725.33 85 Q 768 115 810.67 85 Q 832 70 853.33 70 Q 874.67 70 896 85 Q 938.67 115 981.33 85 Q 1002.67 70 1024 70 L 1024 0 L 0 0 Z"
            fill="rgb(191 219 254)"
          ></path>
        </svg>
      </div>
    </section>
    <section class="w-full flex flex-col gap-5 bg-blue-100 px-5 pt-16 pb-5">
      <p class="font-bold tracking-wider text-2xl text-slate-600 text-center">
        關於我
      </p>
      <div class="bg-gray-50 h-40 rounded-md"></div>
      <div class="bg-blue-200 h-40 rounded-md"></div>
    </section>
    <section class="w-full bg-blue-100 grid grid-cols-1 gap-5 px-5 py-8">
      <p class="font-bold tracking-wider text-2xl text-slate-600 text-center">
        擅長工具
      </p>
      <div class="bg-white rounded-md h-40"></div>
      <div class="bg-white rounded-md h-40"></div>
      <div class="bg-white rounded-md h-40"></div>
    </section>
    <footer class="w-full h-20 bg-blue-200 flex items-center justify-center">
      <p>Footer</p>
    </footer>
  </div>
</template>

<style scoped>
:root {
  --carousel-opacity-inactive: 0.7;
  --carousel-opacity-active: 1;
}

.gradation {
  background-image: linear-gradient(137deg, #c4edff, #d6c4ff);
}

.dots {
  background-color: #fff;
  background-image: radial-gradient(circle, #94c4d32e 5px, transparent 5px),
    radial-gradient(circle, #94c4d32e 5px, transparent 5px);
  background-position:
    0 0,
    12.5px 30px;
  background-size: 25px 60px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity 500ms ease-in-out,
    transform 500ms ease-in-out;
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity 500ms ease-in-out,
    transform 500ms ease-in-out;
}

.carousel__slide {
  transition: all 500ms ease-in-out;
  opacity: 0.5;
  transform: translateX(10px) rotateY(-12deg) scale(0.9);
}

.carousel__slide--prev {
  transition: all 500ms ease-in-out;
  opacity: 0.5;
  transform: rotateY(-10deg) scale(0.9);
}

.carousel__slide--active {
  transition: all 500ms ease-in-out;
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1.1);
}

.carousel__slide--next {
  transition: all 500ms ease-in-out;
  opacity: 0.5;
  transform: rotateY(10deg) scale(0.9);
}

.carousel__slide--next ~ .carousel__slide {
  transition: all 500ms ease-in-out;
  opacity: 0.5;
  transform: translateX(-10px) rotateY(12deg) scale(0.9);
}
</style>
