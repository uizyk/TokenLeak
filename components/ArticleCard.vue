<!-- <template>
    <div class="flex w-[900px] h-[200px] justify-around py-2">
        <img class="py-2 px-5" :src="articleInfo.image_url">
        <a class="pl-10" :href="articleInfo.news_url">
            <div class="text-white flex flex-col justify-around">
                <h2 class="text-article-time mb-3"><span class="font-bold">{{ articleInfo.source_name }}</span> {{
                    formatDate(articleInfo.date) }}</h2>
                <h1 class="font-bold">{{ articleInfo.title }}</h1>
                <p class="line-clamp-3 text-[rgba(255,255,255,0.5)]">{{ articleInfo.text }}</p>
            </div>
        </a>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { formatDate } from "@/utils/dateFormatUtils.js";

//Props for the component
const props = defineProps({
    articleInfo: {
        type: Array,
        required: true,
    },
});


onMounted(() => {
    console.log("this is the article info", props.articleInfo);
});
</script> -->

<template>
    <div class="flex-col md:flex-row flex md:w-[700px] md:h-[100px] justify-start py-2 mb-6">
        <img class="md:px-5" :src="articleInfo.image_url">
        <a class="px-2 md:pl-4" :href="articleInfo.news_url">
            <div class="text-white flex flex-col justify-around">
                <h2 class="text-article-time mb-3"><span class="font-bold">{{ articleInfo.source_name }}</span> {{
                    formatDate(articleInfo.date) }}</h2>
                <h1 class="font-bold">{{ articleInfo.title }}</h1>
                <!-- <p class="line-clamp-3 text-[rgba(255,255,255,0.5)]">{{ articleInfo.text }}</p> -->
            </div>
        </a>
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