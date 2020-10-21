<demo>
支持 disabled
</demo>
<template>
<zuiMengButton disabled theme="button">禁用按钮</zuiMengButton>
<zuiMengButton theme="link" disabled>禁用链接按钮</zuiMengButton>
<zuiMengButton theme="text" disabled>禁用按钮</zuiMengButton>
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
