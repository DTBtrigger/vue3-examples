<script setup lang="ts">
import { computed, ref } from 'vue'

let firstName = ref(null)
let lastName = ref(null)
let fullName = computed(() => {
  console.log(1)
  return lastName.value + '-' + firstName.value
})
</script>
<template>
  <div class="person">
    姓：
    <input type="text" v-model="lastName" />
    <br />
    名：
    <input type="text" v-model="firstName" />
    <br />
    全名：{{ fullName }}
    <br />
    全名：{{ fullName }}
    <br />
    全名：{{ fullName }}
    <br />
  </div>
</template>
<style>
.person {
  background-color: beige;
}
</style>
