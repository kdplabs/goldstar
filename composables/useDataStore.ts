import { useLocalStorage } from '@vueuse/core';

const initialUsers = [
  { id: 1, name: 'Alex Johnson', goldStars: 152, avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Maria Garcia', goldStars: 148, avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'James Smith', goldStars: 125, avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Patricia Williams', goldStars: 110, avatar: 'https://i.pravatar.cc/150?u=4' },
  { id: 5, name: 'Robert Brown', goldStars: 98, avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 6, name: 'Jennifer Jones', goldStars: 85, avatar: 'https://i.pravatar.cc/150?u=6' },
  { id: 7, name: 'Michael Miller', goldStars: 72, avatar: 'https://i.pravatar.cc/150?u=7' },
  { id: 8, name: 'Linda Davis', goldStars: 61, avatar: 'https://i.pravatar.cc/150?u=8' },
  { id: 9, name: 'William Wilson', goldStars: 45, avatar: 'https://i.pravatar.cc/150?u=9' },
  { id: 10, name: 'Elizabeth Moore', goldStars: 23, avatar: 'https://i.pravatar.cc/150?u=10' },
];

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

  const addUser = (user) => {
    const newId = users.value.length > 0 ? Math.max(...users.value.map(u => u.id)) + 1 : 1;
    users.value.push({ 
      ...user, 
      id: newId,
      avatar: user.avatar || `https://i.pravatar.cc/150?u=${newId}`
    });
  };

  const updateUser = (updatedUser) => {
    const index = users.value.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users.value[index] = updatedUser;
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
    stages,
    addUser,
    updateUser,
    deleteUser,
    updateStage,
  };
};
