<template>
  <div>
    <div id="teacher"><img src="@/assets/followme.jpg" alt=""></div>
    <h1>따라만 하세요 유후 🏋🏽‍♀️</h1>
    <!-- 플랜 비디오만큼 반복 돌면서 보여주기
    <div class="video-container">
      <v-col cols="14" v-for="video in somedayPlan" :key="video.no">
      <h3>{{video.title}} 🔥</h3>
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
      <v-btn rounded light @click="showStep2" color="var(--color-blue5)"
        >운동 끝!!</v-btn
      >
      <VideoGoodJob v-show="done"></VideoGoodJob>
    </div> -->
    <v-stepper v-model="el">
    <v-stepper-header>
      <v-col v-for="(video , idx) in somedayPlan" :key="idx">
      <div v-if="idx != somedayPlan.length -1">
      <v-stepper-step 
        :complete="el > idx + 1"
        :step = "idx + 1"
      >
        step {{idx + 1}}
      </v-stepper-step>

      <v-divider></v-divider>
      </div>
      <div v-else> 
      <v-stepper-step  :step="idx + 1">
        step {{idx + 1}}
      </v-stepper-step>
      </div>
      </v-col>
    </v-stepper-header>
    <v-stepper-items>
      <v-col v-for="(video2 , idx2) in somedayPlan" :key="idx2">
      <v-stepper-content :step="idx2 + 1">
        
        <h3>{{video2.title}} 🔥</h3>
        <div class="video">
          <v-card>
            <iframe
              width="1000px"
              height="1000px"
              :src="video2.url"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </v-card>
        </div>
      
        <v-btn
          color="primary"
          @click= "el = idx + 1"
        >
          Continue
        </v-btn>

        <v-btn text
        color="primary">
          Cancel
        </v-btn>
      </v-stepper-content>
      </v-col>
    </v-stepper-items>
    </v-stepper>
    <v-btn rounded light @click="finishExercise" color="var(--color-blue5)"
        >운동 끝!!</v-btn
      >
      <VideoGoodJob v-show="done"></VideoGoodJob>
  </div> 
</template>

<script>
import { mapState } from "vuex";
import VideoGoodJob from "@/components/video/VideoGoodJob.vue";
export default {
  data() {
    return {
      done: false,
      el: 1,
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

<style scoped>
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

h3 {
  margin: 0
}

.v-btn {
  width: 250px;
  font-size: 25px;
  color: white;
}
#teacher {
  text-align: center;
}
h1 {
  text-align: center;
}
</style>
