<template>
  <div>
    <!-- <router-view /> -->
    <h1 v-if="isLogin">{{ user.nickname }} 님 🙌🏻</h1>
    <h1 v-if="isLogin">오늘도 SSAFIT과 함께 운동해요 💪🏽</h1>
    <br>
    <br>
    <div class="calda">
      <MyCalender></MyCalender>
      <MyDiary></MyDiary>
    </div>
    <TimelineVue></TimelineVue>
  </div>
</template>

<script>
import MyCalender from "@/components/diary/MyCalender.vue";
import MyDiary from "@/components/diary/MyDiary.vue";
import TimelineVue from "@/components/common/TimelineVue.vue";
import { mapState } from "vuex";
export default {
  name: "HomeView",
  computed: {
    ...mapState(["user", "isLogin"]),
  },
  components: {
    MyCalender,
    MyDiary,
    TimelineVue,
  },
};
</script>

<style scoped>
#main {
  width: 1050px;
  margin: 30px auto;
}

#my-schedule {
  display: flex;
  justify-content: space-around;
}
.calda {
  display: flex;
  justify-content: space-between;
}
</style>
