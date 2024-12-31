<script setup lang="ts">
import crisp06 from '../assets/img/crisp06.jpg'
import crisp07 from '../assets/img/crisp07.png'
import crisp08 from '../assets/img/crisp08.jpg'
import crisp09 from '../assets/img/crisp09.png'
import crisp10 from '../assets/img/crisp10.png'
</script>
<template>
  <div class="crisp-container">
    <div class="crisp-box">
      <img :src="crisp06" alt="" />
      <h2>油酥类</h2>
      <p>使用较多的油脂和糖，调制成酥性面团经成形、烘烤而制成的组织不分层次、口感酥松的制品</p>
    </div>
    <div class="card-gap"></div>
    <div class="crisp-box">
      <img :src="crisp07" alt="" />
      <h2>松酥类</h2>
      <p>
        使用较多的油脂和糖，辅以蛋品或乳品等，并加入化学疏松剂，调制成松酥面团，经成形、烘烤而制成的疏松制品
      </p>
    </div>
    <div class="card-gap"></div>
    <div class="crisp-box">
      <img :src="crisp08" alt="" />
      <h2>松脆类</h2>
      <p>使用较少的油脂、较多的糖浆或糖调制成糖浆面团，经成形、烘烤而制成的口感松脆的制品</p>
    </div>
    <div class="card-gap"></div>
    <div class="crisp-box">
      <img :src="crisp09" alt="" />
      <h2>酥层类</h2>
      <p>
        用水油面团包入油酥面团或固体油，经反复压片、折叠、成形、烘烤而制成的具有多层次、口感酥松的制品
      </p>
    </div>
    <div class="card-gap"></div>
    <div class="crisp-box">
      <img :src="crisp10" alt="" />
      <h2>酥皮类</h2>
      <p>用水油面团包入油酥面团制成酥皮，经包馅、成形、烘烤而制成的饼皮分层次的制品</p>
    </div>
  </div>
</template>
<style>
.crisp-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.crisp-container .card-gap {
  width: 1px;
  height: 150px;
  background-color: #bbb;
}
.crisp-container .crisp-box {
  width: 17%;
  height: 300px;
  margin: 30px 10px;
  /* border: 1px solid #333; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}

.crisp-container .crisp-box:hover {
  transform: translate(0, -10px);
}
.crisp-container .crisp-box img {
  width: 100%;
  height: 50%;
  padding: 10px;
}
.crisp-container .crisp-box p {
  padding: 10px;
  color: #555;
}
.crisp-container .crisp-box h2 {
  color: #444;
}
</style>
