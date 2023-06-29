<template>
  <div>
    <h1 class="text-4xl font-bold">Index Page / HomePage</h1>
    <TheHero :mockData="mockData" />
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import mockData from '@/src/mockData/data.json';

onMounted(() => {
  console.log(mockData);
});
</script>
