<template>
<div id="app">
  <h1 class="title-text">Vue-Scroll-Loader</h1>
  <div class="images-container">
    <div class="images-item animated fadeIn" v-for="(image,index) of images" :key="index">
      <div class="images-card">
        <img class="images-card__image" :src="image.urls.small" @load="masksHide.push(index)">
        <div class="images-card__mask" :style="{'background-color':image.color}" v-if="!masksHide.includes(index)"></div>
      </div>
    </div>
  </div>
  <div class="copyright-container" v-if="!loadMore">
    <a class="copyright-container__link" href="#">
      <p class="copyright-container__text">By molvqingtai</p>
      <img class="copyright-container__icon" src="./assets/github.png">
    </a>
  </div>

  <scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore" loader-color="rgba(102,102,102,.5)">
  </scroll-loader>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      loadMore: true,
      page: 1,
      pageSize: 9,
      images: [],
      masksHide: []
    }
  },
  methods: {
    getImagesInfo () {
      this.$axios.get('https://api.unsplash.com/photos', {
        params: {
          page: this.page++,
          per_page: this.pageSize,
          client_id: 'e874834b096dcd107c232fe4b0bb521158b62e486580c988b0a75cb0b77a2abe'
        }
      })
        .then(res => {
          res.data && res.data.length && (this.images = this.images.concat(res.data))
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  watch: {
    page (n) {
      n > 30 && (this.loadMore = false)
    }
  },
  mounted () {
    this.getImagesInfo()
  }
}
</script>

<style lang="css" scoped>
@import '~animate.css';
@import './assets/style.css';
</style>
