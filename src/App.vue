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
import Water from './components/Water.vue'
import Person1 from './components/Person1.vue'

export default {
  name: 'App',
  components: { Person, Car, CalculateName, HomePage, Cakes, Crisp, Cookie, Water, Person1 }
}
</script>

<template>
  <SidebarView id="sidebar" />
  <!-- <RouterView /> -->
  <Person />
  <Water />
  <Person1 />

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
