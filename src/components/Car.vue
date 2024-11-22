<script setup lang="ts">
let car = {
  brand: '奔驰',
  price: 100
}
function changePrice() {
  car.price = car.price + 100
}
</script>
<template>
  <div class="car">
    <p>一辆{{ car.brand }},价格是{{ car.price }}</p>
    <button @click="changePrice">修改价格</button>
  </div>
</template>

<style>
.car {
  background-color: blanchedalmond;
  border: 2px solid #333;
}
</style>
