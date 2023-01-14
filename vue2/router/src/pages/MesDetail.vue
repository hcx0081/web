<template>
  <ul>
    <!-- <li>Mes编号：{{ $route.params.id }}</li> -->
    <!-- <li>Mes标题：{{ $route.params.title }}</li> -->
    <li>Mes编号：{{ id }}</li>
    <li>Mes标题：{{ title }}</li>
  </ul>
</template>

<script>
export default {
  props: ["id", "title"],
};
</script>

<style>
</style>