# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {zuiMengSwitch, zuiMengButton, zuiMengTabs, zuiMengTab,zuiMengDialog} from "zuimeng-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <zuiMengButton>按钮</zuiMengButton>
  </div>
</template>
<script>
import {zuiMengSwitch, zuiMengButton, zuiMengTabs, zuiMengTab,zuiMengDialog} from "zuimeng-ui"
export default {
  components: {zuiMengButton}
}
</script>
```