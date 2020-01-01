const webpack = require("webpack");

module.exports = {
	// 基本路径
	publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
	assetsDir: "./",
	// 输出文件目录
	outputDir: 'dist',
//configureWebpack 是Vue CLI3.0 中用于配置 webpack 插件参数的地方，你在这里设置，会新建或者覆盖 webpack 默认配置。
//webpack ProvidePlugin 的含义是创建一个全局的变量，使这个变量在 webpack 各个模块内都可以使用。这里的配置含义是创建 '$'、'jQuery'、'window.jQuery' 三个变量指向 jquery 依赖，创建 'Popper' 变量指向 popper.js 依赖。
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
              })
        ]
      },
	 //  devServer: {
		// open: process.platform === 'darwin',
		// host: '0.0.0.0',
		// port: 8080,
		// https: true,
		// hotOnly: true,
		// // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
		// proxy: null, // string | Object
		// before: app => {}
	 //  },
	  chainWebpack: (config) => {
	           config.module
	           .rule('css')
	           .test(/\.css$/)
	           .oneOf('vue')
	           .resourceQuery(/\?vue/)
	           .use('px2rem')
	           .loader('px2rem-loader')
	           .options({
	               remUnit: 75
	           })
	       },
		   css: {
			   loaderOptions: {
				   postcss: {
					   plugins: [
						   require('postcss-plugin-px2rem')({
							   rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
							   // unitPrecision: 5, //允许REM单位增长到的十进制数字。
							   //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
							   // propBlackList: [], //黑名单
							   exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
							   // selectorBlackList: [], //要忽略并保留为px的选择器
							   // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
							   // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
							   mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
							   minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
						   }),
					   ]
				   }
			   }
		   }
	  // css: {
	  //    loaderOptions: {
	  //     postcss: {
	  //      plugins: [
	  //       require('postcss-px2rem')({
	  //        remUnit: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
	  //       }),
	  //      ]
	  //     }
	  //    }
	  //   }
}