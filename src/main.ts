import "./lib/zuimeng.scss";
import "./index.scss";
import { createApp } from 'vue'
import App from './App.vue'
import home from './views/home.vue'
import Doc from './views/Doc.vue'
import './lib/svg.js'
import {rotuer}  from './router'
import 'github-markdown-css'

// 引入哈希模式路由对象
const app= createApp(App)
app.use(rotuer)
app.mount('#app')