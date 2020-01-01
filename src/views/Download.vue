<template>
	<div>
		<div class="download-box">
			<div class="container">
				<img class="need-image" src="../assets/image/yourneed.png"></img>
				<div class="bottom">
					<img class="download-image" src="../assets/image/download.png"></img>
					<div class="download-content">
						<img src="../assets/image/downloadcode.png" class="code-image" />
						<div class="tips">手机扫描二维码下载</div>
						<div class="android-download">免费下载</div>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.download-box{
		padding: 138PX 0 169PX 0;
		background-color: #50A1EC;
		.need-image{
			margin-left: 167PX;
			width:865PX;
			height:66PX;
		}
		.bottom{
			display: flex;
			margin-top: 115PX;
		}
		.download-image{
			
			width:732PX;
			height:482PX;
		}
		.download-content{
			padding:60PX 55PX 0 55PX;
			margin-left: 148PX;
			background-color: #fff;
			width:320PX;
			height:482PX;
			.code-image{
				width:210PX;
				height:210PX;
			}
			.tips{
				text-align: center;
				font-size:18px;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(80,80,80,1);
				line-height:36px;
				margin-top: 30PX;
			}
			.android-download{
				margin-top: 29PX;
				text-align: center;
				height:60px;
				background:rgba(0,108,255,1);
				font-size:20px;
				font-family:Microsoft YaHei;
				font-weight:400;
				color:rgba(255,255,255,1);
				line-height:60px;
			}
			// .ios{
			// 	margin-top: 30px;
			// 	height:44px;
			// 	text-align: center;
			// 	border:1px solid rgba(0,108,255,1);
			// 	font-size:20px;
			// 	font-family:Microsoft YaHei;
			// 	font-weight:400;
			// 	color:rgba(0,108,255,1);
			// 	line-height:44px;
			// }
		}
	}
</style>
