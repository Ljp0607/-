import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'default-passive-events'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
// import { Toast } from 'vant';
import { useCounterStore } from './stores/counter'
const app = createApp(App)
// app.use(Toast);
app.config.globalProperties.$axios = axios
app.use(createPinia())
app.use(router)
app.use(VueViewer, {
  defaultOptions: {
    // 自定义默认配置
  },
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
app.mount('#app')
const store = useCounterStore()
// 获取userId
if (location.href.indexOf('userId') != -1) {
  if (location.href.indexOf('&', location.href.indexOf('userId=') + 7) != -1) {
    store.changeUserId(
      location.href.slice(
        location.href.indexOf('userId=') + 7,
        location.href.indexOf('&', location.href.indexOf('userId='))
      )
    )
  } else {
    store.changeUserId(location.href.slice(location.href.indexOf('userId=') + 7, 1000))
  }
}
//获取 activity
if (location.href.indexOf('activityNo=') != -1) {
  if (location.href.indexOf('&', location.href.indexOf('activityNo=') + 11) != -1) {
    store.changeActive(
      location.href.slice(
        location.href.indexOf('activityNo') + 11,
        location.href.indexOf('&', location.href.indexOf('activityNo='))
      )
    )
  } else {
    store.changeActive(location.href.slice(location.href.indexOf('activityNo') + 11, 1000))
  }
}
