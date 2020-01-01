<template>
	<div>
		<!-- <div class="banner">
			<img src="../assets/image/introduction/banner3.png" class="pc" alt="">
			<img src="../assets/image/introduction/banner4.png" class="mobile" alt="">
		</div> -->
		<div class="app_highlight com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">APP亮点</h3>
				<h6 class="wow animated flipInY"><span></span>APP highlights</h6>
				<ul class="wow animated bounceInLeft">
					<li>
						<img src="../assets/image/icon/clock.svg" alt="">
						<h4>节约时间</h4>
						<p>不用刷屏散播广告，不用出门寻找服务门店，网上购买，即可服务到家。</p>
					</li>
					<li>
						<img src="../assets/image/icon/message.svg" alt="">
						<h4>即时通讯</h4>
						<p>随时随地联系商家买家，双方在服务未完成期间，还可以电话联系。</p>
					</li>
					<li>
						<img src="../assets/image/icon/service.svg" alt="">
						<h4>服务全面</h4>
						<p>有生活、房屋、代购、家政、维修、金融、会员卡服务类型。满足生活所需。</p>
					</li>
					<li>
						<img src="../assets/image/icon/ok.svg" alt="">
						<h4>界面简洁</h4>
						<p>界面采用卡片化形式，使界面板块化，数据显示更清晰、一目了然。</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="page_show_box com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">页面展示</h3>
				<h6 class="wow animated flipInY"><span></span>APP highlights</h6>
				<p class="wow animated bounceInLeft">天天生活APP，是为广大用户高效便捷的提供身边供需一体化的生活服务平台。我们APP有生活、代购、维修、房屋、家政、金融、会员卡服务等分类。我们APP有即时通讯、语音搜索、商品发布、发送账单、网络合同签订、修改订单、自主下单、会员卡积分、积分兑换余额等功能。</p>
				<div class="swiper_page wow animated zoomIn">
					<swiper :options="swiperOption1" ref="mySwiper1">
						<!-- slides -->
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/introduction/user1.png" alt="">
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/introduction/user2.png" alt="">
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/introduction/user3.png" alt="">
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/introduction/user4.png" alt="">
						</swiper-slide>
						<swiper-slide class="swiper-no-swiping">
							<img src="../assets/image/introduction/user5.png" alt="">
						</swiper-slide>
						<!-- Optional controls -->
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div>
					</swiper>
				</div>
			</div>
		</div>
		<div class="service_box com_title_style black">
			<div class="container">
				<h3 class="wow animated flipInY">七大服务</h3>
				<h6 class="wow animated flipInY"><span></span>Seven services</h6>
				<div class="service_swiper wow animated zoomIn">
					<swiper :options="swiperOption2" ref="mySwiper2">
						<!-- slides -->
						<swiper-slide v-for="(item,index) in service_swipers" :key="index" class="swiper-no-swiping">
							<img :src="item" alt="">
						</swiper-slide>
						<!-- Optional controls -->
						<div class="swiper-button-prev" slot="button-prev"></div>
						<div class="swiper-button-next" slot="button-next"></div>
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
					<span class="process_txt">{{current}} / {{service_swipers.length}}</span>
				</div>
				<div class="bottom_txt wow animated fadeInDown">
					<h4>{{title[current-1]}}</h4>
					<p>{{content[current-1]}}</p>
				</div>
			</div>
		</div>
		<div class="function_box function_box1 com_title_style white">
			<div class="container">
				<h3 class="wow animated flipInY">功能介绍-即时通讯</h3>
				<h6 class="wow animated flipInY"><span></span>Function introduction - IM</h6>
				<div class="box">
					<div class="wow animated bounceInLeft">
						<h4>即时通讯</h4>
						<h5>instant messaging</h5>
						<p>我们APP提供随时随地即时通讯功能,商家接单后还可以拨打电话联系商家。简洁的聊天页面设计，让你与商家的沟通更便捷。</p>
					</div>
					<img src="../assets/image/introduction/contact.png" class="wow animated bounceInRight" alt="">
				</div>
			</div>
		</div>
		<div class="function_box function_box2 com_title_style white">
			<div class="container">
				<h3 class="wow animated flipInY">功能介绍-发送账单</h3>
				<h6 class="wow animated flipInY"><span></span>Functional introduction - sending bills</h6>
				<div class="box reverse">
					<div class="wow animated bounceInRight">
						<h4>发送账单</h4>
						<h5>Send bills</h5>
						<p>平台提供金融财务代理、房屋租赁功能。可使用“发送账单”功能给客户、租户发送需要支付的费用。客户租户们直接通过软件支付费用即可。</p>
					</div>
					<img src="../assets/image/introduction/round.png" class="wow animated bounceInLeft" alt="">
				</div>
			</div>
		</div>
		<div class="function_box function_box3 com_title_style white">
			<div class="container">
				<h3 class="wow animated flipInY">功能介绍-网络合同</h3>
				<h6 class="wow animated flipInY"><span></span>Function Introduction - Network Contract</h6>
				<div class="box">
					<div class="wow animated bounceInLeft">
						<h4>网络合同签约</h4>
						<h5>Network contract signing</h5>
						<p>网络合同签约：提供租赁合同、代理合同、劳务合同线上签约。合同无纸化永久保存记录。还可线上申请解约、续约等。</p>
					</div>
					<img src="../assets/image/introduction/cartoon.png" class="wow animated bounceInRight" alt="">					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { WOW } from 'wowjs'
	export default{
		name: 'product',
		data(){
			return{
				swiperOption1:{
				  // some swiper options/callbacks
				  // 所有的参数同 swiper 官方 api 参数
				  // ...
				  autoplayDisableOnInteraction : false,
				  observer:true,
				  initialSlide:0,
				  loop: true,
				  centeredSlides: true,
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  }
				},
				swiperOption2:{
				  // some swiper options/callbacks
				  // 所有的参数同 swiper 官方 api 参数
				  // ...
				  observer:true,
				  loop: true,
				  autoplay: {
				  	delay: 3000,
				  	disableOnInteraction: false
				    },
				  autoplayDisableOnInteraction : false,
					pagination: {
						el: '.swiper-pagination',
						type: 'progressbar'
					  },
				  navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				  }
				},
				
				service_swipers: [
					require("../assets/image/introduction/product.png"),
					require("../assets/image/introduction/economic.png"),
					require("../assets/image/introduction/house.png"),
					require("../assets/image/introduction/housemana.png"),
					require("../assets/image/introduction/fix.png"),
					require("../assets/image/introduction/other.png"),
					require("../assets/image/introduction/purchase.png")
				],
				current: 1,
				title:['生活服务','代购服务','房屋服务','维修服务','家政服务','金融服务','其他服务'],
				content:[
					'线上便利店购买东西、购买煤气、桶装水等，生活所需皆可购买，给你最便捷的生活方式。',
					'线上代购商发布商品，买家可向商家下单，协议商品价格、代购时间等。',
					'线上精美租房，无纸化网络合同、线上账单发送，省去繁琐的租房流程，提供更便捷的租房体验。',
					'家电维修、房屋维修、电子产品维修等维修服务。提供商可修改订单，让客户付服务后产生的费用。',
					'月嫂、家庭保姆、日常保洁员等各种家政服务一应俱全，服务时间过长的还可签约网络劳动合同。',
					'财务代理可网络签约代理合同，可线上发送账单报销。保险、小额贷款业务也可上传展示预约客户。。',
					'网络会员卡办理、使用，停车月卡等。可在线充值金额，与商家方沟通交流。'
				],
				swipeIndex:1
			}
		},
	    computed: {
	      swiper() {
	        return this.$refs.mySwiper2.swiper
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
		  this.swiper.on("slideChangeTransitionEnd",()=>{
			  // console.log(this.swiper.activeIndex)
			  if(this.swiper.activeIndex==0){
				  this.current = 7
			  }else if(this.swiper.activeIndex==8){
				  this.current = 1
			  }else{
				  this.current = this.swiper.activeIndex
			  }
			  // this.current++;
			  // console.log(this.current,this.service_swipers.length+1);
			  // if(this.current >= this.service_swipers.length+1){
				 //  this.current = 1;
			  // }
			  // this.swipeIndex = this.current
			  // console.log(this.swipeIndex)
		  })
	    }
	}
