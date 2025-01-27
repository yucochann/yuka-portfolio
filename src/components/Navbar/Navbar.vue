<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
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
    <div class="w-full h-20 flex items-center justify-end pr-3">
      <div
        @click="toggleMenu"
        class="cursor-pointer w-16 h-20 bg-blue-300 flex flex-col justify-end"
      >
        <p class="text-sm text-white">メニュー</p>
      </div>
    </div>
    <div
      ref="menuRef"
      v-if="isMenuOpen"
      class="w-full rounded-md py-10 px-5 flex flex-col gap-4 bg-blue-100"
    >
      <RouterLink @click="closeMenu" to="/">
        <p class="text-2xl menu-list rounded-md p-3">首頁</p>
      </RouterLink>

      <ul class="text-2xl flex flex-col gap-2">
        <div class="w-full flex items-center">
          <div class="flex-grow border border-blue-300"></div>
          <p class="mx-5">專案と作品集</p>
          <div class="flex-grow border border-blue-300"></div>
        </div>
        <RouterLink @click="closeMenu" to="/project/joitogether">
          <li class="w-full menu-list rounded-md p-3">Joitogether</li>
        </RouterLink>
        <RouterLink @click="closeMenu" to="/project/picturing">
          <li class="w-full menu-list rounded-md p-3">作品集</li>
        </RouterLink>
      </ul>

      <ul class="text-2xl flex flex-col gap-2">
        <div class="w-full flex items-center">
          <div class="flex-grow border border-blue-300"></div>
          <p class="mx-5">關於我</p>
          <div class="flex-grow border border-blue-300"></div>
        </div>
        <RouterLink @click="closeMenu" to="/about">
          <li
            class="w-full hover:bg-blue-300 hover:text-white transition-all duration-300 ease-in-out rounded-md p-3"
          >
            yukaについて
          </li>
        </RouterLink>
        <RouterLink @click="closeMenu" to="/">
          <li class="w-full menu-list rounded-md p-3">Ｑ＆Ａ</li>
        </RouterLink>
        <RouterLink @click="closeMenu" to="/">
          <li class="menu-list w-full rounded-md p-3">擅長工具</li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu-list:hover {
  background-color: #94c5fd;
  color: #fff;
  transition: all 0.3s ease-in-out;
}
</style>
