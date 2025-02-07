import { defineStore } from 'pinia';
import { database, ref, remove } from '../firebase';

export const useDeleteGamesStore = defineStore('deleteGames', {
  state: () => ({
    
  }),

  actions: {
    async deleteEntry(idToDelete) {
      try {
        const gameRef = ref(database, `events/${idToDelete}`);
        await remove(gameRef);
        
      } catch (error) {
        console.error('Error deleting game:', error);
      }
    },
  },
});
