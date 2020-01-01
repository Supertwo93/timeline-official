<template>
  <div class="about">
	<!-- <div class="banner">
		<img src="../assets/image/about/banner1.png" alt="" class="pc"> 
		<img src="../assets/image/about/bannersmall.png" alt="" class="mobile">
	</div> -->
	  <div class="about_team_box com_title_style black">
		  <div class="container">
			  <h3 class="wow animated flipInY">团队介绍</h3>
			  <h6 class="wow animated flipInY"><span></span>Team Introduction</h6>
			  <div class="team_box">
				  <img class="wow animated bounceInRight" src="../assets/image/about/banner.png" alt="">
				  <div class="team_left wow animated bounceInLeft">
					  <h4>时光轴技术团队。</h4>
					  <h5>Time axis Technical team.</h5>
					  <p>深圳市时光轴科技有限公司拥有年轻向上,敢于创新突破的技术团队。希望通过专业的技术和贴心的服务寻求新兴市场的发展,实现用户价值,企业价值,为更多的用户提供专业、优质、更加贴心的服务。</p>
				  </div>
			  </div>
			  <ul class="wow animated fadeInUp">
				  <li>
					  <div class="icon"><img src="../assets/image/icon/back.svg" alt=""></div>
					  <p>后台开发</p>
				  </li>
				  <li>
					  <div class="icon"><img src="../assets/image/icon/front.svg" alt=""></div>
					  <p>网页前端</p>
				  </li>
				  <li>
					  <div class="icon"><img src="../assets/image/icon/android.svg" class="android" alt=""></div>
					  <p>Android开发</p>
				  </li>
				  <li>
					  <div class="icon"><img src="../assets/image/icon/ios.svg" class="ios" alt=""></div>
					  <p>IOS开发</p>
				  </li>
				  <li>
					  <div class="icon"><img src="../assets/image/icon/uidesign.svg" class="ios" alt=""></div>
					  <p>UI设计</p>
				  </li>
			  </ul>
		  </div>
	  </div>
	  <div class="about_service_box com_title_style black">
		  <div class="container">
			  <h3 class="wow animated flipInY">APP天天生活服务平台</h3>
			  <h6 class="wow animated flipInY"><span></span>APP daily life service platform</h6>
			  <ul>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/icon/life.svg" alt="">
					  <div>
						  <h4>生活服务</h4>
						  <p>线上便利店购买东西、购买煤气、桶装水等，生活所需皆可购买，给你最便捷的生活方式。</p>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/icon/housemana.svg" alt="">
					  <div>
						  <h4>家政服务</h4>
						  <p>月嫂、家庭保姆、日常保洁员等各种家政服务一应俱全，服务时间过长的还可签约网络劳动合同。</p>
					  </div>
				  </li>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/icon/house.svg" alt="">
					  <div>
						  <h4>房屋服务</h4>
						  <p>线上精美租房，无纸化网络合同、线上账单发送，省去繁琐的租房流程，提供更便捷的租房体验。</p>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/icon/fix.svg" alt="">
					  <div>
						  <h4>维修服务</h4>
						  <p>家电维修、房屋维修、电子产品维修等维修服务。提供商可修改订单，让客户付服务后产生的费用。</p>
					  </div>
				  </li>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/icon/purchase.svg" alt="">
					  <div>
						  <h4>代购服务</h4>
						  <p>线上代购商发布商品，买家可向商家下单，协议商品价格、代购时间等。</p>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/icon/econmic.svg" alt="">
					  <div>
						  <h4>金融服务</h4>
						  <p>财务代理可网络签约代理合同，可线上发送账单报销。保险、小额贷款业务也可上传展示预约客户。</p>
					  </div>
				  </li>
			  </ul>
			  <div class="wow animated fadeInUp toDownLoad" @click="toDownLoad">了解更多</div>
		  </div>
	  </div>
	  <div class="about_user_box com_title_style">
		  <div class="container">
			  <h3 class="wow animated flipInY">我们的用户群</h3>
			  <h6 class="wow animated flipInY"><span></span>Our user base</h6>
			  <ul>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/about/customer3.png" alt="">
					  <div>
						  <p>如果你有一技之长，却不想每天按时按点上班，想要自由的工作。就来我们平台，接单或发布你所能提供的服务，等待客户购买服务即可赚钱啦。</p>
						  <h4>有一技之长想要工作的人</h4>
						  <h5>A skilled person who wants to work</h5>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/about/customer1.png" alt="">
					  <div>
						  <p>如果你已经有了线下属于自己的店铺，可是却总找不到客户，总需要在朋友圈、社交圈发布商品，吸引客户的话，就来我们平台，发布一次即可。</p>
						  <h4>已有店铺的老板</h4>
						  <h5>The owner of an existing shop</h5>
					  </div>
				  </li>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/about/customer.png" alt="">
					  <div>
						  <p>如果你总是想要找维修服、找家政、找送煤气、找送水。可是总是找不到电话、麻烦、找不到人，就来我们平台，各种服务、各种选择，任你挑选。</p>
						  <h4>需要服务的人</h4>
						  <h5>People in need of service</h5>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/about/customer4.png" alt="">
					  <div>
						  <p>如果你想要开店用自己的技能赚钱，却又找不到合适便宜的店面。那就来我们平台，在家就可发布擅长的服务，等待客户购买服务，即可赚钱啦。</p>
						  <h4>想要开店的人</h4>
						  <h5>People who want to open a shop</h5>
					  </div>
				  </li>
				  <li class="wow animated bounceInLeft">
					  <img src="../assets/image/about/customer5.png" alt="">
					  <div>
						  <p>如果你总是需要大量散播商品图片、需要大量的用户流量、总是因为刷屏般的传播被朋友厌烦，就来我们平台，专门的代购、商品买卖交易平台。</p>
						  <h4>做社交电商代购的人</h4>
						  <h5>People who do social E-commerce</h5>
					  </div>
				  </li>
				  <li class="wow animated bounceInRight">
					  <img src="../assets/image/about/customer2.png" alt="">
					  <div>
						  <p>找不到需求客户，总是需要外出奔波宣传推广，朋友圈刷屏推广，就来我们平台发布销售内容，就可以找到你所需要的用户，提高工作质量。</p>
						  <h4>做销售推广的人</h4>
						  <h5>People who want to open a shop</h5>
					  </div>
				  </li>
			  </ul>
		  </div>
	  </div>
	  <div class="about_pain_box com_title_style black">
		  <div class="container">
			  <h3 class="wow animated flipInY">痛点分析</h3>
			  <h6 class="wow animated flipInY"><span></span>Pain spot analysis</h6>
			  <ul>
				  <li>
					  <img src="../assets/image/about/pic4.png" class="wow animated bounceInLeft" alt="">
					  <div class="wow animated bounceInRight">
						  <h4>有哪些痛点？</h4>
						  <h5>Supply and demand point</h5>
						  <p>找不到服务电话？签的合同总是搞不见了？通讯不便？想要便捷的生活方式？等等痛点都是现代社会的问题。随着电商发展、外卖等软件的冲击下，导致实体经济的中小商户的销量每况愈下。许多有技能的人员需靠中介才能找到需求方。而中介、移动平台的收费又过高。</p>
					  </div>
				  </li>
				  <li class="reverse">
					  <img src="../assets/image/about/pic3.png" class="wow animated bounceInRight" alt="">
					  <div class="wow animated bounceInLeft">
						  <h4>供需对接落后?</h4>
						  <h5>Backward supply and demand?</h5>
						  <p>传统信息的处理获取供需方式，手段落后导致需求方与提供方无法及时对接，而导致提供者资源过剩，而需求者又无法及时获取提供者的方式。而传统的供需对接方式又过于落后同时，在家政，维修，房屋出租等方面有的平台的不完善，或缺少平台监管等乱象。</p>
					  </div>
				  </li>
				  <li>
					  <img src="../assets/image/about/pic1.png" class="wow animated bounceInLeft" alt="">
					  <div class="wow animated bounceInRight">
						  <h4>找不到客户？</h4>
						  <h5>What is the pain point?</h5>
						  <p>有好的东西，好的服务。总是需要频繁刷屏社交圈，惹人烦恼。找不到需求客户，业绩上不去，利润赚不到？还在盲目寻找、四处撒网的寻找客户？我们平台有你想要的需求用户，不管是生活类、房屋类、金融类、家政类服务，只要你有东西卖，有服务要卖，总能找到你的需求用户。</p>
					  </div>
				  </li>
				  <li class="reverse">
					  <img src="../assets/image/about/pic2.png" class="wow animated bounceInRight" alt="">
					  <div class="wow animated bounceInLeft">
						  <h4>售后无法保障？</h4>
						  <h5>Can not guarantee after-sales?</h5>
						  <p>售后无法保障、找售后程序复杂麻烦、售后卡丢失无法申请售后？我们平台订单长期有效，可直接联系商家，处理售后。对你的购买与售后我们都提供便捷、直接的方式，与商家直接交谈处理。</p>
					  </div>
				  </li>
			  </ul>
		  </div>
	  </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
	// import commonSwiper from '../components/commonSwiper.vue'
	export default{
		name: 'about',
		components:{
			
		},
		data(){
			return{
				
			}
		},
		methods:{
			toDownLoad(){
				this.$router.push({path:'/download'})
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

<style lang="scss" scoped>
	.about_team_box{
		padding: 60PX 0 80PX;
		.team_box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row-reverse;
			margin-bottom: 25PX;
			.team_left{
				width: 50%;
				h4{
					font-size:38PX;
					font-weight:bold;
					color:rgba(22,23,29,1);
					margin: 0;
				}
				h5{
					font-size:14PX;
					font-family:Trajan Pro 3;
					font-weight:lighter;
					color:rgba(0,108,255,1);
					margin: 10PX 0 30PX;
				}
				p{
					font-size:16PX;
					color:rgba(22,23,29,1);
					line-height:30PX;
				}
			}
			img{
				width: 400PX;
			}
		}
		ul{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			li{
				.icon{
					width: 130PX;
					height: 130PX;
					border-radius: 50%;
					background:rgba(255,255,255,1);
					box-shadow:0PX 4PX 10PX 0PX rgba(0,108,255,0.14);
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20PX;
					img{
						max-width: 64PX;
						&.android{
							width: 46PX;
						}
						&.ios{
							width: 58PX;
						}
					}
				}
				p{
					font-size:18PX;
					color:rgba(22,23,29,1);
					text-align: center;
					font-weight: bold;
				}
			}
		}
	}
	.about_service_box{
		padding: 60PX 0;
		background: #F8F8FA;
		ul{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			padding-top: 20PX;
			li{
				width: 42%;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				margin-bottom: 60PX;
				img{
					max-width: 67PX;
					margin-right: 40PX;
				}
				div{
					h4{
						font-size:22PX;
						font-weight:bold;
						color:rgba(22,23,29,1);
						margin: 15PX 0 20PX;
					}
					p{
						font-size:16PX;
						font-weight:400;
						color:rgba(30,30,30,1);
						line-height:26PX;
					}
				}
			}
		}
		.toDownLoad{
			display: block;
			width:180PX;
			height:44PX;
			line-height: 44PX;
			margin: 0 auto;
			text-align: center;
			background:rgba(0,108,255,1);
			font-size:20PX;
			font-weight:400;
			color:rgba(255,255,255,1);
		}
	}
	.about_user_box{
		padding: 60PX 0 30PX;
		background: #115995;
		ul{
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-wrap: wrap;
			padding-top: 10PX;
			li{
				width: 42%;
				display: flex;
				justify-content: flex-start;
				align-items: flex-start;
				margin-bottom: 50PX;
				img{
					width: 90PX;
					height: 90PX;
					border-radius: 50%;
					margin-right: 40PX;
				}
				div{
					width: 75%;
					p{
						font-size:16PX;
						color:rgba(255,255,255,1);
						margin: 10PX 0 30PX;
						line-height: 26PX;
					}
					h4{
						font-size:22PX;
						font-weight:bold;
						color:rgba(255,255,255,1);
						margin: 0 0 8PX;
					}
					h5{
						font-size:14PX;
						font-family:Trajan Pro 3;
						font-weight:lighter;
						color:rgba(255,230,22,1);
						margin: 0;
					}
				}
			}
		}
	}
	.about_pain_box{
		padding: 60PX 0;
		ul{
			padding-top: 10PX;
			li{
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				// align-items: stretch;
				flex-wrap: wrap;
				background: #F8F8FA;
				margin-bottom: 20PX;
				&.reverse{
					flex-direction: row-reverse;
				}
				img{
					display: block;
					width: 500PX;
					// height: 300PX;
				}
				div{
					width: 700PX;
					padding: 55PX 60PX;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					flex-wrap: wrap;
					h4{
						width: 100%;
						font-size:32PX;
						font-weight:bold;
						color:rgba(0,108,255,1);
						margin: 0;
					}
					h5{
						width: 100%;
						font-size:16PX;
						font-family:Trajan Pro 3;
						font-weight:lighter;
						color:rgba(180,180,180,1);
						margin: 5PX 0 15PX;
					}
					p{
						font-size:16PX;
						color:rgba(22,23,29,1);
						line-height:30PX;
						margin-bottom: 0;
					}
				}
			}
		}
	}
	@media (max-width: 1200PX) {
		.about_pain_box ul li img{
			width: 100%;
		}
	}
	@media (max-width: 769PX) {
		.about_team_box{
			padding: 60px 0 30px;
			.team_box{
				flex-wrap: wrap;
				flex-direction: initial;
				margin-bottom: 25px;
				img{
					width: 400px;
					margin: 10px auto;
				}
				.team_left{
					width: 100%;
					h4{
						display: none;
					}
					h5{
						display: none;
					}
					p{
						font-size: 26px;
						line-height:44px;
					}
				}
			}
			ul{
				li{
					.icon{
						width: 130px;
						height: 130px;
						box-shadow:0 4px 10px 0 rgba(0,108,255,0.14);
						margin-bottom: 20px;
						img{
							max-width: 64px;
							&.android{
								width: 46px;
							}
							&.ios{
								width: 58px;
							}
						}
					}
					&:nth-child(n+4){
						display: none;
					}
					p{
						font-size: 24px;
						margin-bottom: 0;
					}
				}
			}
		}
		.about_service_box{
			padding: 60px 0;
			ul{
				padding-top: 20px;
				margin-bottom: 0;
				li{
					width: 100%;
					margin-bottom: 60px;
					img{
						max-width: 67px;
						margin-right: 40px;
					}
					&:last-of-type{
						margin-bottom: 0;
					}
					div{
						h4{
							font-size: 26px;
							margin: 15px 0 20px;
						}
						p{
							font-size: 24px;
							line-height:34px;
						}
					}
				}
			}
			a{
				display: none;
			}
		}
		.about_user_box{
			padding: 60px 0 30px;
			ul{
				padding-top: 10px;
				margin-bottom: 0;
				li{
					width: 100%;
					margin-bottom: 50px;
					img{
						width: 90px;
						height: 90px;
						margin-right: 40px;
					}
					div{
						width: 80%;
						p{
							font-size: 24px;
							font-weight: lighter;
							margin: 10px 0 30px;
							line-height:34px;
						}
						h4{
							font-size: 26px;
							margin: 0 0 8px;
						}
					}
				}
			}
		}
		.about_pain_box{
			padding: 60px 0;
			ul{
				padding-top: 10px;
				margin-bottom: 0;
				li{
					background: #fff;
					flex-wrap: wrap;
					margin-bottom: 50px;
					&:last-of-type{
						margin-bottom: 0;
					}
					img{
						width: 100%;
						// height: auto;
						margin-bottom: 30px;
					}
					div{
						width: 100%;
						padding: 0;
						h4{
							font-size: 32px;
						}
						h5{
							font-size: 16px;
							margin: 10px 0 25px;
						}
						p{
							font-size: 24px;
							margin-bottom: 0;
							line-height:44px;
						}
					}
				}
			}
		}
	}
</style>