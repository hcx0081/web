const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  /* 开启代理服务器 */
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  devServer: {
    proxy: {
      // 代理所有以/api开头的请求
      '/api': {
        target: 'http://localhost:5000',
        // 路径重写
        pathRewrite: {
          '^/api': ''
        }
        // 用于支持websocket
        // ws: true,
        // 用于控制请求的host头字段
        // changeOrigin: true
      }
    }
  }
});
