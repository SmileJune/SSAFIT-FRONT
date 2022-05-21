<template>
  <div>
    <div v-for="(review, idx) in TimelineList" :key="idx">
    <!--실험시작-->
  
    <!--실험끝-->
      <div>{{ review.userId }}</div>
      <div>{{ review.title }}</div>
      <div>{{ review.content }}</div>
      <div>{{ distance[idx] }}</div>
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      distance: [],
    };
  },
  computed: {
    ...mapState(["TimelineList"]),
  },

  created() {
    if (sessionStorage.getItem("access-token")) {
      this.$store.dispatch("getTimelineList");
      this.setDistance();
    }
  },
  methods: {
    setDistance() {
      console.log(this.TimelineList);
      let arr = new Array(this.TimelineList.length);
      let now = new Date();
      for (let i = 0; i < this.TimelineList.length; i++) {
        let before = new Date(this.TimelineList[i].date);
        let distance = now - before;
        distance = distance / 1000 / 60 / 60 / 24 / 12;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "년 전";
          continue;
        }
        distance = distance * 12;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "달 전";
          continue;
        }
        distance = distance * 24;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "시간 전";
          continue;
        }
        distance = distance * 60;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "분 전";
          continue;
        } else {
          distance = distance * 60;
          arr[i] = Math.floor(distance) + "초 전";
        }
      }
      this.distance = arr;
    },
  },
};
</script>

<style>
/* 실험 시작 */

/* 실험 끝 */
</style>