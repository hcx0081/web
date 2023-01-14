<template>
  <div class="son">
    <button @click="sendExam">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: {
        chinese: 100,
        english: 100,
        math: 100,
      },
    };
  },
  methods: {
    sendExam() {
      /* 触发事件 */
      this.$emit("myEvent", this.score);
    },
  },
};
</script>

<style scoped>
.son {
  width: 100px;
  height: 100px;
  background-color: pink;
}
</style>