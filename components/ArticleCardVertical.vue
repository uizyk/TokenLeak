<template>
    <div class="flex-col flex py-2 w-80">
        <a :href="articleInfo.news_url">
            <img class=" w-full mb-2" :src="articleInfo.image_url">
        </a>
        <div class="text-white flex flex-col w-full gap-2 bg-hero-dark p-4">
            <a :href="articleInfo.news_url">
                <h2 class="text-article-time">{{ formatDate(articleInfo.date) }}</h2>
                <h1 class="font-bold line-clamp-2">{{ articleInfo.title }}</h1>
            </a>
            <div class="flex gap-3 mt-5">
                <img class="w-9 h-9 rounded-full" :src="articleInfo.author.profile_image">
                <div>
                    <p class="text-lg mt-[-4px]">{{ articleInfo.author.name }}</p>
                    <p class="text-sm text-[rgba(255,255,255,0.5)]"> Journalist for TokenLeak</p>
                </div>
            </div>
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