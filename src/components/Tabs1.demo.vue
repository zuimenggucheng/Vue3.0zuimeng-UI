<demo>
常规使用
</demo>
<template>
<zuiMengTabs v-model:selected="x">
    <zuiMengTab title="导航1">内容1</zuiMengTab>
    <zuiMengTab title="导航2">内容2</zuiMengTab>
</zuiMengTabs>
</template>

<script lang="ts">
import {
    zuiMengTab,
    zuiMengTabs
} from '../lib/index'

import {
    ref
} from 'vue'
export default {
    components: {
        zuiMengTab,
        zuiMengTabs
    },
    setup() {
        const x = ref('导航2')
        return {
            x
        }
    }
}
</script>
