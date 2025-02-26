<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'
let toy = ref('')
let getToy = (value: string) => {
  toy.value = value
}
</script>
<template>
  <div class="father">
    <h3>父元素</h3>
    <h4 v-show="toy">{{ toy }}</h4>
    <Child @send-toy="getToy" />
  </div>
</template>
<style>
.father {
  background-color: aquamarine;
  height: 200px;
}
</style>
