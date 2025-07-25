<template>
  <div class="portfolio-wrapper">
    <div class="portfolio-container">
      <div class="page-title">
        <h2 class="font-32">Portfolio</h2>
      </div>
      <div class="portfolio-list">
        <router-link :to="`/portfolio/${i}`" class="sub-color" v-for="(portfolio,i) in data" :key="i">
          <div class="portfolio-item">
            <span style="font-size: 10px">●</span>
            <span class="portfolio-title">{{portfolio.title}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/portfolio';

export default {
  data() {
    return {
      data: data,
    }
  }
}
</script>

<style>

@media screen and (max-width: 324px) {
  .portfolio-list{
    margin: 20px;
  }

  .portfolio-title{
    font-size: 15px !important;
  }
}

@media screen and (min-width:325px) and (max-width: 1339px) {
  /**mobile */
  .portfolio-list{
    margin: 20px;
  }

}

@media screen and (min-width: 1340px) {
  .portfolio-wrapper{
    width: 100%;
    height: auto;
    position: relative;
  }

  .portfolio-item:hover{
    background-color: #F9ECDB;
    color: #8B4513;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(90, 62, 43, 0.12);
  }
} 

.portfolio-list span{
    margin: 0 10px;
    font-size:20px;
}

.portfolio-list i{
  font-size: 15px;
}

.portfolio-item{
  width: 100%;
  height: 50px;
  margin:30px 0;
  display: flex;
  align-items: center;
}
</style>