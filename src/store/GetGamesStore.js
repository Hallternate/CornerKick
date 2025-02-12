import { defineStore } from 'pinia';
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
          const newGamesList = Object.entries(newGames).map(([id, game]) => {
            console.log("Game ID:", id); 
            console.log("Game Data:", game); 
            return { id, ...game }; 
          });
    
          this.games = newGamesList; 
        } 
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },

    processGames() { 
      // This grabs the upcoming games and organizes them by date, soonest to farthest
      let today = new Date();
      today.setHours(0, 0, 0, 0); 
      let games = this.games;
      let futureGames = games.filter(game => new Date(game.date) >= today);
      futureGames.sort((a, b) => new Date(a.date) - new Date(b.date));
      let uniqueDates = [...new Set(futureGames.map(game => new Date(game.date).toISOString().split('T')[0]))];
      const gamesByDate = uniqueDates.map(date => 
        futureGames.filter(game => new Date(game.date).toISOString().split('T')[0] === date)
      );
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