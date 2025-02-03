import { defineStore } from 'pinia';
import axios from 'axios';
import { database, ref, get } from '../firebase';

export const useGamesStore = defineStore('schedule', {
  state: () => ({
    games: [
     
    ],
  }),

  getters: {
    getSchedule(state) {
      return state.games;
    },
  },

  actions: {
    async fetchSchedule() {
      try {
        const scheduleRef = ref(database, 'events');
        const snapshot = await get(scheduleRef);
        if (snapshot.exists()) {
          const newGames = snapshot.val(); 
          const newGamesList = Object.values(newGames); 
          console.log(newGames); 
          this.games = newGamesList;
        } 
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    
    processGames() { /* this grabs the upcoming games and organizes by date soonest to farthest out starting after the current date*/ 
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
      const futureGames = this.games.filter(game => new Date(game.date) >= today);
      futureGames.sort((a, b) => new Date(a.date) - new Date(b.date));
      const uniqueDates = [...new Set(futureGames.map(game => new Date(game.date).toISOString().split('T')[0]))];
      const gamesByDate = uniqueDates.map(date => futureGames.filter(game => new Date(game.date).toISOString().split('T')[0] === date));
      return { uniqueDates, gamesByDate };
    },

    getTotalDates() {/*returns the number of upcoming games*/ 
      const { uniqueDates } = this.processGames();
      return uniqueDates.length;
    },

    nextUpcomingDay(chosenDate) {/*finds the next upcoming date*/ 
      const { gamesByDate } = this.processGames();
      return gamesByDate[chosenDate] || [];
    },

    allFutureEvents() { /*returns a list of all future games*/
      const { gamesByDate } = this.processGames();
      return gamesByDate[1] || []; 
    },
  },
});