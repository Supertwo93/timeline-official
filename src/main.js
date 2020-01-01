import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.css";

// import './utils/rem.js'
import 'lib-flexible'

// require styles
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// import animate from 'animate.css' // npm install animate.css --save安装，在引入

// Vue.use(animate)

// window.onresize = setHtmlFontSize;
// function setHtmlFontSize(){
// 	const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
// 	const htmlDom = document.getElementsByTagName('html')[0];
// 	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
// }
// setHtmlFontSize();

Vue.config.productionTip = false

router.afterEach((to,from,next) => {

    window.scrollTo(0,600);

})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
