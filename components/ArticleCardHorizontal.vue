<!-- <template>
    <div class="flex flex-col md:flex-row w-full max-w-[900px] h-[200px] md:h-[150px] lg:h-[200px] xl:h-[250px] justify-around py-2">
        <img class="py-2 px-5 w-full md:w-auto md:max-w-[300px] md:h-[150px] lg:h-auto lg:max-h-[200px]" :src="articleInfo.image_url">
        <a class="pl-10" :href="articleInfo.news_url">
            <div class="text-white flex flex-col justify-around">
                <h2 class="text-article-time mb-3"><span class="font-bold">{{ articleInfo.source_name }}</span> {{ formatDate(articleInfo.date) }}</h2>
                <h1 class="font-bold">{{ articleInfo.title }}</h1>
                <p class="line-clamp-3 text-[rgba(255,255,255,0.5)]">{{ articleInfo.text }}</p>
            </div>
        </a>
    </div>
</template> -->

<template>
    <div class="flex-col mb-10 flex py-2 gap-5 w-3/4 items-start md:w-full md:mb-5 xl:flex-row">
        <img class="rounded-sm md:w-full md:h-60 xl:h-full xl:w-2/4" :src="articleInfo.image_url">
        <div class="text-white flex flex-col gap-3 md:w-80 md:gap-3 xl:w-80 xl:gap-5">
            <h2 class="text-article-time"><span class="font-bold">{{ articleInfo.source_name }}</span> {{ formatDate(articleInfo.date) }}</h2>
            <h1 class="font-bold line-clamp-2 md:line-clamp-1 xl:line-clamp-2">{{ articleInfo.title }}</h1>
            <p class="line-clamp-2 md:line-clamp-2 xl:line-clamp-3 text-[rgba(255,255,255,0.5)]">{{ articleInfo.text }}</p>
            <a :href="articleInfo.news_url">
                <button class="bg-white w-full p-2 text-black md:p-1 xl:p-2 rounded-sm md:w-28">Read More</button>
            </a>
        </div>
    </div>
</template>


<script setup>
import { defineProps, onMounted } from "vue";
import { formatDate } from "@/utils/dateFormatUtils.js";

//Props for the component
const props = defineProps({
    articleInfo: {
        type: Object,
        required: true,
    },
});



onMounted(() => {
    console.log("this is the article info", props.articleInfo);
});
</script>