<template>
<button class="zuimeng-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="zuimeng-loadingIndicator"></span>
    <slot />
</button>
</template>

<script lang="ts" setup='props,context'>
import {
    computed,
    SetupContext
} from "vue";
declare const props: {
  theme: boolean;
  level: boolean; 
  disabled: String; 
  loading: boolean;
  size:String
}
declare const context: SetupContext
export default {
    props: {
        theme: {
            type: Boolean,
            default: "button",

        },
        size: {
            type: String,
            default: "normal",
        },
        level: {
            type: String,
            default: "normal",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
}
        // 从props中拿到自己想要的参数
    export const {
            theme,
            size,
            level,
            loading
        } = props;

        // 书写计算属性
        // 这是vue3.0中新的语法
    export const classes = computed(() => {
            return {
                [`zuimeng-theme-${theme}`]: theme,
                [`zuimeng-size-${size}`]: size,
                [`zuimeng-level-${level}`]: level,
            };
        })
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
$grey: grey;
$yellow: #e3af00;
$black: #000;


.zuimeng-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.zuimeng-theme-link {
        border-color: transparent;
        box-shadow: none;
        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }

    &.zuimeng-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.zuimeng-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.zuimeng-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }

    &.zuimeng-theme-button {
        &.zuimeng-level-main {
            background: $blue;
            color: white;
            border-color: $blue;
            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }

        &.zuimeng-level-danger {
            background: $red;
            border-color: $red;
            color: white;

            &:hover,
            &:focus {
                background: darken($red, 10%);
                border-color: darken($red, 10%);
            }
        }

        &.zuimeng-level-waring {
            background: $yellow;
            border-color: $yellow;
            color: white;

            &:hover,
            &:focus {
                background: darken($yellow, 10%);
                border-color: darken($yellow, 10%);
            }
        }
    }

    &.zuimeng-theme-link {
          &.zuimeng-level-main {
            color: $blue;
            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }
        &.zuimeng-level-danger {
            color: $red;
            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }
        &.zuimeng-level-waring {
            color: $yellow;
            &:hover,
            &:focus {
                color: darken($yellow, 10%);
            }
        }
    }

    &.zuimeng-theme-text {
        &.zuimeng-level-main {
            color: $blue;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.zuimeng-level-danger {
            color: $red;

            &:hover,
            &:focus {
                color: darken($red, 10%);
            }
        }

        &.zuimeng-level-waring {
            color: $yellow;

            &:hover,
            &:focus {
                color: darken($yellow, 10%);
            }
        }
    }

    &.zuimeng-theme-button {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.zuimeng-theme-link,
    &.zuimeng-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $grey;
        }
    }

    >.zuimeng-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: zuimeng-spin 1s infinite linear;
    }
}

@keyframes zuimeng-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
