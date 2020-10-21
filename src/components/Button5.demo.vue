<demo>
支持显示加载中
</demo>
<template>
<div>
    <zuiMengButton  loading>加载中</zuiMengButton>
    <zuiMengButton >加载完毕</zuiMengButton>
</div>
</template>

<script lang="ts">
import {
    zuiMengButton
} from "../lib/index";
export default {
    components: {
        zuiMengButton
    }
}
</script>
