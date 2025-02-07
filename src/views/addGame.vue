<script setup>

import { ref } from 'vue'
import { pushGame } from '../store/AddGameStore';

const confirmationMessage = ref('');
const nameToAdd = ref('')
const dateToAdd = ref('')
const timeToAdd = ref('')
const locationToAdd = ref('')

async function addGame() { 
  const newGame = {
    name: nameToAdd.value,
    date: dateToAdd.value,
    location: locationToAdd.value,
    time: timeToAdd.value,
  };

  const response = await pushGame(newGame); 
  confirmationMessage.value = response.message; 

  nameToAdd.value = '';
  dateToAdd.value = '';
  timeToAdd.value = '';
  locationToAdd.value = '';

 
  setTimeout(() => {
    confirmationMessage.value = '';
  }, 2000);
}

</script>

<template>
  <main>
    <p class="sucessDelete" v-if="confirmationMessage">{{ confirmationMessage }}</p>
    <div class="cardContainer">
     

      <div class="row itemDisplay">
        <div class="col-6"><input v-model="nameToAdd" placeholder="name"type="text"></div>
        <div class="col-6"><input v-model="dateToAdd" placeholder="date" type="date"></div>
        <div class="col-6"><input v-model="timeToAdd" placeholder="time" type="time"></div>
        <div class="col-6"><input v-model="locationToAdd" placeholder="location" type="text"></div>
      </div>
      <div class="row"><button @click="addGame">Add Game</button></div>
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
