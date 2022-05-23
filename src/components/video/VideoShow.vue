<template>
  <div>
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
      <div v-for="(video , idx) in somedayPlan" :key="idx">
      <template v-if="idx != somedayPlan.length -1">
      <v-stepper-step 
        :complete="el > idx + 1"
        :step = "idx + 1"
      >
        step {{idx + 1}}
      </v-stepper-step>

      <v-divider></v-divider>
      </template>
      <template v-else> 
      <v-stepper-step  :step="idx + 1">
        step {{idx + 1}}
      </v-stepper-step>
      </template>
      </div>
    </v-stepper-header>
    <v-stepper-items>
      <div v-for="(video2 , idx2) in somedayPlan" :key="idx2">
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
          @click= "slideVideo(idx2)"
        >
          Continue
        </v-btn>

        <v-btn text
        v-if="idx2 > 0"
        color="primary"
        @click="beforeVideo(idx2)">
          Cancel
        </v-btn>
      </v-stepper-content>
      </div>
    </v-stepper-items>
    </v-stepper>
    <!-- 축하 모달창 뜸 -->
      <template>
        <div class="text-center">
          <v-dialog
            v-model="isEnd"
            width="500"
          >
            <!-- <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="red lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Click Me
              </v-btn>
            </template> -->

            <v-card>
              <v-card-title class="congratulation-modal-header">
                <span>
                  운동을 끝내신 우리 {{user.nickname}}님 너무 멋져요!
                </span>
              </v-card-title>

              <v-card-text style="padding: 0">
                <img src="@/assets/congratulation.gif" alt="">
                <VideoGoodJob v-show="done"></VideoGoodJob>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="var(--color-blue4)"
                  text
                  @click="isEnd = false"
                >
                  닫기
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
      <v-easy-camera
    v-model="picture"></v-easy-camera>
    <!-- <VideoGoodJob v-show="done"></VideoGoodJob> -->
  </div> 
</template>

<script>
import { mapState } from "vuex";
import VideoGoodJob from "@/components/video/VideoGoodJob.vue";
import EasyCamera from 'easy-vue-camera';
export default {
  data() {
    return {
      done: false,
      el: 1,
      isEnd: false,
      picture : "",
    };
  },
  components: {
    VideoGoodJob,
    'v-easy-camera': EasyCamera,
  },
  computed: {
    ...mapState(["somedayPlan", "user"]),
  },
  methods: {
    finishExercise() {
      // 운동을 다 하고 클릭하면 goodJob 컴포넌트 보여줄 거야
      this.done = true;
      // console.log(this.done);
      // 모달창 띄우기
      this.isEnd = true;

    },
    slideVideo(idx2) {
      if(idx2 + 1 < this.somedayPlan.length) {
        this.el = idx2 + 2;
      } else {
        this.finishExercise();
      }
    },
    beforeVideo(idx2) {
      this.el = idx2;
    }
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
  font-size: 20px;
  color: white;
}
#teacher {
  text-align: center;
}
h1 {
  text-align: center;
}

.congratulation-modal-header {
  background-color: var(--color-blue2);
}
.v-easy-camera {
  max-width: 100px;
  max-height: 500px;
}
</style>
