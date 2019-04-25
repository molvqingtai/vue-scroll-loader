# vue-scroll-loader

![](https://img.shields.io/github/license/molvqingtai/vue-scroll-loader.svg) ![](https://img.shields.io/github/size/molvqingtai/vue-scroll-loader/dist/scroll-loader.umd.min.js.svg) ![](https://img.shields.io/npm/dt/vue-scroll-loader.svg) ![](https://img.shields.io/npm/v/vue-scroll-loader.svg)

[**English**](https://github.com/molvqingtai/vue-scroll-loader)

一个基于 vue.js 的滚动加载组件



**[查看演示](https://molvqingtai.github.io/vue-scroll-loader/demo.html)**



## 安装

**NPM**

```shell
npm install vue-scroll-loader
```

**CDN**

```html
<script src="https://unpkg.com/vue-scroll-loader"></script>
```



## 使用


使用**`<scroll-loader/>`**启用滚动加载，并使用**loader-***  props定义其选项。

当**scroll-loader**的底部到达视口的底部时，将执行**loader-method**指定的**方法**。

```html
<scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore">
</scroll-loader>

<!-- 用 Solt 替换默认的加载动画 -->
<scroll-loader :loader-method="getImagesInfo" :loader-enable="loadMore">
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
        loadMore: true,
        page: 1,
        pageSize: 9,
        images: [],
      }
    },
    methods: {
      getImagesInfo() {
        axios.get('https://api.example.com/', {
            params: {
              page: this.page++,
              per_page: this.pageSize,
            }
          })
          .then(res => {
            this.images = this.images.concat(res.data)

            // 禁用 scroll-loader
            res.data.length < this.pageSize && (this.loadMore = false)
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
    mounted() {
      this.getImagesInfo()
    }
  })
```



## 选项

| Props           | Description                                                  | **Required** | Type     | Default |
| --------------- | ------------------------------------------------------------ | ------------ | -------- | ------- |
| loader-method   | 滚动到视口底部，当 scroll-loader 可见会执行该方法            | true         | Function | --      |
| loader-enable   | 如果此props的值为false，则将禁用 scroll-loader               | true         | Boolean  | --      |
| loder-throttle  | 检查滚动到底部的频率（ms）                                   | false        | Number   | 100     |
| loader-distance | 执行 :loader-method 方法之前，scroll-loader 底部与视口底部之间的最小距离 | false        | Number   | 0       |
| loader-color    | Scroll-loader 加载动画的颜色                                 | false        | String   | #96C8FF |
| loader-size     | Scroll-loader 加载动画的大小                                 | false        | String   | 35px    |




## 执照

该项目根据MIT许可证授权 - 有关详细信息，请参阅 [LICENSE](https://github.com/molvqingtai/vue-scroll-loader/blob/master/LICENSE) 文件



## 致谢

[Weston Ganger](https://solidfoundationwebdev.com/blog/posts/simple-google-loader-using-svg-and-css)
