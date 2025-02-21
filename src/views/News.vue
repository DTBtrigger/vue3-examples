<script setup lang="ts">
import person from '@/hooks/person'
import type { News, Person } from '@/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let neswList = ref([
  { id: 'shfjhi01', title: '905维修', content: '这周905维修' },
  { id: 'shfjhi02', title: '906关闭', content: '这周三至周五906关闭' },
  { id: 'shfjhi03', title: '908考试', content: '这周四908考试' }
])

const router = useRouter()
let showNews = (news: News) => {
  router.push({
    path: '/news/detail',
    query: {
      id: news.id,
      title: news.title,
      content: news.content
    }
  })
}
</script>
<template>
  <div class="news-title">
    <ul>
      <li v-for="news in neswList" :key="news.id">
        <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">
          {{ news.title }}
        </RouterLink> -->
        <RouterLink
          :to="{
            path: '/news/detail',
            query: {
              id: news.id,
              title: news.title,
              content: news.content
            }
          }">
          {{ news.title }}
        </RouterLink>
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">
            {{ news.id }}
        </RouterLink> -->
        <!-- <RouterLink
          :to="{
            name: 'detail',
            params: {
              id: news.id,
              title: news.title,
              content: news.content
            }
          }">
          {{ news.id }}
        </RouterLink> -->
        <button type="button" @click="showNews(news)">查看新闻</button>
      </li>
    </ul>
  </div>
  <div class="news-content">
    <RouterView></RouterView>
  </div>
</template>
