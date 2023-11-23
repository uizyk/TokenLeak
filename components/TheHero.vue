<template>
  <div>
    <!-- TABLET/MOBILE VIEW -->
    <div class="relative md:hidden">

      <!--Carousel items-->
      <transition name="slide-fade" mode="out-in">
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!-- Carousel Item -->
          <div v-for="(slide, index) in newsData" :key="index" :class="{
            block: currentSlide === index,
            hidden: currentSlide !== index,
          }"
            class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            style="backface-visibility: hidden">
            <div
              class="bg-transparent-black absolute flex flex-col justify-center h-full items-center w-full text-center md:block">
              <h3 class="font-bold text-article-time rounded-md p-1">{{ formatDate(slide.date) }}</h3>
              <h1 class="text-md font-bold line-clamp-3 text-white rounded-md p-1">{{ slide.title }}
              </h1>
              <p class="text-sm line-clamp-1 text-white rounded-md p-1 mb-2">{{ slide.text }}</p>
              <a :href="slide.news_url">
                <button class="w-36 rounded-md bg-white p-1">
                  Read more
                </button>
              </a>
              <div class="w-3/4 mx-auto my-4 flex list-none justify-center p-0">
                <button v-for="(slide, index) in newsData" :key="index" :class="{
                  'opacity-100': currentSlide === index,
                  'opacity-40': currentSlide !== index,
                }" type="button"
                  class="mx-[3px] box-content h-[8px] w-[40px] flex-initial cursor-pointer border-0 border-solid border-transparent rounded-sm bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                  @click="setSlide(index)" :aria-label="'Slide ' + (index + 1)"></button>
              </div>
            </div>
            <!-- Image -->
            <img :src="slide.image_url" class="block w-full " alt="..." />
            <!-- <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="block w-full"
            alt="..." /> -->
            <!--Carousel indicators-->
          </div>
        </div>
      </transition>

      <!--Carousel controls - prev item-->
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" @click="previousSlide">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      <!--Carousel controls - next item-->
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" @click="nextSlide">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>

    <!-- DESKTOP VIEW -->
    <div class="relative hidden md:block md:bg-hero-dark">
      <!--Carousel items-->
      <transition name="slide-fade" mode="out-in">
        <div class="relative text-white w-full overflow-hidden after:clear-both after:block after:content-['']">
          <!-- Carousel Item -->
          <div v-for="(slide, index) in newsData" :key="index" :class="{
            block: currentSlide === index,
            hidden: currentSlide !== index,
          }"
            class="relative flex pt-10 px-11 justify-evenly items-center float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            style="backface-visibility: hidden">
            <div class="w-1/4 flex flex-col justify-around h-72">
              <h3 class="text-article-time font-bold">
                {{ formatDate(slide.date) }}
              </h3>
              <h1 class="text-xl font-bold line-clamp-5 md:line-clamp-2 xl:line-clamp-5">{{ slide.title }}</h1>
              <p class="text-sm line-clamp-2">{{ slide.text }}</p>
              <a :href="slide.news_url">
                <button class="w-48 py-2 rounded-sm bg-white text-black mt-3">
                  Read more
                </button>
              </a>
            </div>

            <!-- Image -->
            <img :src="slide.image_url" class="w-2/4 rounded-md" alt="..." />
            <!-- <img src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg" class="w-2/4" alt="..." /> -->
          </div>
        </div>
      </transition>

      <!--Carousel indicators-->
      <div class="w-full mx-auto flex list-none justify-center p-10">
        <button v-for="(slide, index) in newsData" :key="index" :class="{
          'opacity-100': currentSlide === index,
          'opacity-40': currentSlide !== index,
        }" type="button"
          class="mx-[3px] box-content h-[8px] w-[40px] flex-initial cursor-pointer border-0 border-solid border-transparent rounded-sm bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          @click="setSlide(index)" :aria-label="'Slide ' + (index + 1)"></button>
      </div>

      <!--Carousel controls - prev item-->
      <button
        class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" @click="previousSlide">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
      </button>

      <!--Carousel controls - next item-->
      <button
        class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button" @click="nextSlide">
        <span class="inline-block h-8 w-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </span>
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { formatDate } from "@/utils/dateFormatUtils.js";

//Props for the component
const props = defineProps({
  mockData: {
    type: Object,
    required: true,
  },
});

const newsData = ref(props.mockData.data.slice(0, 10));
const currentSlide = ref(0);

// Carousel
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % newsData.value.length;
};

const previousSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + newsData.value.length) % newsData.value.length;
};

const setSlide = (index) => {
  currentSlide.value = index;
};
</script>
