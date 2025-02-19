<script setup lang="ts">
import { ref } from 'vue'

let height = ref(100)
let width = ref(200)

let [newHeight, newWith] = [height, width]

let water = {
  height: 100,
  width: 200
}

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
  newWith.value++
}
</script>
<template>
  <div>{{ height }}</div>
  <div>{{ width }}</div>
  <button @click="changeHeigth">修改height</button>
  <button @click="changeWidth">修改width</button>
  <button @click="changeNewHeigth">修改newheight</button>
  <button @click="changeNewWidth">修改newwidth</button>
</template>
<style scoped>
div {
  background-color: azure;
  padding: 30px;
}
</style>
