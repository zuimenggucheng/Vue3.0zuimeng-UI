<template>
<div class="zuimeng-tabs">
    <div class="zuimeng-tabs-nav" ref="container">
        <div class="zuimeng-tabs-nav-item" v-for="(t,index) in titles" :ref="el => { if (t===selected) selectedItem = el }" @click="select(t)" :class="{selected: t=== selected}" :key="index">{{t}}</div>
        <div class="zuimeng-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="zuimeng-tabs-content">
        <component :is="current" :key="current.props.title" />
    </div>
</div>
</template>

<script lang="ts">
import zuiMengTab from './Tab.vue'

import {
    computed,
    ref,
    onMounted,
    watchEffect,

} from 'vue'
export default {
    components: {
        zuiMengTab
    },
    props: {
        selected: {
            type: String,

        }
    },
    setup(props, context) {
        const selectedItem = ref < HTMLDivElement > (null)
        const indicator = ref < HTMLDivElement > (null)
        const container = ref < HTMLDivElement > (null)
        onMounted(() => {
            // vue3.0中新增的方法会监听引用的的依赖并在依赖改变时候调用此方法
            // 但是此方法在初始化的时候会在onMounted周期之前调用一次但是，此时dom节点并未挂载，需要留意
            watchEffect(() => {
                const {
                    width
                } = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                // es6中的解构重命名
                const {
                    left: left1
                } = container.value.getBoundingClientRect()
                // es6中的解构重命名
                const {
                    left: left2
                } = selectedItem.value.getBoundingClientRect()
                const left = left2 - left1
                indicator.value.style.left = left + 'px'
            }, {
                flush: 'post'
            })
        })
        // 拿到子组件节点信息
        // context.slots.default是个函数调用之后会返回组件中子节点信息
        // 
        const defaults = context.slots.default()
        console.log(defaults)
        // 直接用获取到的子组件的的type和引入的组件类型相比较
        defaults.forEach((tag) => {
            //@ts-ignore
            if (tag.type.name !== zuiMengTab.name) {
                throw new Error('zuiMengTabs 子标签必须是 zuiMengTab')
            }
        })
        // 判断哪个title显示什么内容
        const current = computed(() => {
            // find方法低版本浏览器不支持
            return defaults.find(tag => tag.props.title === props.selected)
        })
        // 获取到所有传递过来的子组件的title
        const titles = defaults.map((tag) => {
            return tag.props.title
        })
        // 点击之后更改title
        const select = (title: string) => {
            context.emit('update:selected', title)
        }
        return {
            select,
            titles,
            current,
            defaults,
            selectedItem,
            indicator,
            container
        }

    }

}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.zuimeng-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            background: $blue;
            left: 0;
            bottom: -1px;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>
