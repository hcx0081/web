<template>
  <div>{{ name }}, {{ age + 1 }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },

methods: {
},

  // 数组形式
  //   props: ["name", "age"],

  // 检测类型形式
  //   props: {
  //     name: String,
  //     age: Number,
  //   },

  // 完整形式
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99,
    },
  },
};
</script>