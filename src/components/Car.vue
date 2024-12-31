<script lang="ts">
export default {
  name: 'Car'
}
</script>
<script setup lang="ts">
import { reactive } from 'vue'
let car = reactive({
  brand: '奔驰',
  price: 100
})
let games = reactive([
  { id: '001', name: '七日杀' },
  { id: '002', name: '星露谷' },
  { id: '003', name: '戴夫潜水员' }
])

function changePrice() {
  car.price = car.price + 100
}

function changeFirstGameName() {
  games[0].name = '这是我的战争'
}
</script>
<template>
  <div class="car">
    <p>一辆{{ car.brand }},价格是{{ car.price }}</p>
    <button @click="changePrice">修改价格</button>
  </div>
  <div class="games">
    游戏列表
    <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    <button @click="changeFirstGameName">修改第一个游戏的名字</button>
  </div>
</template>

<style>
.car {
  background-color: blanchedalmond;
  border: 2px solid #333;
}
.games {
  padding: 10px;
  background-color: palevioletred;
  border: 2px dot silver;
}
</style>
