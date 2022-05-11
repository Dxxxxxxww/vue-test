module.exports = {
  lintOnSave: false,
  runtimeCompiler: true, // 带编译版本
  devServer: {
    
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  }
}
