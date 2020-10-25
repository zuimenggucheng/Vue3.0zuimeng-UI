<demo>
常规使用
</demo>
<template>
<div>
    <zuiMengButton @click="toggle">打开对话框</zuiMengButton>
    <zuiMengDialog v-model:visible="x" :closeOnClickOverlay="false" :save="f1" :cancel="f2"  >
        <template v-slot:content>
            <strong>hi word</strong>
            <div>你好啊世界</div>
        </template>
        <template v-slot:title>
           这个是一个弹出框
        </template>
         <template v-slot:footer>
         <zuiMengButton theme="button" level="main" @click="toggle">确认</zuiMengButton>
         <zuiMengButton @click="toggle" >取消</zuiMengButton>
        </template>
    </zuiMengDialog>
</div>
</template>

<script lang="ts">
import {
    zuiMengDialog,zuiMengButton

}
from '../lib/index'

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
        const f2 = () => {
        }
        return {
            x,
            toggle,
            f1,
            f2
        }
    }
}
</script>
