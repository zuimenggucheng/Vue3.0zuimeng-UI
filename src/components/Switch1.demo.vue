<demo>
常规用法
</demo>

<template>
<zuiMengSwitch v-model:value="bool" />
</template>

<script lang="ts">
import {
    zuiMengSwitch
} from '../lib/index'
import {
    ref
} from 'vue'
export default {
    components: {
        zuiMengSwitch,
    },
    setup() {
        const bool = ref(false)
        return {
            bool
        }
    }
}
</script>
