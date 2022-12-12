import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import 'element-ui/lib/theme-chalk/display.css';
import VForm from 'vform-builds'  //引入VForm库
//import VFormRender from 'vform-builds/dist/VFormRender.umd.min.js'  //引入VFormRender组件

import Element from 'element-ui'
import './styles/element-variables.scss'
//import enLang from 'element-ui/lib/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global 
import 'vform-builds/dist/VFormDesigner.css'  //引入VForm样式
//import 'vform-builds/dist/VFormRender.css'  //引入VFormRender样式

Vue.use(VForm)  //全局注册VForm(同时注册了v-form-designe、v-form-render等组件)
//Vue.use(VFormRender)  //全局注册VFormRender等组件
/* 注意：如果你的项目中有使用axios，请用下面一行代码将全局axios复位为你的axios！！ */

import App from './App'
import store from './store'
import router from './router'
//import BaiduMap from 'vue-baidu-map'
import {BmlMarkerClusterer} from 'vue-baidu-map'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  //locale: enLang // 如果使用中文，无需设置，请删除
})

// Vue.use(BaiduMap, {
//   // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
//   ak: 'k7FWhLNhBxNNLrxRL10m2e1cyik0XZ7H'
// })


Vue.component('bml-marker-cluster', BmlMarkerClusterer)
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线
	},
})
