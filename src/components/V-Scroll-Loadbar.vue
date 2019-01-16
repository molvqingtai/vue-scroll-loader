<template lang="html">
    <div class="v-scroll-loadbar">
        <div class="three-dots">
            <div class="dot-floating"></div>
        </div>
    </div>

</template>

<script>
export default {
  name: 'VScrollLoadbar',
  props: {
    'load-more': {
      type: Function,
      required: true
    },
    'load-enable': {
      type: Boolean,
      required: true
    },
    'load-style': {
      type: String
    },
    'load-delay': {
      type: Number,
      default: 10
    }

  },
  methods: {
    infiniteScroll () {
      let isElementInViewport = () => {
        let rect = this.$el.getBoundingClientRect()
        return (rect.top >= 0 && rect.bottom <= window.innerHeight)
      }
      this.loadEnable && isElementInViewport() && this.loadMore()
    }
  },
  mounted () {
    console.log('mounted')
    window.addEventListener('wheel', this.infiniteScroll)
  }

}
</script>

<style lang="scss" scoped>
    @import '~three-dots';
    .v-scroll-loadbar{
        padding: 10px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        .three-dots{
            width: 30%;
            display: flex;
            justify-content: center;
            overflow: hidden;
        }
    }
</style>
