<template>
  <div>
    {{ name }}:
    <button @click="say">say</button>
    {{ mes }}
    <button @click="sendToDog">Send</button>
  </div>
</template>
<script>
// 导入混入配置
import { myMixin1, myMixin2 } from "../myMixin";

import pubsub from "pubsub.js";
export default {
  data() {
    return {
      name: "cat",
    };
  },
  mixins: [myMixin1, myMixin2],
  methods: {
    sendToDog() {
      // this.$bus.$emit("receive", this.name);

      pubsub.publish("receive", [this.name]);
    },
  },
};
</script>