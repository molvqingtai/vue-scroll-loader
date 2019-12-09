# vue-scroll-loader

![](https://img.shields.io/github/license/molvqingtai/vue-scroll-loader.svg) ![](https://img.shields.io/github/size/molvqingtai/vue-scroll-loader/dist/scroll-loader.umd.min.js.svg) ![](https://img.shields.io/npm/dt/vue-scroll-loader.svg) ![](https://img.shields.io/npm/v/vue-scroll-loader.svg)

[**English**](https://github.com/molvqingtai/vue-scroll-loader)

一个基于 vue.js 的滚动加载组件

**[查看演示](https://molvqingtai.github.io/vue-scroll-loader/demo.html)**



## 浏览器

已使用 [IntersectionObserver polyfill ](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) 兼容主流浏览器。

| [![铬](https://camo.githubusercontent.com/1ac079682348cdd02c16d7ab11e2b48a522e52d8/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6368726f6d652f6368726f6d655f34387834382e706e67)](https://camo.githubusercontent.com/1ac079682348cdd02c16d7ab11e2b48a522e52d8/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6368726f6d652f6368726f6d655f34387834382e706e67) ✔ | [![火狐浏览器](https://camo.githubusercontent.com/a445499e52cc0b13318760f137df851f2b107a55/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f66697265666f782f66697265666f785f34387834382e706e67)](https://camo.githubusercontent.com/a445499e52cc0b13318760f137df851f2b107a55/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f66697265666f782f66697265666f785f34387834382e706e67) ✔ | [![苹果浏览器](https://camo.githubusercontent.com/038a385a39899c0ac57a6164a2610d0fed1c8a70/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f7361666172692f7361666172695f34387834382e706e67)](https://camo.githubusercontent.com/038a385a39899c0ac57a6164a2610d0fed1c8a70/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f7361666172692f7361666172695f34387834382e706e67) 6+ | [![边缘](https://camo.githubusercontent.com/e93b3054e8ac93799aa549bb486ff376c006767a/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f656467652f656467655f34387834382e706e67)](https://camo.githubusercontent.com/e93b3054e8ac93799aa549bb486ff376c006767a/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f656467652f656467655f34387834382e706e67) ✔ | [![IE浏览器](https://camo.githubusercontent.com/9b2ee574b554e82d350f0421a442e88a589d9c2c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67)](https://camo.githubusercontent.com/9b2ee574b554e82d350f0421a442e88a589d9c2c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f372d382f696e7465726e65742d6578706c6f7265725f372d385f34387834382e706e67) 7+ | [![歌剧](https://camo.githubusercontent.com/1e48b149086724d80576a5944626192406190a85/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6f706572612f6f706572615f34387834382e706e67)](https://camo.githubusercontent.com/1e48b149086724d80576a5944626192406190a85/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f6f706572612f6f706572615f34387834382e706e67) ✔ | [![安卓系统](https://camo.githubusercontent.com/fed51100e449dc997ee45fd2fcc401a144a31c4c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f616e64726f69642f616e64726f69645f34387834382e706e67)](https://camo.githubusercontent.com/fed51100e449dc997ee45fd2fcc401a144a31c4c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f33392e322e322f7372632f616e64726f69642f616e64726f69645f34387834382e706e67) 4.4+ |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |



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


将 **`<scroll-loader/>`** 放在列表下面，并使用 **`loader-*`**  props 定义选项。

当 **scroll-loader **到达视口的底部时，将执行 **loader-method** 指定的**方法**。

```html
<scroll-loader :loader-method="getImageList" :loader-disable="disable">
</scroll-loader>

<!-- 用 Solt 替换默认的加载动画 -->
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

            // 停止滚动加载...
          	this.disable = res.data.length < this.pageSize
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  })
```



## 选项

| Props           | Description                                                  | **Required** | Type     | Default  |
| --------------- | ------------------------------------------------------------ | ------------ | -------- | -------- |
| loader-method   | 滚动到视口底部，当 scroll-loader 可见会执行该方法            | true         | Function | --       |
| loader-disable  | 如果此 props 的值为 true，则将禁用 scroll-loader             | false        | Boolean  | false    |
| loader-distance | 执行 loader-method 方法之前，scroll-loader 与视口底部之间的最小距离 | false        | Number   | 0        |
| loader-color    | Scroll-loader 加载动画的颜色                                 | false        | String   | \#CCCCCC |
| loader-size     | Scroll-loader 加载动画的大小                                 | false        | Number   | 50       |
| loader-viewport | Scroll-loader 相对的视口元素，默认顶级文档视口               | false        | Element  | viewport |




## 执照

该项目根据MIT许可证授权 - 有关详细信息，请参阅 [LICENSE](https://github.com/molvqingtai/vue-scroll-loader/blob/master/LICENSE) 文件



## 致谢

默认加载动画来自 [CSSFX](https://github.com/jolaleye/cssfx)

