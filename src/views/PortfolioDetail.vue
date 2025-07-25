<template>
  <div class="detail-wrapper">
    <div class="portfolio-page-title">
      <router-link to="/portfolio">
        <img :src="require(`../assets/img/previous.png`)" :alt="go_back" class="go-back"/>
      </router-link>
      <h2 class="font-32 profile-detail-title">{{data[this.$route.params.id].title}}</h2>
    </div>
    <div class="portfolio-photo">
      <img :src="require(`../assets/img/${this.$route.params.id}.jpg`)" :alt="data[this.$route.params.id].title" class="portfolio-image" />
    </div>
    <div class="info-list portfolio-detail">
      <ul class="sub-color">
        <li>
          <h3 class="title main-color">Summary</h3>
          <span class="value">{{data[this.$route.params.id].summary}}</span>
        </li>
        <li>
          <h3 class="title main-color">Skills</h3>
          <span class="value">{{data[this.$route.params.id].skills}}</span>
        </li>
        <li>
          <h3 class="title main-color">Team</h3>
          <span class="value">{{data[this.$route.params.id].team}}</span>
        </li>
        <li>
          <h3 class="title main-color">url/youtube</h3>
          <div v-if="data[this.$route.params.id].urlAvail !== 'N'">
            <a :href="`${data[this.$route.params.id].url}`" class="value portfolio-url" target="_blank">
              {{data[this.$route.params.id].url}}
            </a>
          </div>
          <div v-else>
            <span>{{data[this.$route.params.id].url}}</span>
          </div>
        </li>
      </ul>
    </div>
    <router-link to="/portfolio"><button class="main-color-back">GoBack</button></router-link>
  </div>
</template>

<script>
import data from '../assets/portfolio';
export default {
  data() {
    return {
      data: data,
    }
  },
}
</script>

<style>

.detail-wrapper{
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 365px){
  .profile-detail-title{
    width: 100%;
    height: 100%;
  }

  .portfolio-image {
    margin-top: 30px;
    width: 200px;
  }

  .portfolio-detail{
    width: calc(100%-40px);
  }

  .url-icon{
    display: none;
  }

  .portfolio-url{
    word-wrap: break-word;
  }
}


@media screen and (min-width:366px) and (max-width: 600px) {
  /**mobile */
  .portfolio-image {
    margin: 10px;
    width: 200px;
  }

  .portfolio-detail{
    width: calc(100%-40px);
  }

  .url-icon{
    display: none;
  }

  .portfolio-url{
    word-wrap: break-word;
  }

  .portfolio-page-title{
    margin: 10px 0 0 0;
  }
}


@media screen and (min-width: 600px) {
  /**desktop */
  .portfolio-image{
    margin: 20px 0;
    width: 300px;
    height: 100%;
  }
  
  .portfolio-url:hover{
    color: coral;
  }

  .url-icon{
  font-size: 18px;
  margin-left: 5px;
  }

  .portfolio-page-title{
    margin: 10px 0 0 0;
  }
}

.detail-wrapper button{
  margin: 15px 0;
  width:70px;
  border-color: transparent;
  color:white;
  border-radius: 3px;
}

.detail-wrapper button:hover{
  cursor:pointer;
}

a{
  color: #555;
}

.portfolio-photo{
  display: flex;
  justify-content: center;
}

.go-back{
  height:30px;
  width: 30px;
  color: #fca072;
  padding: 5px;
  margin-right: 5px;
  display: flex;
}

.go-back:hover{
  cursor: pointer;
  border-radius: 30px;
  background-color: #F9ECDB;
}

.portfolio-page-title{
  color:#fca072;
  display: flex;
  align-items: center;
}

</style>