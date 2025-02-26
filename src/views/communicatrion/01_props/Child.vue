<script setup lang="ts">
let toy = '奥特曼'
// let changeCar = () => {
//   console.log(car)
// }
defineProps(['car', 'sendToy'])
</script>
<template>
  <div class="child">
    <h3>子元素</h3>
    <h4>{{ toy }}</h4>
    <h4>父给的车：{{ car }}</h4>
    <button type="button" @click="sendToy(toy)">子给父发送toy</button>
    <!-- <button type="button" @click="changeCar">子修改父的车</button> -->
  </div>
</template>
<style scoped>
.child {
  background-color: bisque;
}
</style>
