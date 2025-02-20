<script setup lang="ts">
import person from '@/hooks/person'
let { personlist, changeAge } = person()
</script>
<template>
  <div class="person">
    <ul>
      <li v-for="person in personlist" :key="person.id">
        {{ person.name }} {{ person.age }}

        <button type="button" @click="changeAge(person)">修改年龄</button>
      </li>
    </ul>
  </div>
</template>
