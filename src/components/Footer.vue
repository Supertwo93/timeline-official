<template>
	<div>
		<div class="footer com_title_style" id="footer">
			<div class="container">
				<h3 class="wow animated fadeIn">联系我们</h3>
				<h6 class="wow animated fadeIn"><span></span>Contact us</h6>
				<p class="wow animated fadeIn">有什么疑惑的吗？有什么想要咨询的吗？有什么需要帮助吗？有什么想对我们公司说的吗？
有什么想要反馈的建议吗？都欢迎留下联系方式，或主动咨询我们哦。</p>
				<form class="wow animated fadeIn" action="#">
					<div>
						<input type="text" placeholder="Your Name">
						<input type="text" placeholder="Your E-mail">
					</div>
					<textarea name="" id="" placeholder="说说你的需求" cols="30" rows="10"></textarea>
					<input type="submit" class="submit_btn" value="确认发送">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.footer{
		background: #16171D;
		.container{
			padding: 60PX 0;
			box-sizing: border-box;	
			p{
				width: 648PX;
				margin: 0 auto;
				font-weight:400;
				color:rgba(220,220,220,1);
				margin-bottom: 40PX;
				font-size: 16PX;
				text-align: center;
				line-height:26PX;
			}
			form{
				display: block;
				overflow: hidden;
				width:850PX;
				margin: 0 auto;
				div{
					display: flex;
					justify-content: space-between;
					align-items: center;
					input{
						border: 0;
						outline: none;
						width:410PX;
						background:rgba(56,57,62,1);
						padding: 10PX 20PX;
						font-size: 20PX;
						box-sizing: border-box;
						color: #C8C8C8;
						caret-color:#fff;
						&::-webkit-input-placeholder { /* WebKit browsers */
						  color: #fff;
						}
			
						&::-moz-placeholder { /* Mozilla Firefox 19+ */
						  color: #fff;
						}
			
						&:-ms-input-placeholder { /* Internet Explorer 10+ */
						  color: #fff;
						}   
					}
				}
				textarea{
					padding: 10PX 20PX;
					box-sizing: border-box;
					border: 0;
					outline: none;
					resize: none;
					width:850PX;
					height:204PX;
					background:rgba(56,57,62,1);
					margin-top: 15PX;
					color: #C8C8C8;
					font-size: 20PX;
					&::-webkit-input-placeholder { /* WebKit browsers */
					  color: #fff;
					}
			
					&::-moz-placeholder { /* Mozilla Firefox 19+ */
					  color: #fff;
					}
			
					&:-ms-input-placeholder { /* Internet Explorer 10+ */
					  color: #fff;
					}  
				}
				.submit_btn{
					display: block;
					margin: 20PX auto 0;
					border: 0;
					outline: none;
					width:240PX;
					height: 44PX;
					padding: 5PX 0;
					font-size: 20PX;
					background:rgba(0,108,255,1);
					color:rgba(255,255,255,1);
				}
			}
		}
	}
	
	@media (max-width: 1200PX) {
		.footer .container{
			padding: 40px 30px !important;
		}
	}
	
	@media (min-width: 768PX) and (max-width: 992PX) {
		
	}
	
	@media (max-width: 992PX) {
		.footer{
			.container{
				p{
					display: none;
					line-height:34px;
				}
				form{
					width: 100%;
					div{
						flex-wrap: wrap;
						input{
							width: 100%;
							// height: 30PX;
							margin-bottom: 20px;
							font-size: 26px;
							padding: 10px 20px;
						}
					}
					textarea{
						display: block;
						width: 100%;
						height: 200px;
						margin: 0 0 30px;
						font-size: 26px;
						padding: 10px 20px;
					}
					.submit_btn{
						width: 100%;
						height: 70px;
						font-size: 26px;
						padding: 5px 0;
						margin: 20px auto 0;
					}
				}
			}
		}
	}
</style>
