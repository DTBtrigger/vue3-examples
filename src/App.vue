<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import CalculateName from './components/CalculateName.vue'
import HomePage from './components/HomePage.vue'
import Cakes from './components/Cakes.vue'
import Crisp from './components/Crisp.vue'
import Cookie from './components/Cookie.vue'

export default {
  name: 'App',
  components: { Person, Car, CalculateName, HomePage, Cakes, Crisp, Cookie }
}
</script>

<template>
  <SidebarView id="sidebar" />
  <!-- <RouterView /> -->
  <Person />
  <!-- <Car />
  <CalculateName />
  <HomePage />
  <Crisp />
  <Cakes />
  <Cookie /> -->
</template>
<style>
/* #app {
  display: flex;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#sidebar {
  border: 1px solid blue;
}
#main {
  border: 1px solid red;
  flex: 1;
}
</style>
