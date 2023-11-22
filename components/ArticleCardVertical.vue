<template>
    <div class="flex-col flex py-2
                md:flex-col md:w-3/4 md:h-[100px] xl:w-[400px] xl:h-[50px]">
        <img class="rounded-sm md:w-44 mb-2 md:w-50px md:h-50px md: xl:min-w-[300px]" :src="articleInfo.image_url">
        <div class="text-white flex flex-col max-w-[350px] gap-2 bg-hero-dark p-4">
            <a :href="articleInfo.news_url">
                <h2 class="text-article-time">{{ formatDate(articleInfo.date) }}</h2>
                <h1 class="font-bold line-clamp-3">{{ articleInfo.title }}</h1>
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