<template>
    <div class="bg-background-dark flex justify-between items-center w-full h-20 px-5">
        <div>
            <!-- <img/> -->
            <a href="#">
                <h1 class="text-purple py-1 text-lg font-semibold">TokenLeak</h1>
            </a>
        </div>

        <!-- HAMBURGER MENU FOR TABLET / MOBILE  -->
        <HeaderHamburgerMenu class="md:hidden" />

        <!-- DESKTOP MENU -->
        <div class="hidden md:flex justify-between w-96">
            <p class="text-white py-1"><a href="#">Home</a></p>
            <p class="text-white py-1"><a href="#">About</a></p>
            <p class="text-white py-1"><a href="#">Services</a></p>
            <p class="text-white py-1"><a href="#">Blog</a></p>
            <button class="text-white bg-purple px-2 py-1 rounded-sm flex ">
                Contact us
            </button>
        </div>
    </div>
</template>

<script setup>
import HeaderHamburgerMenu from '@/components/HeaderHamburgerMenu.vue';
</script>
