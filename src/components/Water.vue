<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, toRefs } from 'vue'

let height = ref(100)
let width = ref(200)

let [newHeight, newWidth] = [height, width]

// let water = ref({
//   height: 100,
//   width: 200
// })
// let { height, width } = toRefs(water.value)

function changeHeigth() {
  height.value++
}
function changeWidth() {
  width.value++
}
function changeNewHeigth() {
  newHeight.value++
}
function changeNewWidth() {
  newWidth.value++
}
// // function changeWaterHeigth() {
// //   water.value.height++
// // }
// // function changeWaterWidth() {
// //   water.value.width++
// }
// function changeWaterHeigth2() {
//   height.value++
// }
// function changeWaterWidth2() {
//   width.value++
// }
onBeforeMount(() => {
  console.log('挂载前')
})

onMounted(() => {
  console.log('挂载完成')
})

onBeforeUnmount(() => {
  console.log('卸载前')
})
</script>
<template>
  <div>{{ height }}</div>
  <div>{{ width }}</div>
  <!-- <div>{{ water.height }}</div>
  <div>{{ water.width }}</div> -->
  <!-- <div>{{ waterHeight }}</div>
  <div>{{ waterwidth }}</div> -->
  <div>{{ newHeight }}</div>
  <div>{{ newWidth }}</div>
  <button @click="changeHeigth">修改height</button>
  <button @click="changeWidth">修改width</button>
  <button @click="changeNewHeigth">修改newheight</button>
  <button @click="changeNewWidth">修改newwidth</button>
  <!-- <button @click="changeWaterHeigth">修改waterheight</button>
  <button @click="changeWaterWidth">修改waterwidth</button>
  <button @click="changeWaterHeigth2">修改waterheight2</button>
  <button @click="changeWaterWidth2">修改waterwidth2</button> -->
</template>
<style scoped>
div {
  background-color: azure;
  padding: 30px;
}
button {
  border: 1px solid rgba(125, 10, 135, 0.551);
  margin: 5px;
  background-color: #d3e2;
  height: 20px;
  border-radius: 5px;
}
</style>
