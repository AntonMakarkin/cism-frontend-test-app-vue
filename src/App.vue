<template>
  <MainPage/>
</template>

<script>
import MainPage from './Pages/MainPage.vue'
export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Montserrat', sans-serif;
    background: #E8E8E8;
    height: 100%;
  }
  body {
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 58px;
    /*display: flex;
    flex-flow: column;*/
  }

  #app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
