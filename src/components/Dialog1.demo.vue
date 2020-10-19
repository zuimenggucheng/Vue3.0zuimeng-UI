<demo>
常规使用
</demo>
<template>
<div>
    <zuiMengButton @click="toggle">打开对话框</zuiMengButton>
    <zuiMengDialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
        <template v-slot:content>
            <strong>hi</strong>
            <div>hi2</div>
        </template>
        <template v-slot:title>
            <strong>加粗的标题</strong>
        </template>
    </zuiMengDialog>
</div>
</template>

<script lang="ts">
import {
    zuiMengDialog
}
from '../lib/index'
import {
    zuiMengButton
} from '../lib/index'
import {
    ref
} from 'vue'
export default {
    components: {
        zuiMengDialog,
        zuiMengButton
    },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        const f1 = () => {
            return false
        }
        const f2 = () => {}
        return {
            x,
            toggle,
            f1,
            f2
        }
    }
}
</script>
