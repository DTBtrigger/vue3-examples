<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from '@/views/SidebarView.vue'
import Person from './components/Person.vue'
import Car from './components/Car.vue'
import CalculateName from './components/CalculateName.vue'
import HomePage from './views/HomePage.vue'
import Cakes from './views/Cakes.vue'
import Crisp from './views/Crisp.vue'
import Cookie from './components/Cookie.vue'
import Water from './components/Water.vue'
import Person1 from './components/Person1.vue'
import News from './views/News.vue'

export default {
  name: 'App',
  components: { Person, Car, CalculateName, HomePage, Cakes, Crisp, Cookie, Water, Person1, News }
}
</script>

<template>
  <div class="navigate">
    <RouterLink to="/homepage" active-class="active">首页</RouterLink>
    <RouterLink :to="{ name: 'crisp' }" active-class="active">酥</RouterLink>
    <RouterLink to="/cakes" active-class="active">蛋糕</RouterLink>
    <RouterLink :to="{ name: 'news' }" active-class="active">新闻</RouterLink>
  </div>
  <div class="main-content">
    <RouterView></RouterView>
  </div>
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
a.active {
  color: red;
}
</style>