</script>

<style scoped lang="scss">
	.swiper-button-prev,.swiper-button-next{
		width: 70PX;
		height: 70PX;
		border-radius: 50%;
	}
	.app_highlight{
		padding: 60PX 0 70PX;
		ul{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			padding-top: 25PX;
			li{
				padding: 0 50PX;
				box-sizing: border-box;
				img{
					display: block;
					width: 73PX;
					height: 66PX;
					margin: 0 auto;
				}
				h4{
					font-size:24PX;
					font-weight:bold;
					color:rgba(22,23,29,1);
					text-align: center;
					margin: 40PX 0 20PX;
				}
				p{
					font-size:16PX;
					color:rgba(22,23,29,1);
					text-align: center;
					line-height: 30PX;
				}
			}
		}
	}
	.page_show_box{
		background: #F8F8FA;
		padding: 60PX 0 70PX;
		p{
			font-size:16PX;
			color:rgba(22,23,29,1);
			text-align: center;
			line-height: 26PX;
		}
		.swiper_page{
			padding-top: 40PX;
			.swiper-button-prev{
				background: #006CFF url(../assets/image/introduction/left.png) center center no-repeat;
				background-size: auto 30PX;
			}
			.swiper-button-next{
				background: #006CFF url(../assets/image/introduction/right.png) center center no-repeat;
				background-size: auto 30PX;
			}
			.swiper-slide{
				// display: flex;
				// justify-content: center;
				img{
					max-width: 60%;
					height: auto;
					margin: 0 auto;
					display: block;
				}
			}
		}
	}
	.service_box{
		padding: 60PX 0;
		.service_swiper{
			position: relative;
			.swiper-button-prev{
				background: rgba(0,0,0,.36) url(../assets/image/introduction/left.png) center center no-repeat;
				background-size: auto 30PX;
			}
			.swiper-button-next{
				background: rgba(0,0,0,.36) url(../assets/image/introduction/right.png) center center no-repeat;
				background-size: auto 30PX;
			}
			/deep/ .swiper-container{
				position: static;
				.swiper-slide{
					img{
						display: block;
						width: 100%;
					}
				}
			}
			/deep/ .swiper-pagination-progressbar{
				position: relative;
				margin-top: 20PX;
				width: 140PX;
				height: 4PX;
				border-radius: 0;
				left: 0;
				bottom: -20PX;
				background: #DCDCDC;
			}
			.process_txt{
				color: #16171D;
				font-size: 16PX;
				position: absolute;
				left: 150PX;
				bottom: -10PX;
			}
		}
		h4{
			margin: 35PX 0 30PX;
			font-size:36PX;
			font-weight:bold;
			color:rgba(22,23,29,1);
			text-align: center;
			position: relative;
			&:before{
				content: "";
				display: block;
				width: 447PX;
				height: 45PX;
				background: url(../assets/image/introduction/Seven_services.png) no-repeat;
				background-size: 100% 100%;
				position: absolute;
				left: 50%;
				top: -20PX;
				transform: translateX(-50%);
				z-index: -1;
			}
		}
		p{
			text-align: center;
			font-size:16PX;
			color:rgba(30,30,30,1);
			line-height: 26PX;
		}
	}
	.function_box1{
		padding: 60PX 0 90PX;
		background: #6D6AFF;
	}
	.function_box2{
		padding: 60PX 0 70PX;
		background: #058EFF;
	}
	.function_box3{
		padding: 60PX 0;
		background: #17B79C;
	}
	.function_box{
		.box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 80PX;
			&.reverse{
				flex-direction: row-reverse;
			}
			div{
				width: 40%;
				h4{
					font-size:36PX;
					font-weight:bold;
					color:rgba(255,255,255,1);
					margin: 0;
				}
				h5{
					font-size:18PX;
					font-family:Trajan Pro 3;
					font-weight:bold;
					color:rgba(255,255,255,1);
					margin: 10PX 0 30PX;
				}
				p{
					font-size:18PX;
					color:rgba(255,255,255,1);
					line-height: 30PX;
				}
			}
			img{
				width: 50%;
			}
		}
	}
	
	@media (max-width: 769PX) {
		.swiper-button-prev,.swiper-button-next{
			width: 70px;
			height: 70px;
		}
		.app_highlight{
			padding: 60px 0 70px;
			padding-bottom: 0;
			h6{
				font-weight: bold;
			}
			ul{
				padding-top: 0;
				flex-wrap: wrap;
				align-items: stretch;
				margin-bottom: 0;
				li{
					width: 48%;
					background: #F8F8FA;
					padding: 45px 30px 50px;
					box-sizing: border-box;
					margin-bottom: 20px;
					img{
						width: 73px;
						height: 66px;
					}
					h4{
						font-size: 28px;
						margin: 40px 0 20px;
					}
					p{
						font-size: 24px;
						// font-weight: lighter;
						line-height: 40px;
					}
				}
			}
		}
		.page_show_box{
			background: #fff;
			padding: 50px 0 0;
			h6{
				font-weight: bold;
			}
			.swiper_page{
				padding-top: 10px;
				.swiper-button-prev{
					background-size: auto 30px;
				}
				.swiper-button-next{
					background-size: auto 30px;
				}
			}
			p{
				display: none;
			}
		}
		.service_box{
			padding: 60px 0 30px;
			h6{
				font-weight: bold;
			}
			.container{
				padding: 0 !important;
			}
			.service_swiper{
				.swiper-button-prev{
					background-size: auto 30px;
				}
				.swiper-button-next{
					background-size: auto 30px;
				}
				/deep/ .swiper-container{
					.swiper-slide{
						img{
							min-height: 350px;
						}
					}
				}
				/deep/ .swiper-pagination-progressbar{
					position: relative;
					top: -53px;
					left: 30px;
					margin-top: 20px;
					width: 140px;
					height: 4px;
				}
				.process_txt{
					bottom: 40px;
					left: 188px;
					color: #fff;
					z-index: 1;
					font-size: 20px;
					font-weight: bolder;
				}
			}
			.bottom_txt{
				padding: 0 30px;
			}
			h4{
				margin: 35px 0 30px;
				font-size: 36px;
				&:before{
					width: 447px;
					height: 45px;
					top: -20px;
				}
			}
			p{
				font-size: 24px;
				line-height: 40px;
			}
		}
		
		.function_box1{
			padding: 60px 0 90px;
		}
		.function_box2{
			padding: 60px 0 70px;
		}
		.function_box3{
			padding: 60px 0;
		}
		.function_box{
			.box{
				padding: 0 50px;
				flex-wrap: wrap;
				margin-top: 50px;
				&.reverse{
					flex-direction: initial;
				}
				div{
					width: 100%;
					h4{
						display: none;
					}
					h5{
						display: none;
					}
					p{
						text-align: center;
						font-size: 24px;
						line-height: 44px;
					}
				}
				img{
					width: 100%;
					margin-top: 30px;
				}
			}
		}
	}
</style>
