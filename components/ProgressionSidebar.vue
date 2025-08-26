<script setup>
import { computed } from 'vue';

const { stages } = useDataStore();

const sortedStages = computed(() => {
  if (!stages.value) return [];
  // Create a shallow copy before sorting to avoid mutating the original array from useFetch
  return [...stages.value].sort((a, b) => b.stars - a.stars);
});
</script>

<template>
  <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6 h-full">
    <h2 class="text-2xl font-bold text-white mb-6">Progression Stages</h2>
    <ul class="space-y-4">
      <li v-for="stage in sortedStages" :key="stage.id" class="flex items-center p-3 rounded-lg transition-colors hover:bg-white hover:bg-opacity-10">
        <span class="text-3xl mr-4">{{ stage.icon }}</span>
        <div>
          <h3 class="font-bold text-lg text-white">{{ stage.name }}</h3>
          <p class="text-gray-200">Requires {{ stage.stars }}+ stars</p>
        </div>
      </li>
    </ul>
  </div>
</template>
