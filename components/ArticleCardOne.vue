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