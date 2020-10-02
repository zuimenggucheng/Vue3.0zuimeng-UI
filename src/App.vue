<template>
<router-view />
</template>

<script lang="ts">
import {
    ref,
    provide,
} from 'vue';
export default {
    name: 'App',
    components: {},
    setup() {
        // 声明控制菜单栏显隐的变量
        const menuVisible = ref(false)
        // 将值通过provide进行组件之间传递，可隔代，
        // provide传递，inject接收，但是建议用于高阶组件，不建议日常项目使用
        provide('menuVisible', menuVisible)
    }
}
</script>
