<template>
	<div>
		<!-- <div class="banner">
			<img src="../assets/image/personnel/banner4.png" class="pc" alt="">
			<img src="../assets/image/personnel/smallpic.png" class="mobile" alt="">
		</div> -->
		
		<div class="mask" v-if="showModal" @click="showModal=false"></div>
		
		<div class="pop" v-if="showModal">
			<div class="title">咨询我们</div>
			<div class="tips">
				<span></span>
				Consult us
			</div>
			<div class="contact">咨询热线：<span>0755-84865106 84864991</span></div>
			<div class="contact">咨询邮箱：galaxy688@163.com</div>
			<div class="contact">咨询QQ  ：57405397</div>
			<div class="contact">公司地址：深圳市龙岗区龙翔大道9002号志联佳大厦508</div>
			<div class="button" @click="showModal=false">我知道了</div>
		</div>
		<div class="join_timeline com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">加入时光轴</h3>
				<h6 class="wow animated flipInY"><span></span>Join the timeline</h6>
				<div class="swiper_box wow animated zoomIn">
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/personnel/team.png" alt="">
							<div>
								<h4>加入我们</h4>
								<h5>Store entry</h5>
								<p>对我们团队感兴趣的您，可欢迎联系我们。期待您的加入，让我们一起携手并进，向未来出发。</p>
								<!-- <div @click="showInfo">了解更多</div> -->
							</div>
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/personnel/pexels-photo.png" alt="">
							<div>
								<h4>店铺入驻</h4>
								<h5>Store entry</h5>
								<p>本平台主要有商家买家一体化管理、订单管理、会员卡收付款、上传商品、积分兑换余额等功能。</p>
								<!-- <div @click="showInfo">了解更多</div> -->
							</div>
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/personnel/amy-hirschi.png" alt="">
							<div>
								<h4>招纳贤才</h4>
								<h5>Store entry</h5>
								<p>本公司招纳行业人才，欢迎联系我们。</p>
								<p>邮箱：galaxy688@163.com</p>
								<p>电话：0755-84865106</p>
								<!-- <div @click="showInfo">了解更多</div> -->
							</div>
						</swiper-slide>
						<!-- Optional controls -->
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div>
					</swiper>
				</div>
				<div class="show_more" @click="showModal=true">了解更多</div>
			</div>
		</div>
		<div class="need_you_box com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">加入时光轴</h3>
				<h6 class="wow animated flipInY"><span></span>Join the timeline</h6>
				<div class="wow animated fadeInUp">
					<p>我们坚信没有完美的个人，只有优秀的团队。一群人、一件事、一条心、一起拼、一定赢。趁年轻努力拼搏，创造人生价值。将来的你一定会感谢现在奋斗的你！如果就是与我们志同道合的梦想合伙人，快投递简历，加入我们吧。</p>
					<img src="../assets/image/personnel/cartoon.png" alt="">
				</div>
			</div>
		</div>
		<div class="resume_box com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">简历投递</h3>
				<h6 class="wow animated flipInY"><span></span>galaxy168@163.com</h6>
				<div class="resume_content">
					<ul class="wow animated bounceInLeft">
						<li v-for="(item,index) in resume_navs" :class="current == index?'on':''" @click="changeResume(index)">{{item.name}}</li>
					</ul>
					<div v-for="(item,index) in resume_navs" class="content wow animated fadeInUp" :class="current == index?'on':''" >
						<div v-html="item.content">{{item.content}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { WOW } from 'wowjs'
	export default {
	    name: 'carrousel',
	    data() {
	      return {
			showModal:false,
	        swiperOption: {
	          // some swiper options/callbacks
	          // 所有的参数同 swiper 官方 api 参数
	          // ...
			  observer:true,
			  loop: true,
			  spaceBetween: 30,
			  slidesPerView: 3,
			  autoplayDisableOnInteraction : false,
			  navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			  },
	        },
			resume_navs: [
				{
					name: "IOS开发工程师",
					content:`<h4>职位描述：</h4>
						<div>
							<p>1、能独立完成APP代码的实现，编写代码注释和开发文档；</p>
							<p>2、能独立负责APP开发及二次开发、性能优化，Bug修复；</p>
							<p>3、根据设计文档或需求说明完成代码编写，调试，测试和维护；</p>
							<p>4、分析并解决软件开发过程中的问题；</p>
							<p>5、协助测试工程师制定测试计划，定位发现的问题；</p>
							<p>6、协同产品、运营、技术团队沟通与协商，保证产品的质量和开发进度</p>
						</div>
						<h4>任职要求：</h4>
						<div>
							<p>1、计算机相关专业优先录取；</p>
							<p>2、熟悉面向对象思想，有完整的项目开发经验，具备独立开发的能力；</p>
							<p>3、熟练开发APP或二次开发APP；</p>
							<p>4、具备需求分析和系统设计能力优先，责任心强,良好的团队协作以及较强的逻辑分析和独立解决问题能力优先；</p>
							<p>5、IOS有appstore上架经验优先</p>
						</div>`
				},
				{
					name: "Android开发工程师",
					content:`<h4>职位描述：</h4>
						<div>
							<p>1、完成APP代码的实现，编写代码注释和开发文档，熟练使用kotlin;</p>
							<p>2、负责APP开发及二次开发、性能优化；</p>
							<p>3、根据设计文档或需求说明完成代码编写，调试，测试和维护；</p>
							<p>4、分析并解决软件开发过程中的问题；</p>
						</div>
						<h4>任职要求：</h4>
						<div>
							<p>1、计算机相关专业优先录取；</p>
							<p>2、熟悉面向对象思想，有完整的项目开发经验，具备独立开发的能力；</p>
							<p>3、熟练开发APP或二次开发APP；</p>
							<p>4、具备需求分析和系统设计能力优先，责任心强,良好的团队协作以及较强的逻辑分析和独立解决问题能力优先；</p>
						</div>`
				},
				{
					name: "H5APP开发工程师",
					content:`
						<h4>任职要求：</h4>
						<div>
							<p>1、 熟练使用 HTML5, CSS, JavaScript开发跨平台(iOS/Android)项目；</p>
							<p>2、熟悉前端开发技术（HTML5、CSS3、JS、Ajax、JSON等）；</p>
							<p>3、熟悉Jquery/Vue/AngularJs相关前端框架，能用webpack等相关前端工具自动构建优化css和js；</p>
							<p>4、熟练掌握运用apicloud/dcloud、uniapp/reactnative/flutter/Ionic+Angularjs+Cordova/visual studio xamarin等常用跨平台开发技术中的任意一种</p>
							<p>5、熟悉前端开发技术（HTML5、CSS3、JS、Ajax、JSON等），熟悉各种浏览器的兼容性调试技术；</p>
							<p>6、对Android或iOS原生开发有一定认识，有过相关开发经验者优先；</p>
							<p>7、2年以上实际开发，1-2年React Native开发经验，有线上作品的优先</p>
						</div>`
				}
			],
			current: 0
	      }
	    },
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper.swiper
	      }
	    },
		beforeMount() {
			let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if(width < 768){
				this.swiperOption.loop = false
			}else{
				this.swiperOption.loop = true
			}
			window.onresize = () => {
			  return (() => {
				if(width < 768){
					this.swiperOption.loop = false
				}else{
					this.swiperOption.loop = true
				}
			  })()
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
	      // current swiper instance
	      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
		  
	    },
		methods:{
			changeResume(index){
				this.current = index;
			},
			showInfo(e){
				console.log(e)
			}
		}
	  }
