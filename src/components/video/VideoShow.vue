<template>
  <div>
    <!-- 플랜 비디오만큼 반복 돌변서 보여주기 -->
    <div class="video-container">
      <hooper>
        <slide v-for="video in somedayPlan" :key="video.no" cols="14">
          <iframe
            width="1000px"
            height="1000px"
            :src="video.url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>

    <v-btn rounded color="black" small dark @click="finishExercise"
      >운동 끝!!</v-btn
    >
    <VideoGoodJob v-show="done" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoGoodJob from "@/components/video/VideoGoodJob.vue";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
export default {
  data() {
    return {
      done: false,
    };
  },
  components: {
    VideoGoodJob,
    Hooper,
    Slide,
    HooperNavigation,
  },
  computed: {
    ...mapState(["somedayPlan"]),
  },
  methods: {
    finishExercise() {
      // 운동을 다 하고 클릭하면 goodJob 컴포넌트 보여줄 거야
      this.done = true;
    },
  },
};
</script>

<style>
.video-container {
  position: relative;
  width: 1000px;
  height: 1000px;
  padding-top: 0;
}

iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 1000px;
  height: 500px;
}
</style>
