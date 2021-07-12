import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import 'weui'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import "../static/common.css";

const app = createApp(App) // 创建实例
app.use(router)
app.use(ElementPlus)
app.mount('#app',router)
