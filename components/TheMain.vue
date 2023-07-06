<template>
    <div class="bg-background-dark p-5">
        <ArticleFilterButtons class="hidden md:flex mb-10" />
        <div v-for="(article, articleIndex) in newsData" :key="articleIndex">
            <ArticleCard :articleInfo="article" />
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps} from "vue";

//Props for the component
const props = defineProps({
    mockData: {
        type: Object,
        required: true,
    },
});

const newsData = ref(props.mockData.data);

</script>