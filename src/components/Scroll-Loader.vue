<template lang="html">
  <div class="loader" v-show="!loaderDisable">
    <slot>
      <svg viewBox="25 25 50 50" class="loader__svg" :style="size">
        <circle cx="50" cy="50" r="20" class="loader__circle" :style="color"></circle>
      </svg>
    </slot>
  </div>
</template>

<script>
import 'intersection-observer'
export default {
  name: 'ScrollLoader',
  props: {
    'loader-method': {
      type: Function,
      required: true
    },
    'loader-disable': {
      type: Boolean,
      default: false
    },
    'loader-distance': {
      type: Number,
      default: 0
    },
    'loader-color': {
      type: String,
      default: '#CCCCCC'
    },
    'loader-size': {
      type: Number,
      default: 50
    },
    'loader-viewport': {
      type: Element,
      default: null
    }
  },
  computed: {
    size () {
      return {
        width: `${this.loaderSize}px`
      }
    },
    color () {
      return {
        stroke: this.loaderColor
      }
    },
    options () {
      return {
        root: this.loaderViewport,
        rootMargin: `0px 0px ${this.loaderDistance}px 0px`
      }
    },
    observer () {
      return new IntersectionObserver(([{ isIntersecting }]) => {
        isIntersecting && !this.loaderDisable && this.loaderMethod()
      }, this.options)
    }
  },
  mounted () {
    this.observer.observe(this.$el)
  },
  activated () {
    this.observer.observe(this.$el)
  },
  deactivated () {
    this.observer.unobserve(this.$el)
  },
  beforeDestroy () {
    this.observer.unobserve(this.$el)
  }
}
</script>

<style lang="scss" scoped>
.loader{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  &__svg {
    transform-origin: center;
    animation: rotate 2s linear infinite;
  }
  &__circle {
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
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
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
