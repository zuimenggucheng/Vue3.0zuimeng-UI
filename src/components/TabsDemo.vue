<template>
<div>Tabs 示例</div>
<h1>示例1</h1>
<zuiMeng-Tabs v-model:selected="tabModel">
    <zuiMeng-Tab title="导航1">内容1</zuiMeng-Tab>
    <zuiMeng-Tab title="导航2">内容2</zuiMeng-Tab>
    <zuiMeng-Tab title="导航3">内容3</zuiMeng-Tab>
</zuiMeng-Tabs>
</template>

<script lang="ts">
import zuiMengTabs from '../lib/Tabs.vue'
import zuiMengTab from '../lib/Tab.vue'
import {
    ref
} from 'vue'

export default {
    components: {
        zuiMengTabs,
        zuiMengTab
    },

    setup(props, context) {
        let tabModel: string = ref('导航1')
        return {
            tabModel
        }
    }

}
</script>
