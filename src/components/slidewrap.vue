<template>
	<view>
		<Swiper :options="options" ref="slidewrap">
			<swiper-slide v-for="(item,index) in swiperList" :key="index">
				<router-link :to="item.path">
					<img :src="item.pc_img" class="pc" alt="">
					<img :src="item.mobile_img" class="mobile" alt="">
				</router-link>
			</swiper-slide>
			<div class="swiper-pagination"></div>
		</Swiper>
	</view>
</template>

<script>
	export default{
		name: 'slideSwiper',
		data(){
			return{
				options: {
					observer:true,
					autoplay : 5000,
					loop: true,	
					autoplayDisableOnInteraction : false,
					paginationClickable: true,
				},
				swiperList: [
					{
						path: '/',
						pc_img: require('../assets/image/home/banner.png'),
						mobile_img: require('../assets/image/home/bannersmall.png')
					},{
						path: '/about',
						pc_img: require('../assets/image/about/banner1.png'),
						mobile_img: require('../assets/image/about/bannersmall.png')
					},{
						path: '/product',
						pc_img: require('../assets/image/introduction/banner3.png'),
						mobile_img: require('../assets/image/introduction/banner4.png')
					},{
						path: '/personnel',
						pc_img: require('../assets/image/personnel/banner4.png'),
						mobile_img: require('../assets/image/personnel/smallpic.png')
					}
				]
			}
		},
	    computed: {
	      swiper() {
	        return this.$refs.slidewrap.swiper
	      }
	    }
	}
</script>

<style scoped lang="scss">
	 
</style>
