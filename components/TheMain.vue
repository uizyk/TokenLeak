<template>
    <div class="bg-background-dark p-5">
        <ArticleFilterButtons class="hidden md:flex"/>
    </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from "vue";
import { formatDate } from "@/utils/dateFormatUtils.js";
import ArticleFilterButtons from "./ArticleFilterButtons.vue";


//Props for the component
const props = defineProps({
    mockData: {
        type: Array,
        required: true,
    },
});

const newsData = ref(props.mockData.data);

</script>