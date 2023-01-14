<template>
  <div class="father">
    <!-- 标签上绑定自定义事件 -->
    <!-- <Son @myEvent="getSonScore"></Son> -->

    <Son ref="Son"></Son>
  </div>
</template>

<script>
import Son from "./Son.vue";
export default {
  components: {
    Son,
  },
  methods: {
    /* 事件触发函数 */
    getSonScore(data) {
      console.log("let me look look");
      console.log(data);
    },
  },
  mounted() {
    // $on绑定自定义事件
    this.$refs.Son.$on("myEvent", this.getSonScore);
  },
};
</script>

<style scoped>
.father {
  width: 200px;
  height: 200px;
  background-color: aqua;
}
</style>