<template>
    <div>
        <TheHeader />
        <main>
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
