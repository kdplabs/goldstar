<script setup>
import { ref, computed } from 'vue';
import LeaderCard from '~/components/LeaderCard.vue';
import { useDataStore } from '~/composables/useDataStore';

const { sortedUsers } = useDataStore();
const searchQuery = ref('');

const filteredUsers = computed(() => {
  if (!searchQuery.value) {
    return sortedUsers.value;
  }
  return sortedUsers.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-text-primary">Top Leaders</h1>
      <div class="w-1/3">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search leaders..." 
          class="block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-2 px-3"
        >
      </div>
    </div>
    <div class="mt-8">
      <ClientOnly>
        <div v-if="filteredUsers && filteredUsers.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <NuxtLink v-for="(user, index) in filteredUsers" :key="user.id" :to="`/users/${user.id}`">
            <LeaderCard 
              :user="user"
              :rank="index + 1" 
            />
          </NuxtLink>
        </div>
        <div v-else class="text-center text-lg text-text-secondary">
          <p>No leaders found.</p>
        </div>
        <template #fallback>
          <!-- this will be rendered on server side -->
          <div class="text-center text-lg text-text-secondary">
            <p>Loading leaders...</p>
          </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
