<template>
    <div class="flex-col flex items-start py-2 mb-6 md:flex-row md:w-3/4 md:h-[80px] xl:w-[400px] xl:h-[100px]">
        <img class="rounded-sm md:w-20 mb-2 md:w-40px md:h-40px md:px-2 xl:min-w-[200px]" :src="articleInfo.image_url">
        <a class="px-2 md:pl-2" :href="articleInfo.news_url">
            <div class="text-white flex flex-col max-w-[200px] gap-1">
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
