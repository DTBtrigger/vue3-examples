<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, toRef, toRefs } from 'vue'
const route = useRoute()
// const query = ref(useRoute().query)
// const { query } = toRefs(useRoute())
defineProps(['id', 'title', 'content'])
</script>
<template>
  <!-- <div>
    编号： {{ route.query.id }}
    <br />
    标题： {{ route.query.tit8le }}
    <br />
    内容： {{ route.query.content }}
  </div> -->
  <!-- <div>
    编号： {{ query.id }}
    <br />
    标题： {{ query.title }}
    <br />
    内容： {{ query.content }}
  </div> -->
  <!-- <div>
    编号： {{ route.params.id }}
    <br />
    标题： {{ route.params.title }}
    <br />
    内容： {{ route.params.content }}
    <br />
    测试：{{ a }}
    <br />
    {{ b }}
    <br />
    {{ c }}
  </div> -->
  <div>
    编号： {{ id }}
    <br />
    标题： {{ title }}
    <br />
    内容： {{ content }}
  </div>
</template>
