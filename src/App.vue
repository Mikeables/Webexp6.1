<template>
  <div id="app">
    <h1 class="title">This is my clock</h1>
    <ClockComponent />
  </div>
</template>

<script>
import ClockComponent from './components/ClockComponent.vue';

export default {
  name: 'App',
  components: {
    ClockComponent,
  },
};
</script>

<style scoped>
.title {
  text-align: center; /* 标题居中 */
  color: darkblue; /* 标题变成深蓝色 */
  margin-bottom: 10px; /* 减少标题和时钟之间的间距 */
}
</style>