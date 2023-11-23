<template>
    <div class="flex-col flex items-start py-2 mb-6 w-96 md:flex-row md:w-full md:h-28">
        <a class="px-2 md:pl-2" :href="articleInfo.news_url">
            <img class="rounded-sm mb-2 md:h-24 md:px-2 xl:w-52" :src="articleInfo.image_url">
        </a>
        <a class="px-2 md:pl-2" :href="articleInfo.news_url">
            <div class="text-white flex flex-col md:w-28 gap-1">
                <h2 class="text-article-time mb-1 font-bold">{{ articleInfo.source_name }}</h2>
                <h1 class="text-sm line-clamp-3">{{ articleInfo.title }}</h1>
            </div>
        </a>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
import { formatDate } from "@/utils/dateFormatUtils.js";

// Props for the component
const props = defineProps({
    articleInfo: {
        type: Object,
        required: true,
    },
});
</script>
