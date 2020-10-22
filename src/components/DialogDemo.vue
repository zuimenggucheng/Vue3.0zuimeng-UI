<template>
<h1>Dialog 示例</h1>
<Demo :component="Dialog1Demo" />
<Demo :component="Dialog2Demo" />
<Attributes :columns='columns' :data="data" />

</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Attributes from "./Attributes.vue";
import   {columns}
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
        params: 'disabled',
        desc: '是否禁用',
        type: 'Boolean',
        select: 'true / false',
        default: 'false',
      },]
        return {
              data,
            columns,
            Dialog1Demo,
            Dialog2Demo
        }
    }

}
</script>
