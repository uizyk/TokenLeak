<template>
  <div>
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
