<template>
  <div>
    <!-- 플랜 비디오만큼 반복 돌변서 보여주기 -->
    <div class="video-container">
      <v-col cols="14" v-for="video in somedayPlan" :key="video.no">
        <div class="video">
          <v-card>
            <iframe
              width="1000px"
              height="1000px"
              :src="video.url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </div>
      </v-col>
      <v-btn rounded color="black" small dark @click="finishExercise"
        >운동 끝!!</v-btn
      >
      <VideoGoodJob v-show="done"></VideoGoodJob>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VideoGoodJob from "@/components/video/VideoGoodJob.vue";
export default {
  data() {
    return {
      done: false,
    };
  },
  components: {
    VideoGoodJob,
  },
  computed: {
    ...mapState(["somedayPlan"]),
  },
  methods: {
    finishExercise() {
      // 운동을 다 하고 클릭하면 goodJob 컴포넌트 보여줄 거야
      this.done = true;
      console.log(this.done);
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
.video {
  width: 1000px;
  height: 500px;
}

iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: relative;
  width: 1000px;
  height: 500px;
}
</style>
