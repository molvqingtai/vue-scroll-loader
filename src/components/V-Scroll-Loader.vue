<template lang="html">
    <div class="v-scroll-loader">
      <div class="">
        <div class="three-dots" :class="[type]" :style="style"></div>
      </div>
    </div>
</template>
<script>
import balls from './balls.js'
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
    'loader-style': {
      type: Object,
      default:{
        type:'dot-spin'
      }
    },
  },
  computed: {
    type() {
      return this.loaderStyle.type
    },
    style() {
      return {
        'width': this.loaderStyle.size,
        'height': this.loaderStyle.size,
        'background-color': this.loaderStyle.color
      }
    }
  },
  methods: {
    infiniteScroll() {
      let isElementInViewport = () => {
        let rect = this.$el.getBoundingClientRect()
        return (rect.top >= 0 && rect.bottom <= window.innerHeight)
      }
      this.loaderEnable && isElementInViewport() && this.loaderMethod()
    }
  },
  mounted() {
    window.addEventListener('wheel', this.infiniteScroll)
  }
}
</script>

<style lang="scss" scoped>
@import '~three-dots';
.v-scroll-loader {
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .three-dots {
        border-radius: 50% !important;
        &::after,
        &::before {
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background-color: inherit;
        }
    }
}
</style>
