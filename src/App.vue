<template>
  <div id="app" class="">
    <NavBar txt="INGRESAR"/>
    <Home />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

/* Importando los componentes */
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'app',
  components: {
    NavBar,
    Home,
    HelloWorld
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,500,500i,600,700,800);

#app {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}
</style>
