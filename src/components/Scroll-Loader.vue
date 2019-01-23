<template lang="html">
    <div class="scroll-loader" v-if="loaderEnable">
        <slot>
          <div class="three-dots">
            <div class="dot-floating" :style="color"></div>
          </div>
        </slot>
    </div>
</template>
<script>
export default {
  name: 'ScrollLoader',
  data () {
    return {
      closure: null
    }
  },
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
      default: 100
    },
    'loader-distance': {
      type: Number,
      default: 0
    },
    'loader-color': {
      type: String,
      default: '#96C8FF'
    }
  },
  computed: {
    color () {
      return {
        'background-color': this.loaderColor
      }
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
    window.addEventListener('wheel', this.scrollLoader())
  },
  activated () {
    !this.closure && window.addEventListener('wheel', this.scrollLoader())
  },
  deactivated () {
    window.removeEventListener('wheel', this.closure)
    this.closure = null
  }
}
</script>

<style lang="scss" scoped>
.scroll-loader {
    display: flex;
    padding: 30px 0;
    align-items: center;
    justify-content: center;
    .three-dots {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        .dot-floating {
            position: relative;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #9880ff;
            animation: dotFloating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
            &::after,
            &::before {
                content: '';
                display: inline-block;
                position: absolute;
                top: 0;
                width: inherit;
                height: inherit;
                background-color: inherit;
                border-radius: inherit;
            }

            &::before {
                left: -12px;
                animation: dotFloatingBefore 3s infinite ease-in-out;
            }
            &::after {
                left: -24px;
                animation: dotFloatingAfter 3s infinite cubic-bezier(0.4, 0, 1, 1);
            }
        }
    }
}

@keyframes dotFloating {
    0% {
        left: calc(-50% - 5px);
    }
    75% {
        left: calc(50% + 105px);
    }
    100% {
        left: calc(50% + 105px);
    }
}

@keyframes dotFloatingBefore {
    0% {
        left: -50px;
    }
    50% {
        left: -12px;
    }
    75% {
        left: -50px;
    }
    100% {
        left: -50px;
    }
}

@keyframes dotFloatingAfter {
    0% {
        left: -100px;
    }
    50% {
        left: -24px;
    }
    75% {
        left: -100px;
    }
    100% {
        left: -100px;
    }
}
</style>
