<script setup>
import AdminControls from '~/components/AdminControls.vue';
import Confetti from '~/components/Confetti.vue';
import { ref, computed } from 'vue';

const route = useRoute();
const { users } = useDataStore();
const confettiRef = ref(null);

const user = computed(() => {
  if (!users.value) return null;
  return users.value.find(u => u.id === parseInt(route.params.id, 10));
});

const rankStage = computed(() => {
  if (!user.value) return {};
  if (user.value.goldStars >= 150) return { name: 'Trailblazer', color: 'text-red-500' };
  if (user.value.goldStars >= 120) return { name: 'Ranger', color: 'text-green-500' };
  if (user.value.goldStars >= 90) return { name: 'Explorer', color: 'text-blue-500' };
  if (user.value.goldStars >= 60) return { name: 'Adventurer', color: 'text-purple-500' };
  if (user.value.goldStars >= 30) return { name: 'Scout', color: 'text-cyan-500' };
  return { name: 'Rookie', color: 'text-gray-500' };
})

const onStarAwarded = () => {
  if (confettiRef.value) {
    confettiRef.value.celebrate();
  }
}
</script>

<template>
  <div class="relative">
    <Confetti ref="confettiRef" />
    <div v-if="user" class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg overflow-hidden">
      <div class="p-8">
        <div class="flex items-center">
          <img class="h-24 w-24 rounded-full object-cover" :src="user.avatar" :alt="user.name">
          <div class="ml-6">
            <h1 class="text-3xl font-bold text-primary-dark">{{ user.name }}</h1>
            <p class="text-xl font-semibold" :class="rankStage.color">{{ rankStage.name }}</p>
          </div>
          <div class="ml-auto text-3xl font-bold text-gold flex items-center">
            <span>{{ user.goldStars }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="p-8 border-t border-background">
        <AdminControls :user="user" @star-awarded="onStarAwarded" />
      </div>
    </div>
    <div v-else class="text-center text-red-500">
      Could not find user profile.
    </div>
  </div>
</template>
