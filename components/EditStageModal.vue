<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  stage: {
    type: Object,
    default: null
  },
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'save']);

const editableStage = ref(null);

watch(() => props.stage, (newStage) => {
  if (newStage) {
    editableStage.value = { ...newStage };
  } else {
    editableStage.value = null;
  }
}, { immediate: true });

const save = () => {
  emit('save', editableStage.value);
};

const close = () => {
  emit('close');
};
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
    <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-text-primary mb-6">Edit Stage</h2>
      <form v-if="editableStage" @submit.prevent="save" class="space-y-4">
        <div>
          <label for="edit-stage-name" class="block text-sm font-medium text-text-secondary">Stage Name</label>
          <input type="text" id="edit-stage-name" v-model="editableStage.name" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
        </div>
        <EmojiPicker v-model="editableStage.icon" />
        <div>
          <label for="edit-stage-stars" class="block text-sm font-medium text-text-secondary">Required Gold Stars</label>
          <input type="number" id="edit-stage-stars" v-model.number="editableStage.stars" class="mt-1 block w-full rounded-md border-gray-300 bg-white bg-opacity-50 shadow-sm focus:border-accent focus:ring-accent sm:text-sm py-3 px-4">
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
