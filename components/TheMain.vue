<template>
    <div v-if="newsData.length > 0">
        <!-- Div for top section of main page -->
        <div class="bg-background-dark p-5 flex flex-col md:flex-row md:justify-around xl:justify-center">
            <!-- <ArticleFilterButtons class="hidden md:flex mb-10" /> -->
            <div class="flex flex-col items-center md:items-start">
                <h1 class="text-white text-2xl mb-5 ml-5">Recent Articles</h1>
                <div class="flex flex-col items-center" v-for="(articleOne, articleOneIndex) in recentArticles" :key="articleOneIndex">
                    <ArticleCardOne :articleInfo="articleOne" />
                </div>
            </div>
            <div class="flex flex-col items-center md:items-start">
                <h1 class="text-white text-xl mt-3 mb-4 ml-3">Hot</h1>
                <div v-for="(articleMini, articleMiniIndex) in hotArticles" :key="articleMiniIndex">
                    <ArticleCardMini :articleInfo="articleMini" />
                </div>
            </div>
        </div>

        <!-- Div for bottom section of main page -->
        <h1 class="text-white text-xl pt-8 bg-background-dark text-center">Recommended</h1>
        <div class="bg-background-dark w-full pb-12 pt-9 h-auto flex justify-center">
            <div class="flex flex-wrap justify-center gap-5 xl:w-5/6">
                <div v-for="(articleTwo, articleTwoIndex) in recommendedArticles" :key="articleTwoIndex">
                    <ArticleCardTwo :articleInfo="articleTwo" />
                </div>
            </div>
        </div>
        <div class="bg-background-dark text-center">
            <button class="text-white p-3 mb-10 bg-purple rounded-sm" @click="loadMoreArticles" v-if="recommendedArticles.length < recommendedArticlesTotal.length">Load More</button>
        </div>

    </div>
        
        
</template>

<script setup>
import { ref, defineProps, onMounted, watchEffect } from "vue";

// Props for the component
const props = defineProps({
    mockData: {
        type: Object,
        required: true,
    },
});

const newsData = ref([]);
const recentArticles = ref([]);
const hotArticles = ref([]);
const recommendedArticlesTotal = ref([]);
const recommendedArticles = ref([]);
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 0);

// Compute the number of recent articles based on screen size
const updateRecentArticles = () => {
    // If the screen is smaller than 'xl', limit to 3 recent articles
    recentArticles.value = windowWidth.value < 1280 ? recentArticles.value.slice(0, 3) : recentArticles.value.slice(0, 4);
};

const loadMoreArticles = () => {
    const currentLength = recommendedArticles.value.length;
    const newArticles = recommendedArticlesTotal.value.slice(currentLength, currentLength + 8); 
    recommendedArticles.value = [...recommendedArticles.value, ...newArticles];
};

watchEffect(() => {
    // Watch for changes in window width and update recentArticles accordingly
    updateRecentArticles();
});

onMounted(() => {
    // Ensure newsData is available before creating slices
    newsData.value = props.mockData.data;
    recentArticles.value = newsData.value.slice(0, 4);
    hotArticles.value = newsData.value.slice(4, 12);
    recommendedArticlesTotal.value = newsData.value.slice(12);
    recommendedArticles.value = recommendedArticlesTotal.value.slice(0, 8);

    // Add event listener for window resize if running in a browser
    if (typeof window !== 'undefined') {
        window.addEventListener("resize", () => {
            windowWidth.value = window.innerWidth;
        });
    }
});
</script>
