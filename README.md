# vue-scroll-loader

![](https://img.shields.io/github/license/molvqingtai/vue-scroll-loader.svg) ![](https://img.shields.io/github/size/molvqingtai/vue-scroll-loader/dist/scroll-loader.umd.min.js.svg) ![](https://img.shields.io/npm/dt/vue-scroll-loader.svg) ![](https://img.shields.io/npm/v/vue-scroll-loader.svg)

**[简体中文](https://github.com/molvqingtai/vue-scroll-loader/blob/master/README.zh-CN.md)**

A scroll loading component for vue.js.



**[View demo](https://molvqingtai.github.io/vue-scroll-loader/demo.html)**



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

Use **`<scroll-loader/>`** to disable the scroll load, and use **`loader-*`** props to define its options.

When the **scroll-loader** reaches the bottom of the viewport, the method specified by **loader-method** is executed.

```html
<scroll-loader :loader-method="getImagesList" :loader-disable="disable">
</scroll-loader>

<!-- Replace the default loading animation with slot -->
<scroll-loader :loader-method="getImagesList" :loader-disable="disable">
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
      getImagesList() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              per_page: this.pageSize,
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

| Props           | Description                                                  | **Required** | Type     | Default  |
| --------------- | ------------------------------------------------------------ | ------------ | -------- | -------- |
| loader-method   | Scrolling to the bottom to execute the method.               | true         | Function | --       |
| loader-disable  | Scroll-loader will be disabled if the value of this props is true. | false        | Boolean  | false    |
| loader-distance | The minimum distance between the scroll-loader and the bottom of the viewport before the loader-method method is executed. | false        | Number   | 0        |
| loader-color    | scroll-loader the color of the animation.                    | false        | String   | #666666  |
| loader-size     | scroll-loader the size of the animation.                     | false        | Number   | 50       |
| loader-viewport | scroll-loader relative viewport element,default top-level document viewport. | false        | Element  | viewport |




## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/molvqingtai/vue-scroll-loader/blob/master/LICENSE) file for details
