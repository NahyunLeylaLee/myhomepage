<template>
  <div class="homepage-wrapper">
    <div class="home-desktop">
      <h1 class="homepage-content">Hello, <br/>I'm Nahyun Lee</h1>
    </div>
    <div class="home-mobile">
      <SideBar/>
    </div>
  </div>
</template>

<script>
import SideBar from '../components/SideBar.vue';
export default {
  components: {
    SideBar,
  }
}
</script>

<style>
@media screen and (max-width: 1359px) {
  .home-desktop{
    display:none;
  }
}

@media screen and (min-width: 1360px){
  .home-mobile{
    display:none;
  }
}

.homepage-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.homepage-content{
  font-size: 50px;
}
</style>