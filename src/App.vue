<template>
  <div id="app">
	<navigation-bar ref='nav'></navigation-bar>
	<div class="slide_wrap_box">
		<swiper :options="options" ref="slidewrap1" class="pc">
			<swiper-slide v-for="(item1,index1) in swiperList1" :key="index1">
				<router-link :to="item1.path">
					<img :src="item1.pc_img" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<swiper :options="options" ref="slidewrap2" class="mobile">
			<swiper-slide v-for="(item2,index2) in swiperList2" :key="index2">
				<router-link :to="item2.path">
					<img :src="item2.mobile_img" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
	<router-view></router-view>
	<Footer></Footer>
  </div>
</template>
<script>
	import navigationBar from './components/navBar.vue'
	import Footer from './components/Footer.vue'
	import slideSwiper from './components/slidewrap.vue'
	export default{
		components:{
			navigationBar,
			Footer,
			slideSwiper
		},
		data(){
			return{
				scrollTop: 0,
				options: {
					observer:true,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					  },
					loop: true,	
					autoplayDisableOnInteraction : false,
					paginationClickable: true,
					pagination: {
						el: '.swiper-pagination',
						dynamicBullets: true
					  }
				},
				swiperList1: [
					{
						path: '/',
						pc_img: require('./assets/image/home/banner.png')
					},{
						path: '/about',
						pc_img: require('./assets/image/about/banner1.png')
					},{
						path: '/product',
						pc_img: require('./assets/image/introduction/banner3.png')
					},{
						path: '/personnel',
						pc_img: require('./assets/image/personnel/banner4.png')
					}
				],
				swiperList2: [
					{
						path: '/',
						mobile_img: require('./assets/image/home/bannersmall.png')
					},{
						path: '/about',
						mobile_img: require('./assets/image/about/bannersmall.png')
					},{
						path: '/product',
						mobile_img: require('./assets/image/introduction/banner4.png')
					},{
						path: '/personnel',
						mobile_img: require('./assets/image/personnel/smallpic.png')
					}
				]
			}
		},
		
		methods:{
			
		},
		watch:{
			$route(to,from){
				console.log(this.$refs.nav.current)
			}
		},
		mounted() {
			console.log(this.$refs.nav.current)
		}
	}
</script>

<style lang="scss">
	*,body{
		font-family:PingFang SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
	}
	.slide_wrap_box{
		.swiper-container{
			.swiper-slide{
				img{
					display: block;
					width: 100%;
				}
			}
		}
	}
	.com_title_style{
		h3{
			font-size:30PX;
			font-weight:bold;
			color:rgba(255,255,255,1);
			margin: 0;
			text-align: center;
		}
		h6{
			font-family:Trajan Pro 3;
			font-weight: lighter;
			color:rgba(255,255,255,1);
			margin: 10PX 0 30PX;
			font-size: 14PX;
			text-align: center;
			text-transform: uppercase;
			span{
				display: inline-block;
				width:14PX;
				height:14PX;
				border:2PX solid rgba(0,108,255,1);
				border-radius:50%;
				vertical-align: middle;
				margin: 0 8PX 4PX 0;
			}
		}
		&.black{
			h3,h6{
				color: #16171D;
			}
		}
		&.white{
			h6{
				span{
					border:2PX solid #fff;
				}
			}
		}
	}
	
	.banner{
		img{
			display: block;
			max-width:100%;
			margin: 0 auto;
		}
	}
	
	.pc{
		display: block !important;
	}
	.mobile{
		display: none !important;
	}
	
	@media (min-width: 1200PX){
		.container {
		    width: 1200PX !important;
			margin: 0 auto;
			padding-left: 0 !important;
			padding-right: 0 !important;
		}
	}
	
	@media (max-width: 1200PX) {
		.container{
			max-width: 100%;
			width: 100% !important;
			padding: 0 30px !important;
			box-sizing: border-box;
			&::before,&::after{
				display: none !important;
			}
		}
	}
	
	@media (max-width: 769PX) {
		.com_title_style{
			h3{
				font-size:30px;
			}
			h6{
				font-size: 14px;
				margin: 10px 0 30px;
				span{
					width: 14px;
					height: 14px;
					border:2px solid rgba(0,108,255,1);
					margin: 0 8px 4px 0;
				}
			}
		}
		.pc{
			display: none !important;
		}
		.mobile{
			display: block !important;
		}
	}
	#test{
		width:50px;
		height:50px;
	}
	ul,ol{list-style: none;padding-left: 0;margin-bottom: 0;}
	p{margin-bottom: 0;}
	a{text-decoration: none !important;}
</style>
