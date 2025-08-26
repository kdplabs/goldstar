<script setup>
const { stages } = useDataStore();

const emit = defineEmits(['edit-stage']);
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-text-primary mb-4">Progression Stages</h2>
    <div v-if="!stages" class="text-center text-text-secondary">Loading stages...</div>
    <div v-else class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Stage Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Required Gold Stars</th>
            <th class="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white divide-opacity-20">
          <tr v-for="stage in stages" :key="stage.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <span class="text-2xl mr-4">{{ stage.icon }}</span>
                <div class="text-sm font-medium text-text-primary">{{ stage.name }}</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{{ stage.stars }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button @click="$emit('edit-stage', stage)" class="text-accent hover:text-accent-dark">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
