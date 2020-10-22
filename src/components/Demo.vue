<template>
<div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
        <component :is="component" />
    </div>
    <div class="demo-actions">
        <zuiMengButton @click="toggleCode" v-if="!codeVisible">查看代码</zuiMengButton>
        <zuiMengButton @click="toggleCode" v-else>隐藏代码</zuiMengButton>
    </div>
    <div class="demo-code" v-if="codeVisible">
        <pre class="language-html" v-html="html" />
    </div>

</div>
</template>

<script lang="ts">
import {
    zuiMengButton
} from "../lib/index";
import 'prismjs';
// import 'prismjs/themes/prism.css'
import {
    computed,
    ref
} from 'vue';
const Prism = (window as any).Prism
export default {
    components: {
        zuiMengButton
    },
    props: {
        component: Object
    },
    setup(props) {
        const buttonShow: Boolean = true
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        const toggleCode = () => {
            codeVisible.value = !codeVisible.value
        }
        const codeVisible = ref(false)
        return {
            Prism,
            html,
            codeVisible,
            toggleCode,
            buttonShow
        }
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>
