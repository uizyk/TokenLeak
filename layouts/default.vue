<template>
    <div>
        <Header/>
        <main>
            <slot />
        </main>
        <Footer/>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Footer from '@/components/Footer.vue';
    import mockData from '@/src/mockData/data.json';

    export default {
        components: {
            Header,
            Footer,
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
