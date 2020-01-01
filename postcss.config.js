module.exports = {
  plugins: {
    autoprefixer: {},
	// 'postcss-px2rem': {
	//   remUnit: 75
	// },
	"postcss-pxtorem": {
		"rootValue": 75 // 设计稿宽度的1/10,
		// "propList":['*'],// 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
	 }
  }
}
