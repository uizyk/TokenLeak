<template>
    <div>
        <!-- Div for top section of main page -->
        <div class="bg-background-dark p-5 flex justify-center">
            <!-- <ArticleFilterButtons class="hidden md:flex mb-10" /> -->
            <div>
                <h1 class="text-white text-2xl mb-5 ml-5">Recent Articles</h1>
                <div v-for="(articleHorizontal, articleHorizontalIndex) in recentArticles" :key="articleHorizontalIndex">
                    <ArticleCardHorizontal :articleInfo="articleHorizontal" />
                </div>
            </div>
            <div>
                <h1 class="text-white text-xl mt-3 mb-4 ml-3">Popular Articles</h1>
                <div v-for="(articleMini, articleMiniIndex) in popularArticles" :key="articleMiniIndex">
                    <ArticleCardMini :articleInfo="articleMini" />
                </div>
            </div>
        </div>

        <!-- Div for bottom section of main page -->
        <div class="bg-background-dark flex flex-wrap w-full h-[1000px] pt-[50px] justify-center">

            <div v-for="(articleVertical, articleVerticalIndex) in popularArticles" :key="articleVerticalIndex">
                <ArticleCardVertical :articleInfo="articleVertical" />
            </div>

        </div>

    </div>
        
        
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";

// Props for the component
const props = defineProps({
    mockData: {
        type: Object,
        required: true,
    },
});

const newsData = ref([]);

const recentArticles = ref([]);
const popularArticles = ref([]);

onMounted(() => {
    // Ensure newsData is available before creating slices
    newsData.value = props.mockData.data;
    recentArticles.value = newsData.value.slice(0, 4);
    popularArticles.value = newsData.value.slice(0, 8);
});
</script>
