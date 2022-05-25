<template>
  <div id="main">
    <!-- <router-view /> -->
    <div data-aos="fade-in"
    data-aos-duration="1500">
    <h1 class="home-title" v-if="isLogin">{{ user.nickname }} 님 🙌🏻</h1>
    <h1 class="home-title" v-if="isLogin">오늘도 SSAFIT과 함께 운동해요 💪🏽</h1>
    <br>
    <br>
    </div>
    <div class="calda">
      <MyCalender></MyCalender>
      <MyDiary></MyDiary>
    </div>
    <TimelineVue></TimelineVue>
    <WeakPartVue></WeakPartVue>
  </div>
</template>

<script>
import MyCalender from "@/components/diary/MyCalender.vue";
import MyDiary from "@/components/diary/MyDiary.vue";
import TimelineVue from "@/components/common/TimelineVue.vue";
import WeakPartVue from "@/components/video/VideoWeakPart.vue";
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
    WeakPartVue,
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

.home-title {
  margin-top : 10px;
}
</style>
