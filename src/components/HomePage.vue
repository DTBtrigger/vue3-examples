<template>
  <div class="container">
    <div class="carousel">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card"
        :style="{ '--angle': card.angle + 'deg' }"
        @mouseover="pauseRotation"
        @mouseout="resumeRotation">
        <img :src="card.imgSrc" :alt="'Image ' + index" />
      </div>
    </div>
    <div class="oven">
      <img :src="oven01" alt="Oven" />
    </div>
    <div class="introduce">
      <div class="all-title">
        <img :src="title03" alt="Title" />
      </div>
      <div class="description">
        <p>烘焙是一场创意的冒险</p>
        <p>从挑选食材到设计造型</p>
        <p>每一个环节都能让我们发挥无限的想象力</p>
        <p>可以制作出可爱的饼干、精致的 cupcake或是充满艺术感的节日蛋糕</p>
        <p>看着自己亲手打造的甜品杰作</p>
        <p>那种满足感无法言喻</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import bread01 from '../assets/img/bread01.png'
import cake01 from '../assets/img/cake01.png'
import cookie02 from '../assets/img/cookie02.png'
import chocolate01 from '../assets/img/chocolate01.png'
import coldsweet02 from '../assets/img/coldsweet02.png'
import crisp02 from '../assets/img/crisp02.png'
import oven01 from '../assets/img/oven01.png'
import title03 from '../assets/img/title03.png'

// 定义卡片数据的类型
interface Card {
  imgSrc: string
  angle: number
}

// 卡片数据
const cards = ref([
  { imgSrc: bread01, angle: 0 },
  { imgSrc: cake01, angle: 60 },
  { imgSrc: cookie02, angle: 120 },
  { imgSrc: chocolate01, angle: 180 },
  { imgSrc: coldsweet02, angle: 240 },
  { imgSrc: crisp02, angle: 300 }
])

// 动画控制变量
const isPaused = ref(false)
let animationFrameId: number | null = null

// 动画函数
const rotateCards = () => {
  if (!isPaused.value) {
    cards.value.forEach(card => {
      card.angle = (card.angle + 0.5) % 360 // 保证角度始终在 [0, 360)
    })
  }
  animationFrameId = requestAnimationFrame(rotateCards)
}

// 鼠标事件
const pauseRotation = () => {
  isPaused.value = true
}
const resumeRotation = () => {
  isPaused.value = false
}

// 生命周期钩子
onMounted(() => {
  rotateCards()
})

onUnmounted(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #fbf5e2;
}
.carousel {
  position: absolute;
  top: 17%;
  left: 10%;
  width: 250px;
  height: 250px;
}
.card {
  position: absolute;
  width: 150px;
  height: 120px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: rotate(var(--angle)) translate(2 50px) rotate(calc(-1 * var(--angle)));
  transform-origin: center;
  transition:
    width 0.3s,
    height 0.3s;
}
.card img {
  width: 100%;
  height: 100%;
  border-radius: 30%;
}
.card:hover {
  width: 200px;
  height: 150px;
}
.oven {
  height: 200px;
  width: 300px;
  margin: 200px;
}
.oven img {
  width: 100%;
  height: 100%;
}
.introduce {
  margin: 0 5%;
  width: 45%;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(251, 245, 226);
}
.introduce .all-title {
  height: 35%;
  width: 100%;
}
.introduce .all-title img {
  width: 100%;
  height: 100%;
}
.introduce .description {
  height: 65%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  padding: 15px;
  font-size: 30px;
  color: #7c4900;
}
</style>
