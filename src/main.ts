import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import home from './views/home.vue'
import Doc from './views/Doc.vue'
// 引入哈希模式路由对象
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const rotuer = createRouter({
    history:history,
    routes:[
        //设置路由对象
        {path:'/',component:home},
        {path:'/doc',component:Doc}
    ]
})

const app= createApp(App)
app.use(rotuer)
app.mount('#app')