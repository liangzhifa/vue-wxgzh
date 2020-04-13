module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: "https://www.layui.com/demo/",//这个是你要访问得接口地址
                changeOrigin: true,
                pathRewrite: {//重写地址  比如说 你的接口地址是'http://10.10.1.10/system/getUserInfo ' 你请求得时候地址只需要写'/test/getUserInfo'
                    '/api': '/'
                }
            }
        }
    }
}