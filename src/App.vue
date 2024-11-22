<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
import Person from './components/Person.vue'
import Car from './components/Car.vue'
export default {
  neme: 'App',
  components: { Person }
}
</script>

<template>
  <SidebarView id="sidebar" />
  <RouterView />
  <Person />
</template>
<style>
#app {
  display: flex;
}
#sidebar {
  border: 1px solid blue;
}
#main {
  border: 1px solid red;
  flex: 1;
}
</style>
