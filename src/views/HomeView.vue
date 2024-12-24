<script setup>
import {nextUpcomingDay} from '../components/GameList'
import {ref} from 'vue'

const nextGameDay = ref(nextUpcomingDay(0))
const nextGameDate = ref(nextUpcomingDay(0)[0].date)

const afterNext= ref(nextUpcomingDay(1))
const afterNextDate = ref(nextUpcomingDay(1)[0].date)

const upComingdDate = `${(nextGameDate.value.getMonth() + 1).toString().padStart(2, '0')}/${nextGameDate.value.getDate().toString().padStart(2, '0')}/${nextGameDate.value.getFullYear()}`;
console.log(upComingdDate)

const nextUpcomingDate = `${(afterNextDate.value.getMonth() + 1).toString().padStart(2, '0')}/${afterNextDate.value.getDate().toString().padStart(2, '0')}/${afterNextDate.value.getFullYear()}`;






</script>



<template>
  <main>
    
    
    <div class="cardContainer">
      <h3 class="heading">{{upComingdDate}}</h3>
      <div class="row itemDisplay">
    <div class="col-4"><img class="iconsForList" src="../assets/person.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/time.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/location.png" ></div>
  </div>
  <div class="row itemDisplay" v-for="(item, index) in nextGameDay" :key="index">
    <div class="col-4">{{ item.name }}</div>
    <div class="col-4">{{ item.date.toLocaleTimeString() }}</div>
    <div class="col-4">{{ item.loc}}</div>
    
    
  </div>
</div>
 
<div class="cardContainer">
      <h3 class="heading">{{nextUpcomingDate }}</h3>
      <div class="row itemDisplay">
    <div class="col-4"><img class="iconsForList" src="../assets/person.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/time.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/location.png" ></div>
  </div>
  <div class="row itemDisplay" v-for="(item, index) in afterNext" :key="index">
    <div class="col-4">{{ item.name }}</div>
    <div class="col-4">{{ item.date.toLocaleTimeString() }}</div>
    <div class="col-4">{{ item.loc}}</div>
    
    
  </div>
</div>


</main>
</template>
<style>
.cardContainer{
  border: 2px solid #DBAFA0;
  border-radius: 70px;
  padding: 20px;
  background-color: #00000047;
  margin: 20px 10px 20px 10px;
}


.iconsForList{width:25%}

.heading{color:white;
text-align: center;}

.times{text-align: center;
list-style-type:none;
padding-inline-start: 0px;}

.itemDisplay div{text-align: center;
color:white;}

.times li{text-align: center;}
</style>