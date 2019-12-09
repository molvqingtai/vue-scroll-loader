# vue-scroll-loader

![](https://img.shields.io/github/license/molvqingtai/vue-scroll-loader.svg) ![](https://img.shields.io/github/size/molvqingtai/vue-scroll-loader/dist/scroll-loader.umd.min.js.svg) ![](https://img.shields.io/npm/dt/vue-scroll-loader.svg) ![](https://img.shields.io/npm/v/vue-scroll-loader.svg)

**[简体中文](https://github.com/molvqingtai/vue-scroll-loader/blob/master/README.zh-CN.md)**

A scroll loading component for vue.js.

**[View demo](https://molvqingtai.github.io/vue-scroll-loader/demo.html)**



## Browsers

Already use [IntersectionObserver polyfill ](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) compatible with mainstream browsers.

| [![铬](https://camo.githubusercontent.com/1ac079682348cdd02c16d7ab11e2b48a522e52d8/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6368726f6d652f6368726f6d655f34387834382e706e67)](https://camo.githubusercontent.com/1ac079682348cdd02c16d7ab11e2b48a522e52d8/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6368726f6d652f6368726f6d655f34387834382e706e67) ✔ | [![火狐浏览器](https://camo.githubusercontent.com/a445499e52cc0b13318760f137df851f2b107a55/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f66697265666f782f66697265666f785f34387834382e706e67)](https://camo.githubusercontent.com/a445499e52cc0b13318760f137df851f2b107a55/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f66697265666f782f66697265666f785f34387834382e706e67) ✔ | [![苹果浏览器](https://camo.githubusercontent.com/038a385a39899c0ac57a6164a2610d0fed1c8a70/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f7361666172692f7361666172695f34387834382e706e67)](https://camo.githubusercontent.com/038a385a39899c0ac57a6164a2610d0fed1c8a70/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f7361666172692f7361666172695f34387834382e706e67) 6+ | [![边缘](https://camo.githubusercontent.com/e93b3054e8ac93799aa549bb486ff376c006767a/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f656467652f656467655f34387834382e706e67)](https://camo.githubusercontent.com/e93b3054e8ac93799aa549bb486ff376c006767a/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f656467652f656467655f34387834382e706e67) ✔ | [![IE浏览器](https://camo.githubusercontent.com/9b2ee574b554e82d350f0421a442e88a589d9c2c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67)](https://camo.githubusercontent.com/9b2ee574b554e82d350f0421a442e88a589d9c2c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67) 7+ | [![歌剧](https://camo.githubusercontent.com/1e48b149086724d80576a5944626192406190a85/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6f706572612f6f706572615f34387834382e706e67)](https://camo.githubusercontent.com/1e48b149086724d80576a5944626192406190a85/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6f706572612f6f706572615f34387834382e706e67) ✔ | [![安卓系统](https://camo.githubusercontent.com/fed51100e449dc997ee45fd2fcc401a144a31c4c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f616e64726f69642f616e64726f69645f34387834382e706e67)](https://camo.githubusercontent.com/fed51100e449dc997ee45fd2fcc401a144a31c4c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f616e64726f69642f616e64726f69645f34387834382e706e67) 4.4+ |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |



## Install

**NPM**

```shell
npm install vue-scroll-loader
```

**CDN**

```html
<script src="https://unpkg.com/vue-scroll-loader"></script>
```



## Usage

Put  **`<scroll-loader/>`** below the list, and use **`loader-*`** props to define its options.

When the **scroll-loader** reaches the bottom of the viewport, the method specified by **loader-method** is executed.

```html
<scroll-loader :loader-method="getImageList" :loader-disable="disable">
</scroll-loader>

<!-- Replace the default loading animation with slot -->
<scroll-loader :loader-method="getImageList" :loader-disable="disable">
   <div>Loading...</div>
</scroll-loader>
```

```javascript
import Vue from 'vue'
import ScrollLoader from 'vue-scroll-loader'

Vue.use(ScrollLoader)

new Vue({
    el: '#app',
    data() {
      return {
        disable: false,
        page: 1,
        pageSize: 30,
        images: [],
      }
    },
    methods: {
      getImageList() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              pageSize: this.pageSize,
            }
          })
          .then(res => {
               this.images = [...this.images, ...res.data]

            // Stop scroll loading...
            this.disable = res.data.length < this.pageSize
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  })
```



## Options

| Props           | Description                                                                                                                | **Required** | Type     | Default  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- | -------- |
| loader-method   | Scrolling to the bottom to execute the method.                                                                             | true         | Function | --       |
| loader-disable  | scroll-loader will be disabled if the value of this props is true.                                                         | false        | Boolean  | false    |
| loader-distance | The minimum distance between the scroll-loader and the bottom of the viewport before the loader-method method is executed. | false        | Number   | 0        |
| loader-color    | scroll-loader the color of the animation.                                                                                  | false        | String   | \#CCCCCC |
| loader-size     | scroll-loader the size of the animation.                                                                                   | false        | Number   | 50       |
| loader-viewport | relative viewport element,default top-level document viewport.                                                             | false        | Element  | viewport |



## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/molvqingtai/vue-scroll-loader/blob/master/LICENSE) file for details



## Acknowledgments

The default loading animation is from [CSSFX](https://github.com/jolaleye/cssfx)