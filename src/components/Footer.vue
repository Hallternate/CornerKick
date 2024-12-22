<script setup>

</script>

<template>
  <div class="footerWrapper">
    <nav>
        <RouterLink to="/future">Future</RouterLink><br>
        <RouterLink to="/map">Map</RouterLink>
      </nav>

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
padding: .5px;
padding-bottom:15px}
</style>