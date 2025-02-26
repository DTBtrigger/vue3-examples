<script setup lang="ts">
import type { Car } from '@/types'
import Child from './Child.vue'
import { ref } from 'vue'

let car = ref('奔驰')
let toy = ref('')
let getToy = (value: string) => {
  toy.value = value
}
let changeCar = () => {
  car.value = '宝马'
}
</script>
<template>
  <div class="father">
    <h3>父元素</h3>
    <h4>汽车：{{ car }}</h4>
    <h4 v-show="toy">子的玩具：{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy" />
    <button type="button" @click="changeCar">父修改父的车</button>
  </div>
</template>
<style>
.father {
  background-color: aquamarine;
  height: 200px;
}
</style>
