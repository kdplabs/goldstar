<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  user: {
    type: Object,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'save']);

const editableUser = ref(null);

watch(() => props.user, (newUser) => {
  if (newUser) {
    editableUser.value = { ...newUser };
  } else {
    editableUser.value = null;
  }
}, { immediate: true });

const save = () => {
  emit('save', editableUser.value);
};

const close = () => {
  emit('close');
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-text-primary mb-6">Edit User</h2>
      <form v-if="editableUser" @submit.prevent="save" class="space-y-4">
        <div class="flex items-center space-x-4">
          <img :src="editableUser.avatar" alt="avatar" class="w-16 h-16 rounded-full object-cover">
          <div class="flex-grow">
            <label for="edit-avatar" class="block text-sm font-medium text-text-secondary">Avatar URL</label>
            <input type="text" id="edit-avatar" v-model="editableUser.avatar" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-2 px-3">
          </div>
        </div>
        <div>
          <label for="edit-name" class="block text-sm font-medium text-text-secondary">Name</label>
          <input type="text" id="edit-name" v-model="editableUser.name" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
        </div>
        <div>
          <label for="edit-goldStars" class="block text-sm font-medium text-text-secondary">Gold Stars</label>
          <input type="number" id="edit-goldStars" v-model.number="editableUser.goldStars" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
        </div>
        <div class="flex justify-end space-x-4 pt-4">
          <button type="button" @click="close" class="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            Cancel
          </button>
          <button type="submit" class="bg-accent text-white font-bold py-2 px-4 rounded-lg hover:bg-accent-dark transition-colors">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
