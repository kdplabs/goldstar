<script setup>
import { ref } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});

const starsToAward = ref(1);
const emit = defineEmits(['star-awarded']);

const awardStar = () => {
  if (props.user) {
    props.user.goldStars += starsToAward.value;
    emit('star-awarded');
  }
};
</script>

<template>
  <div>
    <h2 class="text-xl font-bold text-primary mb-4">Admin Controls</h2>
    <div class="flex items-center space-x-4">
      <input 
        type="number" 
        v-model.number="starsToAward"
        min="1"
        class="block w-24 rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-2 px-3"
      >
      <button @click="awardStar" 
        class="bg-gradient-to-r from-btn-gradient-from to-btn-gradient-to text-white font-bold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span>Award Gold Star</span>
      </button>
    </div>
  </div>
</template>
