<script setup>

import { ref } from 'vue'
import { useGamesStore } from '../store/GetGamesStore';


const nameToAdd = ref('')
console.log('name', nameToAdd.value)
const dateToAdd = ref('')
console.log('date', dateToAdd.value)
const timeToAdd = ref('')
console.log('date', timeToAdd.value)
const locationToAdd = ref('')
console.log('location', locationToAdd.value)




 

  function addGame (){
    console.log('name', nameToAdd.value)
    console.log('date', dateToAdd.value)
    console.log('date', timeToAdd.value)
    console.log('location', locationToAdd.value)
    const newGame = {
    name: nameToAdd.value,
    date: dateToAdd.value,
    location: locationToAdd.value,
    time: timeToAdd.value,
  };
    console.log(newGame)

    
}
</script>

<template>
  <main>
    <div class="cardContainer">
      <h3 class="heading">Add Games</h3>
      
  
      <div class="row itemDisplay">
        <div class="col-4"><img class="iconsForList" src="../assets/person.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/time.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/location.png" /></div>
      </div>

      <div class="row itemDisplay">
        <div class="col-6"><input v-model="nameToAdd" type="text"></div>
        <div class="col-6"><input v-model="dateToAdd" type="date"></div>
        <div class="col-6"><input v-model="timeToAdd" type="time"></div>
        <div class="col-6"><input v-model="locationToAdd" type="text"></div>
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
