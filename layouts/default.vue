<template>
    <div>
        <TheHeader class="fixed top-0" />
        <main class="mt-20">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import mockData from '@/src/mockData/data.json';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
    data() {
        return {
            mockData: mockData,
        }
    },
    mounted() {
        console.log(this.mockData);
    }
}
</script>
