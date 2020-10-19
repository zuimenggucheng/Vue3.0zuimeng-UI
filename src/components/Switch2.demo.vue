<demo>
支持 disabled
</demo>
<template>
<zuiMengSwitch v-model:value="bool" disabled />
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
