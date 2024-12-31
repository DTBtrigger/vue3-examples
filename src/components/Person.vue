<script lang="ts">
export default {
  name: 'Person'
}
</script>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
let person = reactive({
  name: '张三',
  age: 18,
  tel: '188888888888'
})

let { name, age, tel } = toRefs(person)

function changeName() {
  person.name = 'zhangsan'
}

function changeAge() {
  person.age = person.age + 1
}

function showTel() {
  alert(person.tel)
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
