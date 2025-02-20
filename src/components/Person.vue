<script lang="ts" setup>
import type { Person } from '@/types'
import { reactive, toRefs, computed, ref, watch } from 'vue'
// import person from '@/hooks/person'
let person: Person = reactive({
  id: 'jsjsh01',
  name: '张三',
  age: 18,
  tel: '188888888888',
  car: {
    name: '大众',
    color: 'black'
  }
})

let { name, age } = toRefs(person)

function changeName() {
  person.name = 'zhangsan'
}

function changeAge() {
  person.age = person.age + 1
}

function showTel() {
  alert(person.tel)
}
function changeCarColor() {
  person.car.color = 'blue'
}
function changeCar() {
  // reactive 不支持整个对象替换，但car是person对象中的对象，可以和name，age等属性一样直接更改
  // Object.assign(person.car, { name: '雅迪', color: 'orange' })
  person.car = { name: '雅迪', color: 'orange' }
}
watch(
  () => person.name,
  (newvalue, oldvalue) => {
    console.log('person.name改变了', newvalue, oldvalue)
  }
)
watch(
  () => person.car,
  (newvalue, oldvalue) => {
    console.log('车子改了', newvalue, oldvalue)
  }
)
// ==========================================

let firstname = ref('张')
let lastname = ref('三')

let ans1 = 0
let ans2 = 0
let fullname = computed(() => {
  ans1++
  console.log('ans1 = ' + ans1)
  return firstname.value + lastname.value
})

watch(fullname, (newvalue: string, oldvalue: string) => {
  console.log('姓名修改了', newvalue, oldvalue)
})
</script>

<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>车名：{{ person.car.name }}</h2>
    <h2>车的颜色：{{ person.car.color }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">展示电话</button>
    <button @click="changeCarColor">修改车的颜色</button>
    <button @click="changeCar">修改整个车</button>
  </div>
  <div class="person">
    姓：
    <input type="text" v-model="firstname" />
    名：
    <input type="text" v-model="lastname" />
    全名：{{ fullname }}
  </div>
</template>

<style scoped>
.person {
  background-color: #f5dd575f;
}
button {
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 30px;
  margin: 10px;
  padding: 5px;
}
</style>
