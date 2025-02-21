<script setup lang="ts">
import { ref, onMounted, shallowReactive } from 'vue'

// 静态导入每张图片
import cake02 from '../assets/img/cake02.png'
import cake03 from '../assets/img/cake03.png'
import cake04 from '../assets/img/cake04.png'
import cake05 from '../assets/img/cake05.png'
import cake06 from '../assets/img/cake06.png'
import cake07 from '../assets/img/cake07.png'
import cake08 from '../assets/img/cake08.png'
import cake09 from '../assets/img/cake09.png'
import cake10 from '../assets/img/cake10.png'
import cake11 from '../assets/img/cake11.png'

const containerSize = 600 // 大盒子的直径
const bubbleSize = 100 // 泡泡的直径
const bubbles = ref<
  Array<{
    x: number
    y: number
    dx: number
    dy: number
    speed: number
    isPause: boolean
    imgSrc: string
  }>
>([])

const imgSrcs = [cake02, cake03, cake04, cake05, cake06, cake07, cake08, cake09, cake10, cake11]

const initBubbles = () => {
  for (let i = 0; i < 10; i++) {
    bubbles.value.push({
      x: Math.random() * (containerSize - bubbleSize),
      y: Math.random() * (containerSize - bubbleSize),
      dx: Math.random() > 0.5 ? 1 : -1, // 水平方向
      dy: Math.random() > 0.5 ? 1 : -1, // 垂直方向
      speed: Math.random() + 0.5, // 移动速度
      isPause: false,
      imgSrc: imgSrcs[i]
    })
  }
}

const updateBubbles = () => {
  bubbles.value.forEach(bubble => {
    if (!bubble.isPause) {
      bubble.x += bubble.dx * bubble.speed
      bubble.y += bubble.dy * bubble.speed

      if (bubble.x <= 0 || bubble.x + bubbleSize >= containerSize - bubbleSize) {
        bubble.dx *= -1
      }
      if (bubble.y <= 0 || bubble.y + bubbleSize >= containerSize - bubbleSize) {
        bubble.dy *= -1
      }
    }
  })
}

const animateBubbles = () => {
  setInterval(updateBubbles, 16) // 每16ms更新一次
}

onMounted(() => {
  initBubbles() // 初始化泡泡
  animateBubbles() // 启动动画
})

// 悬浮停止泡泡
let stopBubble = (index: number) => {
  bubbles.value[index].isPause = true
}

