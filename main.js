import App from './App'
// #ifndef VUE3
import Vue from 'vue'
import store from "store/index.js"
import uView from "uview-ui";
Vue.use(uView);
// main.js，注意要在use方法之后执行

// 如此配置即可
Vue.config.productionTip = false
App.mpType = 'app'

// Vue.fliter('formatCount',function(val){
// 	if(val >= 10000 && val <= 100000000) {
// 		 val /= 1000;
// 		 return val.toFixed(1) + '万'
// 	}
// 	else if( val > 100000000){
// 		val /= 100000000
// 		return val.toFixed(1) + '亿'
// 	}
// 	else {
// 		return val
// 	}
// })
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif