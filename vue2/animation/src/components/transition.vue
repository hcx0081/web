<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <div>
        <h1 v-show="isShow" style="margin-left: 20px">hello</h1>
        <h1 v-show="isShow" style="margin-left: 20px">world</h1>
      </div>
    </transition>
    <transition-group appear>
      <h1 v-show="isShow" style="margin-left: 20px" key="1">hello</h1>
      <h1 v-show="isShow" style="margin-left: 20px" key="2">world</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  transform: translateX(-500px);
}
.v-enter-active,
.v-leave-active {
  transition: 1s ease;
}
.v-enter-to,
.v-leave {
  transform: translateX(0);
}
</style>