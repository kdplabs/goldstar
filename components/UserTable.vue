<script setup>
const { users } = useDataStore();

const rankStage = (goldStars) => {
  if (goldStars >= 150) return { name: 'Trailblazer', color: 'text-red-500' };
  if (goldStars >= 120) return { name: 'Ranger', color: 'text-green-500' };
  if (goldStars >= 90) return { name: 'Explorer', color: 'text-blue-500' };
  if (goldStars >= 60) return { name: 'Adventurer', color: 'text-purple-500' };
  if (goldStars >= 30) return { name: 'Scout', color: 'text-cyan-500' };
  return { name: 'Rookie', color: 'text-gray-500' };
};

const emit = defineEmits(['edit-user', 'delete-user']);
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-text-primary mb-4">Current Users</h2>
    <div v-if="!users" class="text-center text-text-secondary">Loading users...</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Gold Stars</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Stage</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white divide-opacity-20">
          <tr v-for="user in users" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <img class="h-10 w-10 rounded-full" :src="user.avatar" alt="">
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-text-primary">{{ user.name }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{{ user.goldStars }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium" :class="rankStage(user.goldStars).color">
              {{ rankStage(user.goldStars).name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="$emit('edit-user', user)" class="text-accent hover:text-accent-dark mr-4">Edit</button>
              <button @click="$emit('delete-user', user)" class="text-red-600 hover:text-red-800">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
