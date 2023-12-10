<template>
  <div class="main-header-wrapper">
    <router-link to="/"><i class="fa-solid fa-house header-icon"></i><p class="arrow_box">Home</p></router-link>
    <router-link to="/about-me"><i class="fa-regular fa-user header-icon"></i></router-link>
    <router-link to="/portfolio"><i class="fa-regular fa-file-lines header-icon"></i></router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.main-header-wrapper{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 50px);
    padding: 25px 0;
}

.main-header-wrapper .fa-regular, .fa-solid, .fa-brands{
    font-size: 30px;
    color:rgb(190, 190, 190);
}

.header-icon:hover{
    transition: all 0.3s ease-in-out;
    color:#FCA072;
}

.main-header-wrapper p{
   display:none;
}

</style>