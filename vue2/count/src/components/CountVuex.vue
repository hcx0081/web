<template>
  <div>
    <h3>当前求和为：{{ sum }}</h3>
    <h5>当前求和*10为：{{ bigSum }}</h5>
    <select name="" id="" v-model="n">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <!-- <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button> -->

    <!-- 需要自己传入参数，否则参数为事件对象 -->
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
// 引入
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      n: 1,
    };
  },
  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },

    // 相当于如上
    // ...mapState({ sum: "sum" }),
    ...mapState(["sum"]), // 数组写法，前提是计算属性名称要与state中的数据名称相同

    ...mapGetters({ bigSum: "bigSum" }),
  },
  methods: {
    // increment() {
    //   this.$store.dispatch("incre", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECRE", this.n); // 直接访问mutations
    // },
    // incrementOdd() {
    //   this.$store.dispatch("increOdd", this.n);
    // },
    // incrementWait() {
    //   this.$store.dispatch("increWait", this.n);
    // },

    // 相当于如上，也可以使用数组写法，前提是方法名称要与actions或mutations中的方法名称相同
    // 会自动调用dispatch()
    ...mapActions({
      increment: "incre",
      incrementOdd: "increOdd",
      incrementWait: "increWait",
    }),
    // 会自动调用commit()
    ...mapMutations({ decrement: "DECRE" }),
  },
};
</script>

<style>
button,
select {
  margin-right: 5px;
}
</style>