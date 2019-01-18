<template lang="html">
    <div class="v-scroll-loader">
      <div class="three-dots-container">
        <div class="three-dots">
          <div :class="[dots]" :style="style"></div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'VScrollLoader',
  props: {
    'loader-method': {
      type: Function,
      required: true
    },
    'loader-enable': {
      type: Boolean,
      required: true
    },
    'loader-delay': {
      type: Number,
      default: 10
    },
    'loader-option': {
      type: Object,
      default: () => {
        return {
          dots: 'dot-spin'
        }
      }
    }
  },
  computed: {
    dots () {
      return this.loaderOption.dots
    },
    style () {
      return {
        '--size': this.loaderOption.size,
        '--color': this.loaderOption.color
      }
    }
  },
  methods: {
    infiniteScroll () {
      let isElementInViewport = () => {
        let rect = this.$el.getBoundingClientRect()
        return (rect.top >= 0 && rect.bottom <= window.innerHeight)
      }
      this.loaderEnable && isElementInViewport() && this.loaderMethod()
    }
  },
  mounted () {
    window.addEventListener('wheel', this.infiniteScroll)
  }
}
</script>

<style lang="scss" scoped>
@import './three-dots.variables.css';
.v-scroll-loader {
    display: flex;
    align-items: center;
    justify-content: center;
    .three-dots-container{
      width: 30%;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }
}
</style>
