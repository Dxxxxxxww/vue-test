<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <TestUpload /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import TestUpload from './components/upload/upload.vue'
const isServer = false

const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()
// App.vue 组件 通过 vue-loader 创建的 render，挂载到 options.prototype.render
// var render = function() {
//   var _vm = this
//   var _h = _vm.$createElement
//   var _c = _vm._self._c || _h
//   return _c(
//     "div",
//     { attrs: { id: "app" } },
//     [
//        // 因为函数调用，参数的 _c 会先执行，所以 children 的 vnode 会比父级 先创建，
//        // 所以当父级在 _c 中创建 vnode 时，children 里面都已经是 vnode 了
//       _c("img", {
//         attrs: { alt: "Vue logo", src: require("./assets/logo.png") }
//       }),
//       _c("HelloWorld", { attrs: { msg: "Welcome to Your Vue.js App" } }),
//       _c("TestUpload")
//     ],
//     1
//   )
// }
// var staticRenderFns = []
// render._withStripped = true

// export { render, staticRenderFns }

export default {
  name: 'App',
  components: {
    HelloWorld
    // TestUpload
  },
  mounted() {
    on(window, 'resize', this.handleResize)
  },
  methods: {
    handleResize() {}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
