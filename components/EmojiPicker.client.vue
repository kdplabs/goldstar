<script setup>
import { ref } from 'vue';
import EmojiPicker from 'vue3-emoji-picker';
import 'vue3-emoji-picker/css';

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const showPicker = ref(false);

const onSelectEmoji = (emoji) => {
  emit('update:modelValue', emoji.i);
  showPicker.value = false;
};
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-secondary">Icon</label>
    <div class="mt-1 relative">
      <div 
        @click="showPicker = !showPicker" 
        class="w-full text-left bg-white border border-gray-300 rounded-md shadow-sm py-3 px-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
      >
        <span class="text-2xl">{{ modelValue || 'Select an icon' }}</span>
      </div>
      <div v-if="showPicker" class="absolute z-10 mt-1">
        <EmojiPicker :native="true" @select="onSelectEmoji" />
      </div>
    </div>
  </div>
</template>
