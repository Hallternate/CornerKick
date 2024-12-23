<script setup>

</script>

<template>
  <div class="footerWrapper row">
    <div class="col-4"></div>
    <div class="col-4">
    <nav>
        <RouterLink to="/future">Future</RouterLink><br>
        <RouterLink to="/map">Map</RouterLink>
      </nav></div>
      <div class="col-4"></div>
  
  <div class="col-4"></div>
  </div>
</template>

<style scoped>

nav{text-align: center;
    color: white;
    height: 60px;
    padding-top: 33px;
    }

    nav a{
    color: white;
    
    }

.footerWrapper{background-image:url('/src/assets/bottomgoal.png');
background-size: 130px;
color: white;
background-position: 50% 0%;
background-repeat: no-repeat;

padding-bottom:15px;

margin-left: auto;
margin-right: auto;
    width: 100%;}
</style>