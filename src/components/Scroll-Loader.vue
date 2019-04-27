<template lang="html">
    <div class="loader-container" v-if="loaderEnable">
      <slot>
        <div class="loader" :style="{width:loaderSize}">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10" :stroke="loaderColor"/>
          </svg>
        </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'ScrollLoader',
  props: {
    'loader-method': {
      type: Function,
      required: true
    },
    'loader-enable': {
      type: Boolean,
      required: true
    },
    'loader-throttle': {
      type: Number,
      default: 10
    },
    'loader-distance': {
      type: Number,
      default: 0
    },
    'loader-color': {
      type: String,
      default: '#96C8FF'
    },
    'loader-size': {
      type: String,
      default: '35px'
    }

  },
  data () {
    return {
      closure: null
    }
  },
  methods: {
    scrollLoader () {
      let pastTime = null
      this.closure = () => {
        let nowTime = +new Date()
        if (nowTime - pastTime > this.loaderThrottle || !pastTime) {
          this.loaderEnable && this.isLoaderInViewport() && this.loaderMethod()
          pastTime = nowTime
        }
      }
      return this.closure
    },
    isLoaderInViewport () {
      let rect = this.$el.getBoundingClientRect()
      return (rect.top >= 0 && rect.bottom - this.loaderDistance <= window.innerHeight)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollLoader())
  },
  activated () {
    !this.closure && window.addEventListener('scroll', this.scrollLoader())
  },
  deactivated () {
    window.removeEventListener('scroll', this.closure)
    this.closure = null
  }
}
</script>

<style lang="scss" scoped>
// scaling... any units
.loader-container {
    width: 100%;
    padding: 10px 0;
    .loader {
        position: relative;
        margin: 0 auto;
        &:before {
            content: '';
            display: block;
            padding-top: 100%;
        }
        .circular {
            animation: rotate 2s linear infinite;
            height: 100%;
            transform-origin: center center;
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            .path {
                stroke-dasharray: 1, 200;
                stroke-dashoffset: 0;
                animation: dash 1.5s ease-in-out infinite;
                stroke-linecap: round;
            }
        }
    }
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
</style>