let continueBubble = (index: number) => {
  bubbles.value[index].isPause = false
}
// 悬浮显示对应内容
let cakeName = ref('')
let cakeIntroduce = ref('没有人不喜欢吃蛋糕')
let cakes = [
  {
    name: '提拉米苏',
    introduce:
      '提拉米苏，英文Tiramisu，是一种带咖啡酒味儿的意大利甜点。以马斯卡彭芝士作为主要材料，再以手指饼干取代传统甜点的海绵蛋糕，加入咖啡、可可粉等其他材料。吃到嘴里香、滑、甜、腻，柔和中带有质感的变化，味道并不是一味的甜。'
  },
  {
    name: '戚风',
    introduce:
      '戚风，翻译自英文Chiffon。“Chiffon”这个词是指极为轻薄柔软的绢织物，所以戚风蛋糕一如其名，有着绵密细致的口感。戚风是由美国人哈利.贝卡发明。他把他的发明保密了整整二-年,直至1947年,做法才被公开,这柔如丝绸,轻如羽毛的蛋糕,从此便一发不可收拾地风靡欧美。'
  },
  {
    name: '瑞士卷',
    introduce:
      '瑞士卷是海绵蛋糕的一种。在烤炉中将材料烤成薄薄的蛋糕饼，加上了果酱和奶油,和切碎了的果肉，卷成卷状。形成松软的海绵质感的卷蛋糕。瑞士卷最先由英国传入美国，它不是瑞士的特产，只不过台湾人最初发现它的地点在瑞士，因此名“瑞士卷”。'
  },
  {
    name: '玛芬',
    introduce:
      '玛芬主要指两种以面包为原料的食品，一种用 酵母发酵 而成;另一种更为“快速”的方法是用烘烤粉或者烘烤苏打对面包进行处理而制成。在英国，“玛芬”一词通常含有 “英式玛芬”之意。这是两种玛芬中出现较早的一种，大约出现在公元11世纪时的英国。Moufflet在旧式法语中用来形容面包的柔软”感觉。'
  },
  {
    name: '布朗尼',
    introduce:
      '布朗尼(Chocolate Brownie)是质地介于蛋糕与饼干之间的一种蛋糕，又叫巧克力布朗尼蛋糕、布朗宁蛋糕或者波斯顿蛋糕，它既有乳脂软糖的甜腻，又有蛋糕的松软。布朗尼可以有多种样式。布朗尼的原料通常包括坚果、霜状白糖、生奶油、巧克力等。19世纪末发源于美国，20世纪上半叶于美国、加拿大广受欢迎，后成为美国家庭餐桌上的常客。'
  },
  {
    name: '玛德琳',
    introduce:
      '玛德琳蛋糕是一种法国风味的小甜点，又叫贝壳蛋糕。由黄油、低粉等主料，糖、泡粉、全蛋等配料组合制作而成。原本用于家庭烹制。将其推广到全世界蛋糕殿堂上的功臣，那就要算是法国大文豪普鲁斯特。普鲁斯特因为对贝壳蛋糕的味觉回忆，令他写出了长篇文学巨著《追忆似水年华》，因此也将贝壳蛋糕推上了历史舞台。'
  },
  {
    name: '巴斯克',
    introduce:
      '巴斯克蛋糕(GATEAU BASQUE)是法国南部、西班牙 的 巴斯克蛋糕的传统点心。主要原料有低筋面粉、奶酪、黄油、细砂糖。原本，在西班牙的巴斯克已有一种传统点心，它是混合了面粉及乳酪的一种点心。在十八世纪深受旅人们所喜爱，随着季节的变换，夹在里面的馅，也会由无花果改成樱桃果酱。'
  },
  {
    name: '舒芙蕾',
    introduce:
      '蛋奶酥，又名舒芙蕾(Souffle)，也有译为乎厘,是一种源自法国的烹饪方法。这种特殊的厨艺方法，主要材料包括蛋黄及不同配料拌入经打匀后的蛋白，经烘焙质轻而蓬松。Souffle来自法语中动词souffler的过去分词，意思是“使充气”或简单地指“蓬松地胀起来”。都说舒芙蕾是一道最适合情侣的甜点，充满了浪漫和甜蜜。尤其是刚烘烤出来的舒芙蕾如云朵般轻盈、柔软，入口即化。'
  },
  {
    name: '费南雪',
    introduce:
      '费南雪，也叫杏仁长蛋糕，是一款颇有来历的法国小糕点，源自法语词汇Financier，本义为金融家，富翁，中文翻译中常称它为“费南雪”。费南雪是巴黎证券交易所附近的蛋糕师傅发明的茶点，起初做得很像缩小版的金条，据说是为了让那些在证券交易所的金融家们能快速食完并不弄脏他们的西装，最原始的配方源自一款叫做"visitandine"的蛋糕。'
  },
  {
    name: '拿破仑',
    introduce:
      '“拿破仑蛋糕”法文名为Mille-feuille，即有一千层酥皮的意思，所以它又被称为千层酥。拿破仑蛋糕造价不菲，不但使用了繁杂的起酥工艺，而且酥皮之间的夹层丰富:不仅有鲜奶油，还有吉士酱。拿破仑蛋糕跟拿破仑其实没有关系，。另有一说法在十九世纪初时，巴黎一个整饼师傅和人打赌，要做一个一百层的蛋糕，当时做一百层还是很有难度的，可是这师傅还是创作了这东西。但是最后到底做了几层就无从知晓了，一般都只做三十几层。'
  }
]

let changeIntroduce = (index: number) => {
  cakeName.value = cakes[index].name
  cakeIntroduce.value = cakes[index].introduce
}
</script>

<template>
  <div class="cake-container">
    <div class="bubbles">
      <div
        v-for="(bubble, index) in bubbles"
        :key="index"
        class="cake-bubble"
        :style="{ left: bubble.x + 'px', top: bubble.y + 'px' }"
        @mouseover="stopBubble(index), changeIntroduce(index)"
        @mouseout="continueBubble(index)">
        <img :src="bubble.imgSrc" alt="" />
        <!-- <img src="../img/cake03.png" alt="" /> -->
      </div>
    </div>
    <div class="cake-introduce">
      <div class="cake-title"></div>
      <div class="detail-introduce">
        <h2>{{ cakeName }}</h2>
        <p>{{ cakeIntroduce }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cake-container {
  display: flex;
  height: 650px;
  align-items: center;
  justify-content: center;
  background-color: rgb(251, 245, 226);
  margin: 20px auto;
}
.cake-container .bubbles {
  position: relative;
  width: 750px;
  height: 100%;
  border-radius: 50%;
  /* background-color: rgb(251, 245, 226); */
  border: 3px dashed rgba(35, 58, 109, 0.5);
  overflow: hidden;

  /* margin: 50px auto; */
}
.bubbles .cake-bubble {
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: rgba(35, 58, 109, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.bubbles .cake-bubble img {
  width: 90%;
  height: 90%;
  border-radius: 50%;
  transition: 0.2s ease;
  background-color: rgb(251, 245, 226);
}

.bubbles .cake-bubble img:hover {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.cake-container .cake-introduce {
  flex: 1;
  height: 100%;
  /* border: 2px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cake-container .cake-introduce .cake-title {
  height: 35%;
  width: 100%;
}
.cake-container .cake-introduce .detail-introduce {
  height: 65%;
  width: 100%;
  padding: 50px;
  color: rgb(35, 58, 109);
  font-size: 20px;
  line-height: 1.8;
}
</style>
