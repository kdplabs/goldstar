<script setup>
import { ref } from 'vue';

const name = ref('');
const goldStars = ref(0);
const avatar = ref('');

const emit = defineEmits(['user-added']);

const handleSubmit = () => {
  if (!name.value) {
    alert('Please enter a name.');
    return;
  }
  emit('user-added', { name: name.value, goldStars: goldStars.value, avatar: avatar.value });
  name.value = '';
  goldStars.value = 0;
  avatar.value = '';
};
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold text-text-primary mb-4">Add New User</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-text-secondary">Name</label>
        <input type="text" id="name" v-model="name" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
      </div>
      <div>
        <label for="avatar" class="block text-sm font-medium text-text-secondary">Avatar URL (optional)</label>
        <input type="text" id="avatar" v-model="avatar" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
      </div>
      <div>
        <label for="goldStars" class="block text-sm font-medium text-text-secondary">Gold Stars</label>
        <input type="number" id="goldStars" v-model.number="goldStars" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
      </div>
      <button type="submit" class="bg-accent text-white font-bold py-2 px-4 rounded-lg hover:bg-accent-dark transition-colors shadow-sm hover:shadow-md">
        Add User
      </button>
    </form>
  </div>
</template>
