<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const menuRef = ref(null);

const beforeEnter = () => {
  isMenuOpen.value = true;
};

const afterLeave = () => {
  isMenuOpen.value = false;
};

const toggleMenu = (event) => {
  isMenuOpen.value = !isMenuOpen.value;
  event.stopPropagation();
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div id="navbar">
    <div
      class="w-full h-28 flex items-center justify-end pr-3 overflow-hidden relative z-10"
    >
      <div
        @click="toggleMenu"
        class="cursor-pointer w-24 h-20 flex flex-col items-center"
      >
        <div class="w-[5em] h-[4em]">
          <img
            src="@/assets/image/logo.png"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>

        <p class="text-sm font-bold">MENU</p>
      </div>
    </div>

    <transition
      name="menu-slide"
      @before-enter="beforeEnter"
      @after-leave="afterLeave"
    >
      <div
        ref="menuRef"
        v-if="isMenuOpen"
        class="menu-bg absolute top-full w-full shadow-md rounded-md p-5 flex flex-col gap-4 md:w-1/3 md:right-4 lg:w-80 z-0"
      >
        <RouterLink @click="closeMenu" to="/">
          <p class="menu-list rounded-md p-2 md:text-xl">首頁</p>
        </RouterLink>

        <ul class="flex flex-col gap-2 md:text-xl">
          <div class="w-full flex items-center">
            <div class="flex-grow border border-blue-300"></div>
            <p class="mx-5">專案 ＆ 作品集</p>
            <div class="flex-grow border border-blue-300"></div>
          </div>
          <RouterLink @click="closeMenu" to="/project/joitogether">
            <li class="w-full menu-list rounded-md p-3">Joitogether</li>
          </RouterLink>
          <RouterLink @click="closeMenu" to="/project/picturing">
            <li class="w-full menu-list rounded-md p-3">設計作品集ー畫說</li>
          </RouterLink>
        </ul>

        <ul class="flex flex-col gap-2 md:text-xl">
          <div class="w-full flex items-center">
            <div class="flex-grow border border-blue-300"></div>
            <p class="mx-5">關於我</p>
            <div class="flex-grow border border-blue-300"></div>
          </div>
          <RouterLink @click="closeMenu" to="/about">
            <li
              class="w-full hover:bg-blue-300 hover:text-white transition-all duration-300 ease-in-out rounded-md p-3"
            >
              關於 YUKA
            </li>
          </RouterLink>
          <!-- <RouterLink @click="closeMenu" to="/">
            <li class="w-full menu-list rounded-md p-3">Ｑ＆Ａ</li>
          </RouterLink>
          <RouterLink @click="closeMenu" to="/">
            <li class="menu-list w-full rounded-md p-3">擅長工具</li>
          </RouterLink> -->
        </ul>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.navbar-bg {
  background-image: url('@/assets/image/background-image.jpg');
  background-size: 30%;
}

.menu-bg {
  background-image: url('@/assets/image/background-image.jpg');
}

.menu-list:hover {
  background-color: #94c5fd;
  color: #fff;
  transition: all 0.3s ease-in-out;
}

@keyframes slide-down {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-20%);
    opacity: 0;
  }
}
.menu-slide-enter-active {
  animation: slide-down 0.3s ease-in-out;
}

.menu-slide-leave-active {
  animation: slide-up 0.3s ease-in-out;
}
</style>
