<template>
  <div id="container">
    <Category title="LAN" :dataList="lanList">
      <!-- 填充插槽 -->
      <img src="./assets/logo.png" />
    </Category>
    <Category title="FrameWork" :dataList="frameWorkList">
      <!-- <img src="./assets/logo.png" slot="favicon" /> -->
      <!-- <img src="./assets/logo.png" slot="favicon" /> -->
      <template v-slot:favicon><!-- 可以简写为#favicon，v-slot只可以标注在template标签上 -->
        <img src="./assets/logo.png" />
        <img src="./assets/logo.png" />
      </template>
    </Category>

    <Game title="Game">
      <!-- 作用域插槽必须使用<template>标签接收数据 -->
      <!-- scope接收到一个对象，对象中包含传递过来的数据，即接收的数据。支持结构赋值 -->
      <template scope="{gameList}"><!-- scope等同于slot-scope -->
        <ul>
          <li v-for="(data, index) in gameList" :key="index">{{ data }}</li>
        </ul>
      </template>
    </Game>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Game from "./components/Game.vue";
export default {
  name: "App",
  components: {
    Category,
    Game,
  },
  data() {
    return {
      lanList: ["Java", "C", "C++"],
      frameWorkList: ["Vue", "React", "Angular"],
    };
  },
  mounted() { 
    console.log(this);
  }
};
</script>
<style scoped>
#container {
  display: flex;
  justify-content: space-around;
}
</style>
