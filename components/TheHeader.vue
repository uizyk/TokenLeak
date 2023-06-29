<template>
    <div class="bg-background-dark flex justify-between items-center w-full h-20 px-5">
        <div>
            <!-- <img/> -->
            <h1 class="text-white">logo</h1>
        </div>

        <!-- HAMBURGER MENU FOR TABLET / MOBILE  -->
        <HeaderHamburgerMenu class="md:hidden " />

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex justify-between w-96">
            <p class="text-white"><a href="#">example</a></p>
            <p class="text-white"><a href="#">example</a></p>
            <p class="text-white"><a href="#">example</a></p>
            <p class="text-white"><a href="#">example</a></p>
            <button class="text-white bg-purple p-1">Contact us</button>
        </div>
    </div>
</template>

<script setup>
import HeaderHamburgerMenu from '@/components/HeaderHamburgerMenu.vue';

// export default {
//     name: 'TheHeader',
// }
</script>
