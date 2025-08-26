<script setup>
import { ref } from 'vue';
import ProgressionTable from '~/components/ProgressionTable.vue';
import EditStageModal from '~/components/EditStageModal.vue';

const { updateStage } = useDataStore();

const isEditModalVisible = ref(false);
const selectedStage = ref(null);

const handleEditStage = (stage) => {
  selectedStage.value = stage;
  isEditModalVisible.value = true;
};

const handleCloseModal = () => {
  isEditModalVisible.value = false;
  selectedStage.value = null;
};

const handleSaveChanges = (updatedStage) => {
  updateStage(updatedStage);
  handleCloseModal();
};
</script>

<template>
  <div>
    <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6">
      <h1 class="text-3xl font-bold text-text-primary mb-6">Progression Management</h1>
      <ProgressionTable @edit-stage="handleEditStage" />
    </div>
    <EditStageModal 
      :show="isEditModalVisible" 
      :stage="selectedStage" 
      @close="handleCloseModal" 
      @save="handleSaveChanges" 
    />
  </div>
</template>
