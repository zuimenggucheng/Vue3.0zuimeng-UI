<demo>
一键打开 Dialog
</demo>
<template>
<div>
    <zuiMengButton @click="showDialog">打开对话框</zuiMengButton>
</div>
</template>

<script lang="ts">
import {
    zuiMengButton
} from '../lib/index'
import {
    ref,
    h
} from 'vue'
import {
    openZuiMengDialog
} from '../lib/index'
export default {
    components: {
        zuiMengButton
    },
    setup() {
        const showDialog = () => {
            openZuiMengDialog({
                title: h('strong', {}, '标题'),
                content: '你好',
                ok() {

                },
                cancel() {

                }
            })
        }
        return {
            showDialog
        }
    }
}
</script>
