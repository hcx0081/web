<template>
  <div>{{ name }}: <button @click="say">say</button> {{ mes }}</div>
</template>
<script>
// 导入混入配置
import { myMixin1, myMixin2 } from "../myMixin";

import pubsub from "pubsub.js";
export default {
  data() {
    return {
      name: "dog",
    };
  },
  mixins: [myMixin1, myMixin2],
  mounted() {
    // this.$bus.$on("receive", (data) => {
    //   console.log(`dog: I receive, your name is ${data}!`);
    // });

    this.pubId = pubsub.subscribe("receive", (data) => {
      console.log(`dog: I receive, your name is ${data}!`);
    });
  },
  // 在组件销毁之前解绑事件，否则占用全局作用域
  beforeDestroy() {
    // this.$bus.$off("receive");

    pubsub.unsubscribe(this.pubId);// 使用id解绑
  },
};
</script>