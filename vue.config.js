module.exports = {
  // 配置路径
  publicPath:'./',
    devServer: {
        // 端口号
        port: '8888',
        // 运行完成是否打开浏览器
        open: false,
        // 设置是否开启https协议
        https: false,
        // 域名
        host: 'localhost',
        //配置代理跨域
        proxy: {
             // 代理
            [process.env.VUE_APP_BASE_API]: { 
              // 要代理的接口地址
              target: process.env.VUE_APP_SERVICE_URL, 
              // 是否启用websockets 
              ws: true, 
              //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
              changOrigin: true, 
              // 重写路径
              pathRewrite: {
                ["^"+process.env.VUE_APP_BASE_API]: ""
              }
            }
          }
    },
    // 关闭eslint
    lintOnSave: false,
    // 打包时不生产.map文件 加快打包速度
    productionSourceMap: false,

};