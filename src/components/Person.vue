<script lang="ts">
export default {
  name: 'Person'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
let name = ref('张三') //此时的数据不是响应式的
let age = ref(18)
let tel = '18888888'

function changeName() {
  name.value = 'zhangsan'
}

function changeAge() {
  age.value = age.value + 1
}

function showTel() {
  alert(tel)
}
</script>

<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">展示电话</button>
  </div>
</template>

<style>
.person {
  background-color: #555;
}
</style>
