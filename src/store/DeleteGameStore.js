import { defineStore } from 'pinia';
import { database, ref, get } from '../firebase';

export const useDeleteGamesStore = defineStore('deleteGames', {
  state: () => ({
    
  }),

  getters: {
    getSchedule(state) {
      return state.games;
    },
  },

  actions: {
    async deleteEntry(dateToDelete) {
      
        console.log('indelete game', dateToDelete)
        
      
    },

    
   

    

    /*allFutureEvents() { /*boilerplate function
      const { gamesByDate } = this.processGames();
      return gamesByDate[1] || []; 
    },*/
  },
});