</script>

<style scoped lang="scss">
	.mask {
		background-color: #000;
		opacity: 0.3;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1
	}
	.pop{
		padding:50PX 0 0 62PX;
		width:700PX;
		height:500PX;
		background-color: #fff;
		z-index: 2;
		position: fixed;
		top:100PX;
		left:650PX;
		.title{
			margin-left: 235PX;
			font-size:30px;
			letter-spacing:1PX;
			font-family:Microsoft YaHei;
			font-weight:bold;
			color:rgba(22,23,29,1);
		}
		.tips{
			display: flex;
			align-items: center;
			span{
				width:14px;
				height:14px;
				border:2px solid rgba(0,108,255,1);
				border-radius:50%;
			}
			margin-left: 241PX;
		}
		.contact{
			font-size:22px;
			letter-spacing:1PX;
			font-family:Source Han Sans CN;
			font-weight:400;
			color:rgba(22,23,29,1);
			line-height:30px;
			margin-top: 35PX;
			span{
				letter-spacing:2PX;
				font-size:30px;
				font-family:Source Han Sans CN;
				font-weight:800;
				color:rgba(0,108,255,1);
				line-height:30px;
			}
		}
		.button{
			margin-left: 210PX;
			width:180px;
			height:44px;
			background:rgba(0,108,255,1);
			color:#fff;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-top: 50PX;
		}
	}
	.join_timeline{
		padding: 60PX 0 80PX;
		.show_more{
			padding:0;
			width:180PX;
			height:44PX;
			line-height: 44PX;
			margin: 25PX auto;
			text-align: center;
			background:rgba(0,108,255,1);
			font-size:20PX;
			color:rgba(255,255,255,1);
		}
		.swiper_box{
			padding: 0 30PX;
			position: relative;
			.swiper-container{
				position: static;
				padding: 10PX 0;
				/deep/ .swiper-wrapper{
					align-items: center;
				}
				.swiper-button-prev{
					left: -40PX;
					width: 16PX;
					height: 29PX;
					background-size: 100%;
				}
				.swiper-button-next{
					right: -40PX;
					width: 16PX;
					height: 29PX;
					background-size: 100%;
				}
				.swiper-slide{
					width: 318PX;
					height: 340PX;
					img{
						display: block;
						width: 100%;
						height: 150PX;
						border-top-left-radius: 10PX;
						border-top-right-radius: 10PX;
					}
					div{
						width: 100%;
						padding: 30PX 20PX 40PX;
						box-sizing: border-box;
						h4{
							font-size:30PX;
							font-weight:bold;
							color:rgba(22,23,29,1);
							margin: 0 0 20PX;
							text-align: center;
						}
						h5{
							display: none;
							font-size:16PX;
							font-weight:bold;
							text-align: center;
							color:rgba(200,200,200,1);
							margin: 10PX 0 20PX;
						}
						p{
							font-size:16PX;
							color:rgba(22,23,29,1);
							line-height: 26PX;
							text-align: center;
							margin-bottom: 0;
						}
						div{
							padding:0;
							display: none;
							width:180PX;
							height:44PX;
							line-height: 44PX;
							margin: 25PX auto;
							text-align: center;
							background:rgba(0,108,255,1);
							font-size:20PX;
							color:rgba(255,255,255,1);
						}
					}
					&.swiper-slide-next{
						width: 360PX;
						height: 400PX;
						box-shadow:0PX 4PX 12PX 0PX rgba(0, 0, 0, 0.12);
						border-radius:10PX;
						img{
							height: 160PX;
						}
						div{
							padding: 30PX 30PX 40PX;
							h4{
								margin-bottom: 0;
							}
							h5{
								display: block;
							}
							div{
								padding: 0;
								display: block;
							}
						}
					}
				}
			}
		}
	}
	.need_you_box{
		background: #F8F8FA;
		padding: 60PX 0 35PX;
		p{
			font-size:18PX;
			color:rgba(22,23,29,1);
			text-align: center;
			padding: 0 100PX;
			line-height: 26PX;
			margin-bottom: 0;
		}
		img{
			display: block;
			width: 540PX;
			margin: 50PX auto 0;
		}
	}
	.resume_box{
		padding: 60PX 0 30PX;
		.resume_content{
			padding-top: 10PX;
			ul{
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				flex-wrap: wrap;
				li{
					width:180PX;
					height:44PX;
					line-height: 44PX;
					text-align: center;
					background:rgba(0,108,255,1);
					font-size:16PX;
					color:rgba(255,255,255,1);
					margin-right: 20PX;
					opacity:0.4;
					cursor: pointer;
					margin-bottom: 20PX;
					&.on{
						opacity: 1;
					}
				}
			}
			.content{
				display: none;
				margin-top: 20PX;
				&.on{
					display: block;
				}
				h4{
					font-size:20PX;
					font-weight:bold;
					color:rgba(22,23,29,1);
					margin: 0 0 15PX;
				}
				div{
					margin-bottom: 40PX;
					p{
						font-size:16PX;
						color:rgba(22,23,29,1);
						margin-bottom: 0;
						line-height: 26PX;
					}
				}
			}
		}
	}
	@media (max-width: 1400PX) {
		.join_timeline .swiper_box .swiper-container .swiper-button-prev{
			left: 0;
		}
		.join_timeline .swiper_box .swiper-container .swiper-button-next{
			right: 0;
		}
	}
	@media (max-width: 769PX) {
		.join_timeline{
			padding: 60px 0 0;
			.show_more{
				display: none;
			}
			.swiper_box{
				padding: 0;
				.swiper-container{
					position: static;
					padding: 10px 0;
					/deep/ .swiper-wrapper{
						width: 100%;
						align-items: center;
						flex-wrap: wrap;
					}
					.swiper-button-prev{
						display: none;
					}
					.swiper-button-next{
						display: none;
					}
					.swiper-slide{
						width: 100% !important;
						height: auto ;
						img{
							border-radius: 0;
							height: auto;
						}
						
						div{
							padding: 30px 0 40px;
							h4{
								text-align: left;
								font-size: 32px;
								margin: 0 0 20px;
							}
							h5{
								display: none;
								margin: 10px 0 20px;
							}
							p{
								font-size: 26px;
								line-height: 44px;
								text-align: left;
							}
							a{
								display: none;
							}
						}
						&.swiper-slide-next{
							height: auto;
							div{
								padding: 30px 0 40px;
								h4{
									text-align: left;
									margin-bottom: 20px;
								}
								h5{
									display: none;
								}
								a{
									display: none;
								}
								div{
									display: none;
								}
							}
						}
					}
					
					.swiper-button-prev, .swiper-button-next{
						display: none;
					}
				}
			}
		}
		.need_you_box{
			padding: 60px 0 35px;
			.container{
				div{
					display: flex;
					flex-direction: column-reverse;
					img{
						max-width: 100%;
						margin: 10px auto 50px;
					}
					p{
						padding: 0;
						font-size: 24px;
						font-weight: lighter;
						line-height: 44px;
					}
				}
			}
		}
		.resume_box{
			padding: 60px 0 30px;
			.resume_content{
				padding-top: 10px;
				ul{
					margin-bottom: 0;
					li{
						// width: 200PX;
						width: auto;
						padding: 0 25px;
						height: 60px;
						line-height: 60px;
						font-size: 26px;
						margin-right: 20px;
						margin-bottom: 20px;
					}
				}
				.content{
					margin-top: 20px;
					h4{
						font-size:30px;
						margin: 0 0 15px;
					}
					div{
						margin-bottom: 40px;
						p{
							font-size:26px;
							line-height: 44px;
						}
					}
				}
			}
		}
	}
</style>
