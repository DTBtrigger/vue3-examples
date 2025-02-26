<script setup lang="ts">
import { ref } from 'vue'

let emits = defineEmits(['send-toy'])
let toy = ref('奥特曼')
let changeToy = () => {
  toy.value = '遥控汽车'
}
</script>
<template>
  <div class="child">
    <h3>子元素</h3>
    <h4>玩具： {{ toy }}</h4>
    <button type="button" @click="emits('send-toy', toy)">将子玩具发送给父</button>
    <!-- 修改后，父组件数据未更新 -->
    <button type="button" @click="changeToy">子修改子的玩具</button>
  </div>
</template>
<style scoped>
.child {
  background-color: bisque;
}
</style>
