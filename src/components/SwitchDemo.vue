<template>
<Switch v-model:value="switchBoolan" />
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue'
import {
    ref
} from 'vue'
export default {
    components: {
        Switch
    },
    setup(props, context) {
        //此处注意传值时必须要使用ref进行挂载不然父子组件的交互无法进行
        const switchBoolan = ref(true)
        return {
            switchBoolan
        }
    },

}
</script>
