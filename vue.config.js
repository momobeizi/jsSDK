


module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  assetsDir: "static",
  parallel: false,
  publicPath: "./",
  runtimeCompiler: true,
  devServer: {
    host: "localhost",
    port: "8888",
    open: true,
    hot: true,
    proxy: {
      "/base": {
        //企业门户
        target: "http://192.168.100.120:1048/webgate",
        changeOrigin: true,
        pathRewrite: {
          "^/base": "/"
        }
      },
      "/webgate": {
        target: "http://192.168.100.120:1048/webgate",
        changeOrigin: true,
        pathRewrite: {
          "^/webgate": "/"
        }
      }
    }
  },
  configureWebpack: {
    output: {
      libraryExport: "default"
    }
  },
  css: { extract: true }
};
