<script setup lang="ts">
import Child from './Child.vue'
</script>
<template>
  <div class="father">
    <h3>父元素</h3>
    <Child />
  </div>
</template>
<style>
.father {
  background-color: aquamarine;
  height: 200px;
}
</style>
