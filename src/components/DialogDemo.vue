<template>
<h1>Dialog 示例</h1>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
<Attributes :columns='columns' :data="data" />
<Attributes :columns='slotColumns' :data="slotData" title="Slots" />


</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Attributes from "./Attributes.vue";
import   {columns,
slotColumns}
 from "./data";
import {
    ref
} from 'vue'
import Button from '../lib/Button.vue'
export default {
    components: {
        Demo,
        Attributes
    },
    setup() {
     const data=[
       {
        params: 'visible',
        desc: '是否展示',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
       {
        params: 'closeOnClickOverlay',
        desc: '是否点击空白地方关闭弹窗',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },
           {
        params: 'width',
        desc: '自定义弹出框宽度(单位为百分比)',
        type: 'String',
        select: '',
        default: '50',
      },
      ]
       const slotData=[
       {
        params: 'title',
        desc: '弹出框标题区域',
     
      },
      {
        params: 'content',
        desc: '弹出框内容展示区域',
     
      },
      {
        params: 'footer',
        desc: '弹出框底部区域',
     
      },
     
      ]
  
        return {
              data,
            slotData,
            columns,
            slotColumns,
            Dialog1Demo,
            Dialog2Demo
        }
    }

}
</script>
