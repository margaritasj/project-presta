<template>
  <div id="app" class="">
    <BlackBar txt="INGRESAR"/>
    <Home/>
    <NavBar/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

/* Importando los componentes */
import BlackBar from './components/blackbar/BlackBar.vue';
import NavBar from './components/navbar/NavBar.vue';
import Home from './components/home/Header.vue';
import HelloWorld from './components/HelloWorld.vue';


export default {
  name: 'app',
  components: {
    BlackBar,
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
