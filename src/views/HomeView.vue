<template>
  <div>
    <router-view />
    <h1>{{ user.nickname }} 님 🙌🏻 </h1>
    <h1>오늘도 SSAFIT과 함께 운동해요 💪🏽</h1>
    <div class="calda">
      <MyCalender></MyCalender>
      <MyDiary></MyDiary>
    </div>
    <TimelineVue></TimelineVue>
    <GoodInfo />
  </div>
</template>

<script>
import GoodInfo from "@/components/common/GoodInformation.vue";
import MyCalender from "@/components/diary/MyCalender.vue";
import MyDiary from "@/components/diary/MyDiary.vue";
import TimelineVue from "@/components/common/TimelineVue.vue";
import { mapState } from 'vuex';
export default {
  name: "HomeView",
  computed: {
    ...mapState(['user'])
  },
  components: {
    GoodInfo,
    MyCalender,
    MyDiary,
    TimelineVue,
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
