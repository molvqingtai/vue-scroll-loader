<template>
<div id="app">
  <h1 class="title-text">Vue-Scroll-Loader</h1>
  <div class="images-container">
    <div class="images-item animated fadeIn slideInUp" v-for="image of images" :key="image.id">
      <div class="images-card">
        <img class="images-card__image" :src="image.urls.thumb" alt="">
      </div>
    </div>
  </div>
  <div class="copyright-container" v-if="!loadMore">
    <a class="copyright-container__link" href="#">
      <p class="copyright-container__text">By molvqingtai</p>
      <img class="copyright-container__icon" src="./assets/github.png">
    </a>
  </div>
  <!-- <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore" loader-color="rgba(102,102,102,.5)"></scroll-loader> -->
</div>
</template>

<script>
// import ScrollLoader from './vue-scroll-loader.umd'

export default {
  name: 'app',
  // components: {
  //   ScrollLoader
  // }
}
</script>

<style lang="css" scoped>
@import './assets/style.css';
</style>
