<template>
  <div class="main-container">
    <div class="nav-mobile">
      <span>Nahyun Lee</span>
      <i class="fa-solid fa-bars" @click="toggleSidebar"></i>
    </div>
    <div class="content-wrapper">
      <div class="main-sidebar">
        <SideBar/>
      </div>
      <div class="main-body">
        <router-view></router-view>
      </div>
    </div>
    <div class="nav">
        <MainHeader/>
    </div>
  </div>
  <div name="fade">
    <div class="mobile-header-container" :class="{showSidebar: modal}">
      <div>
        <i class="fa-solid fa-xmark" @click="toggleSidebar"></i>
      </div>
      <div class="mobile-header">
        <ul >
          <router-link to="/" @click="toggleSidebar"><li>Home</li></router-link>
          <router-link to="/about-me" @click="toggleSidebar"><li>About me</li></router-link>
          <router-link to="/portfolio" @click="toggleSidebar"><li>Portfolio</li></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import SideBar from '../components/SideBar.vue';
export default {
  data() {
    return {
      modal: false,
      showSidebar: false,
    }
  },
  methods: {
    toggleSidebar() {
      this.modal = !this.modal;
    }
  },
  components: {
    MainHeader,
    SideBar,
  }
}
</script>

<style>
@media screen and (max-width: 1359px) {
  .nav{
    display:none;
  }

  .main-sidebar{
    display: none;
  }

  .nav-mobile {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size:30px;
    margin-bottom:30px;
    color: #555;
  }

  .content-wrapper{
    width:100%;
    height:100%;
  }

  .main-container{
    display:flex;
    flex-direction: column;
    height: calc(100% - 60px);
    width: calc(100%- 60px);
    padding: 30px;
  }

  .main-body{
    width: 100%;
    height: 100%;
    background-color:white;
    border-radius: 30px;
    overflow-y:scroll;
    text-align: center;
  }

  .mobile-header-container{
    display:flex; 
    flex-direction: column;
    width: 40%;
    height: 100%;
    background-color: #F9ECDB;
    position: fixed;
    top: 0;
    right: -40%;
    transition: all 1s;
  }

  .mobile-header-container li{
    list-style: none;
  }

  .mobile-header{
    text-align: center; 
    line-height: 50px; 
    font-size: 20px; 
    color: #555;
  }

  .mobile-header a{
    color: #555;
  }

  .fa-xmark{
    float:right; 
    margin: 30px;
    font-size:40px;
  }

  .showSidebar{
    transform: translateX(-100%);
    box-shadow: 0 0 10px lightgrey;
  }
}

@media screen and (min-width: 1360px) and (max-width:1749px) {
  .nav-mobile, .mobile-header-container{
    display: none;
  }


  .content-wrapper{
    display:flex;
    width:68%;
    height:100%;
    border-radius: 30px;
    background-color: #fca072;
  }

  .main-container{
    display:flex;
    justify-content: center;
    width:100%;
    height:calc(100% - 180px);
    padding: 90px 0;
  }

  .main-sidebar{
    width: 400px;
    height: 100%;
    position: relative;
  }

  .main-body{
    width: 100%;
    height: calc(100% - 120px);
    background-color:white;
    border-radius: 30px;
    float:right;
    padding: 60px;
    overflow-y:auto;
  }

  .nav{
    width:60px;
    height:200px;
    margin-left:20px;
    background-color: white;
    border-radius: 30px;
  }

  .profile-image{
    width:200px;
    height:200px;
    margin:80px 96px;
    border-radius: 500px;
    border: 3px solid white;
  }
}

@media screen and (min-width: 1750px) {
  .nav-mobile, .mobile-header-container{
    display: none;
  }

  .content-wrapper{
    display:flex;
    width:68%;
    height:100%;
    border-radius: 30px;
    background-color: #fca072;
  }

  .main-container{
    display:flex;
    justify-content: center;
    width:100%;
    height:calc(100% - 180px);
    padding: 90px 0;
  }

  .main-sidebar{
    width: 400px;
    height: 100%;
    position: relative;
  }

  .main-body{
    width: 100%;
    height: calc(100% - 120px);
    background-color:white;
    border-radius: 30px;
    float:right;
    padding: 60px;
    overflow-y:auto;
  }

  .nav{
    width:60px;
    height:200px;
    margin-left:20px;
    background-color: white;
    border-radius: 30px;
  }

  .profile-image{
    width:200px;
    height:200px;
    margin:80px 96px;
    border-radius: 500px;
    border: 3px solid white;
  }
}

::-webkit-scrollbar {
    display: none;
  }
</style>