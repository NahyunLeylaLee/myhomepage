<template>
  <MainPage/>
</template>

<script>
import MainPage from './views/MainPage.vue';
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

a {
  text-decoration: none;
}

html, body, #app {
  width: 100%;
  height: 100%;
}

body{
  background-color:#F9ECDB;
}

.main-color{
  color: #fca072 !important;
}

.sub-color{
  color: #555 !important;
}

.main-color-back{
  background-color: #fca072 !important;
}

.font-32{
  font-size: 32px !important;
}

.flex-column {
  display: flex !important;
  flex-direction: column !important;
}

.page-title{
  width: 100%;
  height: 69px;
}

a{
  text-decoration: none;
}

@media screen and (max-width: 1359px) {
  .page-title{
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
