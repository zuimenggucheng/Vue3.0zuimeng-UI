<demo>
支持 size
</demo>
<template>
<div>
    <div>
        <zuiMengButton size="big">大大大</zuiMengButton>
        <zuiMengButton>普普通</zuiMengButton>
        <zuiMengButton size="small">小小小</zuiMengButton>
    </div>
    <div>
        <zuiMengButton theme="link" size="big">大大大</zuiMengButton>
        <zuiMengButton theme="link">普普通</zuiMengButton>
        <zuiMengButton size="small" theme="link">小小小</zuiMengButton>
    </div>
    <div>
        <zuiMengButton size="big" theme="text">大大大</zuiMengButton>
        <zuiMengButton theme="text">普普通</zuiMengButton>
        <zuiMengButton size="small" theme="text">小小小</zuiMengButton>
    </div>
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
