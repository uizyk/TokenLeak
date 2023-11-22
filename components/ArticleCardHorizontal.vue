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
    <div class="flex-col flex items-start py-2
                md:flex-row md:w-3/4 md:h-[100px] xl:w-[1000px] xl:h-[300px]">
        <img class="rounded-sm md:w-44 mb-2 md:w-50px md:h-50px md:px-5 xl:min-w-[500px]" :src="articleInfo.image_url">
        <div class="text-white flex flex-col max-w-[350px] gap-5">
            <h2 class="text-article-time"><span class="font-bold">{{ articleInfo.source_name }}</span> {{ formatDate(articleInfo.date) }}</h2>
            <h1 class="font-bold line-clamp-2">{{ articleInfo.title }}</h1>
            <p class="line-clamp-3 text-[rgba(255,255,255,0.5)]">{{ articleInfo.text }}</p>
            <a :href="articleInfo.news_url">
                <button class="bg-white text-black p-2 rounded-sm w-28" >Read More</button>
            </a>
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
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