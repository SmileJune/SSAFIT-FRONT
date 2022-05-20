<template>
  <div>
    <router-view />
    <div class="calda">
      <MyCalender></MyCalender>
      <MyDiary></MyDiary>
    </div>
    <GoodInfo />
  </div>
</template>

<script>

import GoodInfo from "@/components/common/GoodInformation.vue";
import MyCalender from "@/components/diary/MyCalender.vue";
import MyDiary from "@/components/diary/MyDiary.vue";

export default {
  name: "HomeView",
  components: {
    GoodInfo,
    MyCalender,
    MyDiary,
  },
};
</script>

<style>
#my-schedule {
  display: flex;
  justify-content: space-around;
}
.calda {
  display: flex;
  justify-content: center;
}
</style>
