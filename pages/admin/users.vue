<script setup>
import { ref } from 'vue';
import UserTable from '~/components/UserTable.vue';
import AddUserForm from '~/components/AddUserForm.vue';
import EditUserModal from '~/components/EditUserModal.vue';

const { addUser, updateUser, deleteUser } = useDataStore();

const isEditModalVisible = ref(false);
const selectedUser = ref(null);

const handleUserAdded = (newUser) => {
  addUser(newUser);
};

const handleDeleteUser = (user) => {
  if (confirm(`Are you sure you want to delete ${user.name}?`)) {
    deleteUser(user.id);
  }
};

const handleEditUser = (user) => {
  selectedUser.value = user;
  isEditModalVisible.value = true;
};

const handleCloseModal = () => {
  isEditModalVisible.value = false;
  selectedUser.value = null;
};

const handleSaveChanges = (updatedUser) => {
  updateUser(updatedUser);
  handleCloseModal();
};
</script>

<template>
  <div class="space-y-8">
    <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6">
      <AddUserForm @user-added="handleUserAdded" />
    </div>
    <div class="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl border border-white border-opacity-30 shadow-lg p-6">
      <UserTable @delete-user="handleDeleteUser" @edit-user="handleEditUser" />
    </div>
    <EditUserModal 
      :show="isEditModalVisible" 
      :user="selectedUser" 
      @close="handleCloseModal" 
      @save="handleSaveChanges" 
    />
  </div>
</template>
