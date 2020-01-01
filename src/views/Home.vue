<template>
  <div class="home">
	<!-- <div class="banner">
		<img src="../assets/image/home/banner.png" alt="" class="pc"> 
		<img src="../assets/image/home/bannersmall.png" alt="" class="mobile">
	</div> -->
	<div class="index_company com_title_style black">
		<div class="container">
			<h3 class="wow animated bounceInLeft">深圳时光轴科技有限公司</h3>
			<h6 class="wow animated bounceInLeft"><span></span>shenzhen time line international co,Ltd</h6>
			<p class="wow animated bounceInLeft">深圳市时光轴科技有限公司成立于2014年,是一家技术开发、技术服务、技术咨询、基础软件开发、应用软件开发、设计制作、代理的科技公司； 本公司在政策的鼓励和科技信息的潮流中,致力于开发社交网络和生活服务类应用APP。</p>
			<a class="wow animated bounceInLeft" href="">查看更多</a>
			<ul class="wow animated bounceInRight">
				<li>
					<div><img src="../assets/image/icon/telephone.svg" alt=""></div>
					<h5>联系电话</h5>
					<p>0755-84865106</p>
				</li>
				<li>
					<div><img src="../assets/image/icon/email.svg" alt=""></div>
					<h5>电子邮件</h5>
					<p>galaxy688@163.com</p>
				</li>
				<li>
					<div><img src="../assets/image/icon/qqcontact.svg" alt=""></div>
					<h5>QQ联系</h5>
					<p>574053957</p>
				</li>
				<li>
					<div><img src="../assets/image/icon/address.svg" alt=""></div>
					<h5>公司地址</h5>
					<p>深圳市龙岗区志联佳大厦508</p>
				</li>
			</ul>
		</div>
	</div>
	<div class="index_environment_box com_title_style black">
		<div class="container">
			<h3 class="wow animated bounceInLeft">公司环境</h3>
			<h6 class="wow animated bounceInLeft"><span></span>Corporate environment</h6>
			<img src="../assets/image/home/group.png" class="pc wow animated bounceInRight" alt="">
			<img src="../assets/image/home/group1.png" class="mobile wow animated bounceInRight" alt="">
		</div>
	</div>
	<div class="index_introduce_box com_title_style black">
		<div class="container">
			<h3 class="wow animated flipInY">公司介绍</h3>
			<h6 class="wow animated flipInY"><span></span>Corporate environment</h6>
			<div class="introduce_item ">
				<img src="../assets/image/home/introducing1.png" class="wow animated bounceInLeft" alt="">
				<div class="intro_left wow animated bounceInRight">
					<span></span>
					<div class="intro_content">
						<h5>我们公司的精神</h5>
						<h4>The Spirit of Our Company</h4>
						<p>我们坚信没有完美的个人，只有优秀的团队。一群人、一件事、一条心、一起拼、一定赢。趁年轻努力拼搏，创造人生价值。将来的你一定会感谢现在奋斗的你！</p>
						<a href="">联系我们</a>
					</div>
				</div>
			</div>
			<div class="introduce_item reverse">
				<img src="../assets/image/home/introducing2.png" class="wow animated bounceInRight" alt="">
				<div class="intro_left wow animated bounceInLeft">
					<span></span>
					<div class="intro_content">
						<h5>时光轴科技公司</h5>
						<h4>Time Axis Technology Company</h4>
						<ul>
							<li>
								<div class="l_icon"><img src="../assets/image/icon/software.svg" alt=""></div>
								<div class="r_txt">
									<h5>软件开发</h5>
									<p>APP开发、小程序开发、HTML5开发、后台开发、前端开发。</p>
								</div>
							</li>
							<li>
								<div class="l_icon"><img src="../assets/image/icon/uidesign.svg" alt=""></div>
								<div class="r_txt">
									<h5>设计制作</h5>
									<p>UI设计，根据需求制作出一整套UI设计、以用户体验为根本做出适用于大众的APP。</p>
								</div>
							</li>
							<li>
								<div class="l_icon"><img src="../assets/image/icon/message.svg" alt=""></div>
								<div class="r_txt">
									<h5>技术咨询</h5>
									<p>欢迎前来咨询技术问题。我们是专业的技术咨询、基础软件开发、代理的科技公司。</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="index_partner_box com_title_style black">
		<div class="container">
			<h3 class="wow animated flipInY">合作伙伴</h3>
			<h6 class="wow animated flipInY"><span></span>Cooperative partner</h6>
			<ul>
				<li v-for="(item,index) in partners" :key="index">
					<img :src="item" class="wow animated tada" alt="">
				</li>
			</ul>
		</div>
	</div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'home',
  data(){
	  return{
		  partners: [
			require('../assets/image/home/partner1.png'),
			require('../assets/image/home/partner2.png'),
			require('../assets/image/home/partner3.png'),
			require('../assets/image/home/partner4.png'),
			require('../assets/image/home/partner5.png'),
			require('../assets/image/home/partner6.png'),
			require('../assets/image/home/partner7.png'),
			require('../assets/image/home/partner8.png'),
			require('../assets/image/home/partner9.png'),
			require('../assets/image/home/partner10.png')
		  ]
	  }
  },
	mounted() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		})
		wow.init();
	}
}
</script>

