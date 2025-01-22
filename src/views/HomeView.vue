<script setup>
import { ref, computed, onMounted } from 'vue';
import { useGamesStore } from '../store/GetGamesStore';

const store = useGamesStore();

const nextGameDay = ref([]);
const nextGameDate = ref(null);
const afterNext = ref([]);
const afterNextDate = ref(null);

const upComingDate = computed(() => {
  if (!nextGameDate.value) return '';
  const date = new Date(nextGameDate.value);
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
});

const nextUpcomingDate = computed(() => {
  if (!afterNextDate.value) return '';
  const date = new Date(afterNextDate.value);
  return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
});


onMounted(async () => {
  await store.fetchSchedule(); // Fetch the schedule data
  const firstDayGames = store.nextUpcomingDay(0);
  const secondDayGames = store.nextUpcomingDay(1);

  nextGameDay.value = firstDayGames;
  nextGameDate.value = firstDayGames.length ? firstDayGames[0].date : null;

  afterNext.value = secondDayGames;
  afterNextDate.value = secondDayGames.length ? secondDayGames[0].date : null;
});

</script>

<template>
  <main>
    <div class="cardContainer">
      <h3 class="heading">{{ upComingDate }}</h3>
      <div class="row itemDisplay">
        <div class="col-4"><img class="iconsForList" src="../assets/person.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/time.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/location.png" /></div>
      </div>
      <div class="row itemDisplay" v-for="(item, index) in nextGameDay" :key="index">
        <div class="col-4">{{ item.name }}</div>
        <div class="col-4">{{ new Date(item.date).toLocaleTimeString() }}</div>
        <div class="col-4">{{ item.loc }}</div>
      </div>
    </div>

    <div class="cardContainer">
      <h3 class="heading">{{ nextUpcomingDate }}</h3>
      <div class="row itemDisplay">
        <div class="col-4"><img class="iconsForList" src="../assets/person.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/time.png" /></div>
        <div class="col-4"><img class="iconsForList" src="../assets/location.png" /></div>
      </div>
      <div class="row itemDisplay" v-for="(item, index) in afterNext" :key="index">
        <div class="col-4">{{ item.name }}</div>
        <div class="col-4">{{ new Date(item.date).toLocaleTimeString() }}</div>
        <div class="col-4">{{ item.loc }}</div>
      </div>
    </div>
  </main>
</template>

<style>
.cardContainer {
  border: 2px solid #dbaFA0;
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
