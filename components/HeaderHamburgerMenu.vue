<template>
  <div>
    <button ref="hamburgerMenuButton" class="relative group" @click="toggleMenu">
      <div
        class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-4 ring-opacity-30 duration-200 shadow-md">
        <div
          class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
          <div :class="['bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
            { 'group-focus:translate-x-10': menuOpen }]"></div>
          <div :class="['bg-white h-[2px] w-7 rounded transform transition-all duration-300',
            { 'group-focus:translate-x-10 delay-75': menuOpen }]"></div>
          <div :class="['bg-white h-[2px] w-7 transform transition-all duration-300 origin-left',
            { 'group-focus:translate-x-10 delay-150': menuOpen }]"></div>

          <div :class="['absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10',
            { 'group-focus:translate-x-0 flex w-0 group-focus:w-12': menuOpen }]">
            <div :class="['absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300',
              { 'group-focus:rotate-45': menuOpen }]"></div>
            <div :class="['absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300',
              { 'group-focus:-rotate-45': menuOpen }]"></div>
          </div>
        </div>
      </div>
    </button>
    <div ref="
    dropdownMenu" class="fixed top-20 left-0 w-full 
    h-0 bg-hero-dark 
    duration-200 ease-linear flex flex-col items-center justify-center overflow-hidden"
      :class="{ 'dropdown-open': menuOpen }">
      <ul>
        <li class="text-lg text-white">
          <a href="#">HOME</a>
        </li>
        <li class="text-lg text-white">
          <a href="#">ABOUT</a>
        </li>
        <li class="text-lg text-white">
          <a href="#">BLOG</a>
        </li>
        <li class="text-lg text-white">
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuOpen = ref(false);
const hamburgerMenuButton = ref(null);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const clickOutsideHandler = (event) => {
  if (!hamburgerMenuButton.value.contains(event.target)) {
    menuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', clickOutsideHandler)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideHandler)
})
</script>

<style scoped>
.dropdown-open {
  height: 100%;
  transition: height 0.2s ease;
}
</style>
