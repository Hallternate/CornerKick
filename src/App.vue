<script setup>



import footer from './components/Footer.vue'
</script>

<template>
  <header><div class="logoWrapper">
    <img alt="Vue logo" class="logo" src="/src/assets/CornerKick.png" width="75" height="60" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" />

  </div>
    <div class="wrapper">
      

      
    </div>
  </header>

  <RouterView />

  <component :is="footer" />
</template>

<style scoped>


.logoWrapper{background-image:url('/src/assets/goal.png');
background-size: 130px;
background-position: 50% 0%;
background-repeat: no-repeat;
padding: .5px;
padding-bottom:15px}


header {
  line-height: 1.5;
  max-height: 100vh;
}



.logo {
  display: block;
  margin: 0 auto .5rem;
  padding-bottom: 0px;
 
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
