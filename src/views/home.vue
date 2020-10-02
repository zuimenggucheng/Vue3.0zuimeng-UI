<template>
<div class="topnavAndBanner">
    <Topnav></Topnav>
    <div class='banner'>
        <h1>醉梦UI</h1>
        <h2>一个基于Vue3.0的UI框架</h2>
        <p class="actions">
            <a href="https://github.com/zuimenggucheng/Vue3.0zuimeng-UI">GitHub</a>
            <router-link to="/doc">开始</router-link>
        </p>
    </div>
    <div class="features">
    </div>
</div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {
        Topnav,
    },
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

.topnavAndBanner {
    background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    margin: 64px auto;
    width: 400px;

    @media (min-width: 800px) {
        width: 800px;
    }

    @media (min-width: 1200px) {
        width: 1200px;
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {
            width: 400px;
            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text
            }
        }
    }
}

.banner {
    color: $color;
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: $green;
            color: white;
            display: inline-block;
            padding: 8px 24px;
            border-radius: $border-radius;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>
