<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  },
  rank: {
    type: Number,
    required: true
  }
});

const rankStage = computed(() => {
  if (props.user.goldStars >= 150) return { name: 'Trailblazer', color: 'text-red-500' };
  if (props.user.goldStars >= 120) return { name: 'Ranger', color: 'text-green-500' };
  if (props.user.goldStars >= 90) return { name: 'Explorer', color: 'text-blue-500' };
  if (props.user.goldStars >= 60) return { name: 'Adventurer', color: 'text-purple-500' };
  if (props.user.goldStars >= 30) return { name: 'Scout', color: 'text-cyan-500' };
  return { name: 'Rookie', color: 'text-gray-500' };
})
</script>

<template>
  <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6 text-center transition-all hover:scale-[1.02] relative h-full">
    <div class="absolute top-3 right-3 bg-accent text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-2 border-white border-opacity-30">#{{ rank }}</div>
    <img :src="user.avatar" alt="avatar" class="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white border-opacity-30">
    <div class="mb-4">
      <div class="text-xl font-bold text-text-primary">{{ user.name }}</div>
      <div class="text-md font-semibold" :class="rankStage.color">{{ rankStage.name }}</div>
    </div>
    <div class="text-2xl font-bold text-text-primary flex items-center justify-center">
      <span>{{ user.goldStars }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  </div>
</template>
