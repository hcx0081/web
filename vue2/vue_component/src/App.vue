<template>
  <div>
    <!-- ref相当于id -->
    <Hello ref="hello"></Hello>
    <World></World>
    <button @click="showMes">Click</button>

    <School name="zs" :age="20"></School>

    <Cat></Cat>
    <Dog></Dog>

    <!-- 可直接使用插件功能 -->
    <button @click="sayHW">Click</button>

    <Father></Father>
  </div>
</template>
<script>
import Hello from "./components/Hello.vue";
import World from "./components/World.vue";

import School from "./components/School.vue";

import Cat from "./components/Cat.vue";
import Dog from "./components/Dog.vue";

import Father from "./components/Father.vue";

export default {
  name: "App",
  components: {
    Hello,
    World,
    School,
    Cat,
    Dog,
    Father,
  },
  methods: {
    showMes() {
      console.log(this.$refs.hello);// 输出该vc
      console.log(this.$refs);
    },
  },
};
</script>