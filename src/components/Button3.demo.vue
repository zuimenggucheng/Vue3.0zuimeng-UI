<demo>
支持 level
</demo>
<template>
<div>
    <div>
        <zuiMengButton theme="button" level="main">主要按钮</zuiMengButton>
        <zuiMengButton theme="button">普通按钮</zuiMengButton>
        <zuiMengButton theme="button" level="waring">警告按钮</zuiMengButton>
        <zuiMengButton theme="button" level="danger">危险按钮</zuiMengButton>
    
    </div>
    <div>
        <zuiMengButton theme="link" level="main">主要链接按钮</zuiMengButton>
        <zuiMengButton theme="link">普通链接按钮</zuiMengButton>
        <zuiMengButton theme="link" level="waring">警告链接按钮</zuiMengButton>
        <zuiMengButton theme="link" level="danger">危险链接按钮</zuiMengButton>
    
    </div>
    <div>
        <zuiMengButton theme="text" level="main">主要文字按钮</zuiMengButton>
        <zuiMengButton theme="text">普通文字按钮</zuiMengButton>
        <zuiMengButton theme="text" level="waring">警告文字按钮</zuiMengButton>
        <zuiMengButton theme="text" level="danger">危险文字按钮</zuiMengButton>
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
