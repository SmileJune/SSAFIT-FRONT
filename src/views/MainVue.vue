<template>
 <vue-scroll-snap :fullscreen="true">
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
    <div class="item"><img src="../assets/main.png" alt=""></div>
  </vue-scroll-snap>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";
export default {
  components: {VueScrollSnap},
};
</script>

<style scoped>
 .item {
    /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
    min-height: 500px;
  }

  .scroll-snap-container {
    height: 500px;
    width: 500px;
  }
</style>


