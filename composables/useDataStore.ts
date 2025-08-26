import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';

const initialUsers = [
  { id: 1, name: 'Alex Johnson', goldStars: 152, avatar: '' },
  { id: 2, name: 'Maria Garcia', goldStars: 148, avatar: '' },
  { id: 3, name: 'James Smith', goldStars: 125, avatar: '' },
  { id: 4, name: 'Patricia Williams', goldStars: 110, avatar: '' },
  { id: 5, name: 'Robert Brown', goldStars: 98, avatar: '' },
  { id: 6, name: 'Jennifer Jones', goldStars: 85, avatar: '' },
  { id: 7, name: 'Michael Miller', goldStars: 72, avatar: '' },
  { id: 8, name: 'Linda Davis', goldStars: 61, avatar: '' },
  { id: 9, name: 'William Wilson', goldStars: 45, avatar: '' },
  { id: 10, name: 'Elizabeth Moore', goldStars: 23, avatar: '' },
].map(user => {
  if (!user.avatar) {
    const nameForAvatar = user.name.replace(/ /g, '+');
    user.avatar = `https://ui-avatars.com/api/?name=${nameForAvatar}&background=random`;
  }
  return user;
});


const initialStages = [
  { id: 1, name: 'Trailblazer', stars: 150, icon: '🔥' },
  { id: 2, name: 'Ranger', stars: 120, icon: '🌲' },
  { id: 3, name: 'Explorer', stars: 90, icon: '🗺️' },
  { id: 4, name: 'Adventurer', stars: 60, icon: '🧭' },
  { id: 5, name: 'Scout', stars: 30, icon: '🏕️' },
  { id: 6, name: 'Rookie', stars: 0, icon: '🔰' },
];

export const useDataStore = () => {
  const users = useLocalStorage('goldstar-users', initialUsers, { mergeDefaults: true });
  const stages = useLocalStorage('goldstar-stages', initialStages, { mergeDefaults: true });

  const sortedUsers = computed(() => {
    return [...users.value].sort((a, b) => b.goldStars - a.goldStars);
  });

  const addUser = (user) => {
    const newId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1;
    
    const newUser = {
      ...user,
      id: newId,
    };

    if (!newUser.avatar) {
      const nameForAvatar = newUser.name.replace(/ /g, '+');
      newUser.avatar = `https://ui-avatars.com/api/?name=${nameForAvatar}&background=random`;
    }

    users.value.push(newUser);
  };

  const updateUser = (updatedUser) => {
    const index = users.value.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      const finalUserData = { ...updatedUser };
      if (!finalUserData.avatar) {
        const nameForAvatar = finalUserData.name.replace(/ /g, '+');
        finalUserData.avatar = `https://ui-avatars.com/api/?name=${nameForAvatar}&background=random`;
      }
      users.value[index] = finalUserData;
    }
  };

  const deleteUser = (userId) => {
    users.value = users.value.filter(u => u.id !== userId);
  };

  const updateStage = (updatedStage) => {
    const index = stages.value.findIndex(s => s.id === updatedStage.id);
    if (index !== -1) {
      stages.value[index] = updatedStage;
    }
  };

  return {
    users,
    sortedUsers,
    stages,
    addUser,
    updateUser,
    deleteUser,
    updateStage,
  };
};
