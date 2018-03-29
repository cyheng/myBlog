<template>
  <canvas id="canvas"></canvas>
</template>
<script>
import background from "./background.js";
export default {
  name: "background",
  mounted() {
    background();
  }
};
</script>


<style lang="scss" scoped>
#canvas {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  text-align: center;
  vertical-align: baseline;
  background: #efefef;
}
</style>
