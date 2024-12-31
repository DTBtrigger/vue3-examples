<script setup lang="ts">
import ovne04 from '../assets/img/oven04.png'
import cookie04 from '../assets/img/cookie04.png'
import cookie05 from '../assets/img/cookie05.png'
import cookie06 from '../assets/img/cookie06.png'
import cookie07 from '../assets/img/cookie07.png'

let cookies = [
  {
    name: '曲奇',
    introduce:
      '“曲奇”这个名字来源于英语cookie的译音，常见的曲奇以低筋面粉为主，加入白砂糖、J蛋、黄油、食盐、奶粉等。一般是先在软化的黄油中加入白砂糖，然后开始打发并多次加入蛋液继续打发，再加入低筋面粉和奶粉。特点:曲奇属于酥性饼干的一种，制作上完全不加一油和糖用量也更多，因此颗粒之间只由油脂和滴水，糖连接，吃起来口感绵密，酥软又香甜!',
    imgSrc: cookie04
  },
  {
    name: '威化',
    introduce:
      '威化是wafer(薄脆饼)的音译，这类饼干主要原料是糯米粉、淀粉等，需要加入乳化剂、膨松剂作为辅料，对制作的技艺要求比较高。特点:威化饼干密度低，结构疏松，一口下去酥酥脆脆，但即便吃多了，也不太会有饱腹的感觉。另外也提醒大家注意哦，有些威化饼干是“巧克力味”的，外面裹的可能是代可可脂。',
    imgSrc: cookie05
  },
  {
    name: '全麦',
    introduce:
      '从名字上就可以看得出来，这类饼干ZU1大的特点是使用了全麦面粉，制作起来比较简单，只需要通过常见的发酵和烘烤流程便可做出来。特点:全麦饼干含有丰富的纤维素，饱腹感强，但口味上相对差一些。有些商家为了提升口感，会添加较多的油和糖。因此在 GOU 买 全麦饼干时，记得选择配料表中全麦粉第 一而精制糖相对靠后的一款。',
    imgSrc: cookie06
  },
  {
    name: '压缩',
    introduce:
      '压缩饼干以小麦粉、油脂、乳制品为主要原料，其中还会加入花生粒等干果。有的压缩饼干是将原料烘熟，烘干再模压而制作，有的是将现成的饼干粉碎成颗粒和粉末状，加入配料后经机械压缩制作的。特点:压缩饼干体积虽小，但能量却不低。且不易吸水，硬、质地较密、抗饿，适宜长期保管和运输。',
    imgSrc: cookie07
  }
]
</script>
<template>
  <div class="cookie-container">
    <div class="ovenimg">
      <img :src="ovne04" alt="" />
    </div>
    <div class="cookies">
      <div class="cookie" v-for="(cookie, index) in cookies" :key="index">
        <img :src="cookie.imgSrc" alt="" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.cookie-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cookie-container .ovenimg {
  /* position: absolute; */
  width: 100%;
  height: 150px;
}
.cookie-container .cookies {
  z-index: 999;
  position: absolute;
  top: 240px;
  width: 100%;
  height: 250px;
  background-color: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cookie-container .cookies .cookie {
  width: 100px;
  height: 10px;
}
</style>
