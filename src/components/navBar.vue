<template>
	<div class="navigationBar">
		<nav class="navbar navbar-inverse fix">
		  <div class="container">
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <div class="logo"><img src="../assets/image/logo.png" class="navbar-brand"></div>
			</div>
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			  <div class="close_icon mobile" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><img src="../assets/image/close.png" alt=""></div>
			  <ul class="nav navbar-nav navbar-right">
				<li @click="changeIndex(index)" :class="current == index?'on':''" v-for="(item,index) in navList" :key="index">
					<router-link :to="item.path">{{item.title}}</router-link>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
		<div class="mt50"></div>
	</div>
</template>

<script>
export default {
  name: 'navigationBar',
  props: {
	  
  },
  data(){
	  return{
		  isFix: false,
		  current: 0,
		  navList: [
			  {
				  path: '/',
				  title: '公司信息'
			  },{
				  path: '/about',
				  title: '关于我们'
			  },{
				  path: '/product',
				  title: '产品介绍'
			  },{
				  path: '/personnel',
				  title: '人才加入'
			  }
		  ]
	  }
  },
  methods:{
	  changeIndex(index){
		this.current = index;
	  },
	  handleScroll () {
	   var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	   // console.log(scrollTop)
	   if(scrollTop > 180){
		   this.isFix = true;
	   }else{
		   this.isFix = false;
	   }
	  },
  },
  watch:{
	  $route(to,from){
		  console.log(to);
	      if(to.name == 'home'){
			  this.current = 0
		  }else if(to.name == 'about'){
			  this.current = 1
		  }else if(to.name == 'product'){
			  this.current = 2
		  }else if(to.name == 'personnel'){
			  this.current = 3
		  }else{
			  this.current = 5
		  }
	    }
  },
  mounted(){
	window.addEventListener('scroll', this.handleScroll)
  }
  
}
</script>

<style scoped lang="scss">
.fixed_top_box{
	// position: fixed;
	width: 100%;
	height: 260px;
	background: #fff;
	// left: 0;
	// top: 0;
	// z-index: 100;
	border-bottom: 1px solid #DCDCDC;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
	padding: 50px 0;
	h2{
		width: 100%;
		padding: 0 0;
		margin: 0;
		font-size: 80px;
		font-family: KaiTi;
		font-weight: bold;
		color: #008fd5;
	}
	h4{
		margin-top: 19px;
		margin: 0;
		font-size: 48px;
		font-family: SourceHanSansCN-Medium;
		font-weight: 500;
		color: #008fd5;
		text-align: center;
	}
}
.mt50{
	margin-top: 0;
	&.fix{
		margin-top: 90PX;
	}
}
.navbar{
	height: 90PX;
	-webkit-border-radius: 0 !important;
	-moz-border-radius: 0 !important;
	border-radius: 0 !important;
	border: 0;
	margin-bottom: 0!important;
	&.fix{
		position: fixed;
		width: 100%;
		height: 90PX;
		top: 0;
		left: 0;
		z-index: 100;
	}
	&::before,&::after{
		display: none;
	}
}
.navbar-header{
	height: 90PX;
	.logo{
		// width: 140px;
		height: 90PX;
		display: flex;
		align-items: center;
		font-size:50px;
		font-family:REEJI-HHguang-MediumGB1.0;
		font-weight:bold;
		color:rgba(213,21,21,1);
		padding-left: 30PX;
		.navbar-brand{
			display: block;
			width: 183PX;
			height: 47PX;
			padding: 0;
		}
	}
}
.navbar-inverse{
	height: 90PX;
	background: #fff;
}
.navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus{
	color: rgba(213,21,21,1);
}
.navbar-inverse .navbar-nav > li > a{
	color: #16171D;
	padding: 35PX 40PX;
	font-size: 20PX;
	position: relative;
	box-sizing: border-box;
}
.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus{
	color: #16171D;
}
.navbar-inverse .navbar-toggle .icon-bar{
	background: #16171D !important;
}
.navbar-inverse .navbar-nav > li > a:before{
	content: "";
	width: 1PX;
	height: 14PX;
	background:#16171D;
	opacity:0.5;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
}
.navbar-inverse .navbar-nav > li:last-child > a:before{
	display: none;
}
.navbar-inverse .navbar-nav > li.on > a:after{
	content: "";
	width:75PX;
	height:2PX;
	background:rgba(0,108,255,1);
	position: absolute;
	left: 50%;
	bottom: 5PX;
	transform: translateX(-50%);
}

@media (max-width: 769PX) {
	.mt50{
		margin-top: 50PX;
	}
	.fixed_top_box{
		display: none;
	}
	.navbar-header{
		&::before,&::after{
			display: none;
		}
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row-reverse;
		height: 100%;
		.logo{
			// width: 140px;
			height: 100%;
			font-size:50px;
			padding-left: 30px;
			.navbar-brand{
				display: block;
				width: 121px;
				height: 31px;
				padding: 0;
			}
		}
	}
	.navbar{
		position: fixed;
		width: 100%;
		height: 90px;
		left: 0;
		top: 0;
		z-index: 100;
		.container{
			height: 100%;
		}
		&.fix{
			height: 90px;
		}
	}
	.navbar-inverse{
		height: 90px;
	}
	.navbar-inverse .navbar-toggle{
		border:0;
		margin-right: 5px;
	}
	.navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus{
		background: none;
	}
	.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{
		border: 0;
		width: 50%;
		background: #fff;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 88;
	}
	.navbar-inverse .navbar-nav > li{
		width: 100%;
	}
	.navbar-inverse .navbar-nav > li > a{
		display: block;
		width: 100%;
		color: #1E1E1E;
		font-size: 28px;
		padding: 30px 40px;
		border-bottom: 1px solid #EDEDEE;
		text-align: center;
	}
	.navbar-inverse .navbar-nav > li > a:before{
		display: none;
	}
	.navbar-inverse .navbar-nav > li.on > a:after{
		display: none;
	}
	.navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus{
		color: #1E1E1E;
	}
	.navbar-nav{
		margin: 0;
	}
	.navbar-collapse{
		padding-left: 0;
		padding-right: 0;
	}
	.close_icon{
		// padding: 30px;
		box-sizing: border-box;
		border-bottom: 1px dashed #EDEDEE;
		overflow: hidden;
		height: 50PX;
		display: flex !important;
		justify-content: flex-end;
		align-items: center;
		padding-right: 60px;
		img{
			display: block;
			// float: right;
			width: 30px;
			height: 30px;
		}
	}
}
</style>
