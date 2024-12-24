<script setup>
import {allFutureEvents} from '../components/GameList'
import {ref} from 'vue'



const allFuture = ref(allFutureEvents())

console.log('here', allFuture.value)

</script>



<template>
  <main>
    
    
    <div class="cardContainer">
      <h3 class="heading">future</h3>
      <div class="row itemDisplay">
    <div class="col-4"><img class="iconsForList" src="../assets/person.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/time.png" ></div>
    <div class="col-4"><img class="iconsForList" src="../assets/location.png" ></div>
  </div>
  <div class="row itemDisplay" v-for="(item, index) in allFuture" :key="index">
    <div class="col-4">{{ item.name }}</div>
    <div class="col-4">{{ item.date.toLocaleDateString() }} {{ item.date.toLocaleTimeString() }}</div>
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