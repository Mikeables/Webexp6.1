<template>
  <div class="clock-container">
    <div class="clock-display">
      <span>{{ hours }}</span>:<span>{{ minutes }}</span>:<span>{{ seconds }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClockComponent',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = now.getMinutes();
      this.seconds = now.getSeconds();
    },
  },
};
</script>

<style scoped>
.clock-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* 使容器高度为视口高度 */
}

.clock-display {
  font-size: 48px; /* 放大字体 */
  font-weight: bold;
  border: 5px solid black; /* 添加黑色边框 */
  border-radius: 50%; /* 使边框变成圆形 */
  padding: 20px; /* 添加内边距 */
  text-align: center; /* 文字居中 */
}
</style>