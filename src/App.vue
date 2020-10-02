<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide,
} from 'vue';
import {
    rotuer
} from './router'
export default {
    name: 'App',
    components: {},
    setup() {
        // 获取页面实际宽度
        const width = document.documentElement.clientWidth
        // 声明控制菜单栏显隐的变量
        const menuVisible = ref(width >= 500 ? true : false)
        // 将值通过provide进行组件之间传递，可隔代，
        // provide传递，inject接收，但是建议用于高阶组件，不建议日常项目使用
        provide('menuVisible', menuVisible)
        // 路由器前置守卫
        rotuer.afterEach(() => {
            if (width <= 500) {
                menuVisible.value = false;
            }
        })
    }
}
</script>
