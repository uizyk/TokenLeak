<template>
    <div>
        <TheHeader class="fixed top-0 z-[999]" />
        <main class="mt-20">
            <slot />
        </main>
        <TheFooter />
    </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
    components: {
        TheHeader,
        TheFooter,
    },
}
</script>
