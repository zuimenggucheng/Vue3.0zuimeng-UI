<template>
<button class="zuimeng-switch" @click="toggle" :class="{'zuimeng-checked':value}">
    <span></span>
</button>
</template>

<script lang="ts">
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            // context.emit等价于vue2.0中的this.$emit()
            // 在setup不能使用this.$emit()，需要在methods中使用
            // Vue3.0中可以淘汰掉methods，和date
            // Vue3.0中触发外部函数时，外部监听名为update：xxx
            context.emit('update:value', !props.value)
        }
        return {
            toggle
        }
    },

}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;

.zuimeng-switch {
    height: $h;
    width: $h * 2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }

    &.zuimeng-checked {
        background: #1890ff;

        >span {
            left: calc(100% - #{$h2} - 2px);
        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.zuimeng-checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }
}
</style>
