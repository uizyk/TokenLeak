<template>
  <div class="w-full">
    <TheHero :mockData="mockData" />
    <TheMain :mockData="mockData" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import mockData from '@/src/mockData/data.json';

onMounted(() => {
  console.log(mockData);
});
</script>
