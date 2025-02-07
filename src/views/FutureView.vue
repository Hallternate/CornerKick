<script setup>

/*This displays all future dates*/

import { ref } from 'vue'
import { useGamesStore } from '../store/GetGamesStore';
import { useDeleteGamesStore } from '../store/DeleteGameStore';

const storeGet = useGamesStore();
const confirmationMessage = ref('');
const storeDelete = useDeleteGamesStore();
const totalDates = storeGet.getTotalDates()
const gameDays = ref([])
const clickedItemId = ref(null);
const fetchGameDays = () => {
  gameDays.value = []  
  for (let i = 0; i < totalDates; i++) {
    const day = storeGet.nextUpcomingDay(i);
    day.forEach(item => {
      if (typeof item.date === 'string') {
        item.date = new Date(item.date); 
      }
    });
    gameDays.value.push(day);
  }
};

fetchGameDays()

async function deleteGame(idToDelete){
  clickedItemId.value = idToDelete;
  storeDelete.deleteEntry(idToDelete);
  const response = await storeDelete.deleteEntry(idToDelete);
  confirmationMessage.value = response.message;
  setTimeout(() => {
    confirmationMessage.value = '';
  }, 3200);

  
}

</script>

<template>
  <main>
    <p class="sucessDelete" v-if="confirmationMessage">{{ confirmationMessage }}</p>
    <div class="cardContainer" v-for="(gameDay, index) in gameDays" :key="index">
      <h3 class="heading">{{ new Date(gameDay[0].date).toLocaleDateString() }}</h3>
      
      
      <div class="row itemDisplay">
        <div class="col-3"><img class="iconsForList" src="../assets/person.png" /></div>
        <div class="col-3"><img class="iconsForList" src="../assets/time.png" /></div>
        <div class="col-3"><img class="iconsForList" src="../assets/location.png" /></div>
      </div>

      <div class="row itemDisplay" v-for="(item, idx) in gameDay" :key="idx" :class="{ 'highlight-delete': clickedItemId === item.id }">
        <div class="col-3">{{ item.name }}</div>
        <div class="col-3">{{ item.date.toLocaleTimeString() }}</div>
        <div class="col-3">{{ item.loc }}</div>
        <div class="col-3"><img @click="deleteGame(item.id)" class="iconsForList delete" style="width:15%" src="../assets/delete.png" /></div>
        


      </div>
    </div>
  </main>
</template>

<style>

.highlight-delete{
  text-decoration: line-through;
  text-decoration-color: white;
  text-decoration-thickness: 2px;


}
.cardContainer {
  border: 2px solid #DBAFA0;
  border-radius: 70px;
  padding: 20px;
  background-color: #00000047;
  margin: 20px 10px 20px 10px;
}

.iconsForList {
  width: 25%;
}

.heading {
  color: white;
  text-align: center;
}

.times {
  text-align: center;
  list-style-type: none;
  padding-inline-start: 0px;
}

.itemDisplay div {
  text-align: center;
  color: white;
}

.times li {
  text-align: center;
}
</style>
