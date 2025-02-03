<script setup>

/*This displays all future dates*/

import { ref } from 'vue'
import { useGamesStore } from '../store/GetGamesStore';

const store = useGamesStore();
const totalDates = store.getTotalDates()
const gameDays = ref([])
const fetchGameDays = () => {
  gameDays.value = []  
  for (let i = 0; i < totalDates; i++) {
    const day = store.nextUpcomingDay(i);
    day.forEach(item => {
      if (typeof item.date === 'string') {
        item.date = new Date(item.date); 
      }
    });
    gameDays.value.push(day);
  }
};

fetchGameDays()

</script>

<template>
  <main>
    <div class="cardContainer" v-for="(gameDay, index) in gameDays" :key="index">
      <h3 class="heading">{{ new Date(gameDay[0].date).toLocaleDateString() }}</h3>
      
  
      <div class="row itemDisplay">
        <div class="col-4"><img class="iconsForList" src="../assets/person.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/time.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/location.png" /></div>
      </div>

      <div class="row itemDisplay" v-for="(item, idx) in gameDay" :key="idx">
        <div class="col-4">{{ item.name }}</div>
        <div class="col-4">{{ item.date.toLocaleTimeString() }}</div>
        <div class="col-4">{{ item.loc }}</div>
      </div>
    </div>
  </main>
</template>

<style>
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
