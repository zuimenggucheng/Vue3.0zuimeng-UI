<template>
<div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Attributes :columns='columns' :data="data" />
</div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import Attributes from "./Attributes.vue";
import   {columns}
 from "./data";
export default {
    components: {
        Demo,
        Attributes
    },
    setup() {
        const data=[
            {
        params: 'theme',
        desc: '按钮类型',
        type: 'boolean',
        select: 'link / text / button',
        default: 'button',
      },
       {
        params: 'size',
        desc: '按钮大小',
        type: 'String',
        select: 'big / small / normal',
        default: 'normal',
      },
       {
        params: 'level',
        desc: '提示类型',
        type: 'String',
        select: 'main / waring / danger / normal',
        default: 'normal',
      },
       {
        params: 'disabled',
        desc: '是否禁用',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
       {
        params: 'loading',
        desc: '是否加载',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
        ]
      
        return {
            data,
            columns,
            Button1Demo,
            Button2Demo,
            Button3Demo,
            Button4Demo,
            Button5Demo
        };
    }

}
</script>
