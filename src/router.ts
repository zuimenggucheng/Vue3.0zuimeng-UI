
import home from './views/home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'


// 引入哈希模式路由对象
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
export const rotuer = createRouter({
    history:history,
    routes:[
        //设置路由对象
        {path:'/',component:home},
        {path:'/doc',component:Doc,children:[
            {  path:'switch',component:SwitchDemo,},
            {  path:'tabs',component:TabsDemo,},
            {  path:'dialog',component:DialogDemo,},
            {  path:'button',component:ButtonDemo,},
          
        ],}
    ]
})