<style scoped lang="scss">
	.index_company{
		padding: 60PX 0;
		.container{
			& > p{
				color: #16171D;
				font-size: 16PX;
				text-align: center;
				line-height:26PX;
			}
			& > a{
				display: block;
				width:180PX;
				height:44PX;
				line-height: 44PX;
				text-align: center;
				background:rgba(0,108,255,1);
				color: #fff;
				font-size: 20PX;
				margin: 30px auto 60px;
			}
			ul{
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: wrap;
				li{
					width: 300PX;
					height: 294PX;
					text-align: center;
					overflow: hidden;
					&:first-of-type{
						background: url(../assets/image/home/iconbc4.png) center center no-repeat;
						background-size: 100% 100%;
					}
					&:nth-child(2){
						background: url(../assets/image/home/iconbc3.png) center center no-repeat;
						background-size: 100% 100%;
					}
					&:nth-child(3){
						background: url(../assets/image/home/iconbc2.png) center center no-repeat;
						background-size: 100% 100%;
					}
					&:last-of-type{
						background: url(../assets/image/home/iconbc1.png) center center no-repeat;
						background-size: 100% 100%;
					}
					div{
						width: 92PX;
						height: 83PX;
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 70PX auto 20PX;
						img{
							display: block;
							max-width: 100%;
						}
					}
					h5{
						color: #FEFEFE;
						font-size: 22PX;
						font-weight: bold;
						margin: 20PX 0 10PX;
					}
					p{
						color: #FEFEFE;
						font-size: 18PX;
						margin-bottom: 0;
					}
				}
			}
		}
	}
	.index_environment_box{
		background: #F8F8FA;
		padding: 60PX 0 80PX;
		img{
			display: block;
			max-width: 100%;
			margin: 0 auto;
		}
	}
	.index_introduce_box{
		padding: 60PX 0 80PX;
		.introduce_item{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			margin-top: 70PX;
			&.reverse{
				flex-direction: row-reverse;
				justify-content: flex-end;
				.intro_left{
					margin-left: 0;
					margin-right: 55PX;
				}
			}
			img{
				display: block;
				width: 450PX;
			}
			.intro_left{
				width: 50%;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				margin-left: 55PX;
				span{
					display: block;
					width:110PX;
					height:2PX;
					background:rgba(200,200,200,1);
					margin-right: 30PX;
					margin-top: 7PX;
				}
				.intro_content{
					width: 70%;
					& > h5{
						font-size:18PX;
						color:rgba(0,108,255,1);
						margin: 0;
					}
					& > h4{
						font-size:36PX;
						font-family:Akzidenz-Grotesk BQ;
						font-weight:bold;
						color:rgba(22,23,29,1);
						margin: 10PX 0 30PX;
					}
					& > p{
						font-size:16PX;
						color:rgba(22,23,29,1);
						line-height: 30PX;
					}
					a{
						display: block;
						width:160PX;
						height:44PX;
						line-height: 44PX;
						text-align: center;
						border:1PX solid rgba(22,23,29,1);
						font-size:20PX;
						color:rgba(22,23,29,1);
						margin-top: 40PX;
					}
					ul{
						li{
							display: flex;
							justify-content: flex-start;
							align-items: center;
							margin-bottom: 20PX;
							&:last-of-type{
								margin-bottom: 0;
							}
							.l_icon{
								display: flex;
								justify-content: center;
								align-items: center;
								width: 90PX;
								height: 90PX;
								background: #E1F1FF;
								border-radius: 18PX;
								margin-right: 20PX;
								img{
									display: block;
									width: 52PX;
								}
							}
							.r_txt{
								width: 73%;
								h5{
									font-size:18PX;
									font-weight:bold;
									color:rgba(22,23,29,1);
									margin: 10PX 0 15PX;
								}
								p{
									font-size:16PX;
									color:rgba(80,80,80,1);
									margin-bottom: 0;
									line-height: 26PX;
								}
							}
						}
					}
				}
			}
		}
	}
	.index_partner_box{
		padding: 60PX 0 70PX;
		background: #F4F4F4;
		ul{
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			flex-wrap: wrap;
			padding-top: 20PX;
			li{
				width: 240PX;
				height: 180PX;
				background: #006CFF;
				display: flex;
				justify-content: center;
				align-items: center;
				&:nth-child(2n){
					background: #FEFEFE;
				}
			}
		}
	}
	@media (min-width: 768PX) and (max-width: 1200PX) {
		
	}
	@media (max-width: 769PX) {
		.index_company {
			padding: 60px 0;
			.container{
				ul{
					li{
						width: 50%;
						height: 305px;
						padding: 0 20px;
						div{
							width: 92px;
							height: 83px;
							margin: 70px auto 20px;
							
						}
						h5{
							margin: 20px 0 10px;
						}
					}
				}
				& > p{
					font-size: 26px;
					line-height:34px;
				}
				& > a{
					font-size: 26px;
					width: 240px;
					height:60px;
					line-height: 60px;
				}
				ul{
					li{
						h5{
							font-size: 26px;
						}
						p{
							font-size: 26px;
						}
					}
				}
			}
		}
		.index_environment_box{
			padding: 60px 0 80px;
		}
		.index_introduce_box{
			padding: 50px 0;
			.introduce_item,.introduce_item.reverse{
				flex-wrap: wrap;
				flex-direction: initial;
				margin-top: 50px;
				.intro_left{
					margin-left: 0;
					margin-right: 0;
					.intro_content{
						width: 100%;
						& > h5{
							display: none;
						}
						& > h4{
							text-align: center;
							font-size:36px;
							margin: 10px 0 30px;
						}
						& > p{
							text-align: center;
							font-size: 26px;
							line-height: 40px;
						}
						a{
							display: none;
						}
						ul{
							li{
								margin-bottom: 20px;
								.l_icon{
									width: 120px;
									height: 120px;
									img{
										width: 52px;
									}
								}
								.r_txt{
									h5{
										font-size:26px;
										margin: 10px 0 15px;
									}
									p{
										font-size:24px;
										line-height: 34px;
									}
								}
							}
						}
					}
					span{
						display: none;
					}
					width: 100%;
				}
				& > img{
					width: 100%;
					margin-bottom: 50px;
				}
			}
		}
		.index_partner_box{
			padding: 60px 0 70px;
			ul{
				padding-top: 20px;
				li{
					width: 33.3%;
					height: 170px;
					&:nth-child(n+10){
						display: none;
					}
				}
			}
		}
	}
</style>