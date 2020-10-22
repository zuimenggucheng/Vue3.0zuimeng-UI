<template>
<div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
    <Attributes :columns='columns' :data="data" />
</div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Demo from './Demo.vue'
import Attributes from "./Attributes.vue";
import   {columns}
 from "./data";
import {
    ref
} from 'vue'
export default {
    components: {
        Demo,
        Attributes
    },
    setup(props, context) {
        //此处注意传值时必须要使用ref进行挂载不然父子组件的交互无法进行
        const switchBoolan = ref(true)
                const data=[
       {
        params: 'disabled',
        desc: '是否禁用',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
        ]
        return {
              data,
            columns,
            Switch1Demo,
            Switch2Demo,
        }
    },

}
</script>
