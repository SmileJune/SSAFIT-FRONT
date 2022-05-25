<template>
  <div id="main">
    <h3 v-show="videoList.length == 0">
      죄송해요 조건에 맞는 운동 영상이 없네요 😂
    </h3>
    <h1 v-show="videoList.length != 0">
      {{ user.nickname }}님이 고르실 운동은? 🤔
    </h1>
    <v-card width="1023" class="mx-auto" v-show="videoList.length != 0">
      <v-container width="1023">
        <v-row dense>
          <v-col v-for="video in videoList" :key="video.no" cols="12">
            <v-card>
              <div>
                <!-- <div class="video-and-check-box"> -->
                  <div class="video-info">
                    <v-card-title
                    class="text-h5"
                    v-text="video.title"
                  ></v-card-title>
                  <v-card-subtitle v-text="video.channelName"></v-card-subtitle>
                  </div>
                <!-- </div> -->
                  <div class="check-box">
                    <input
                    type="checkbox"
                    v-model="videoChoice"
                    :value="video.no"
                    class="text-h5 bold ml-10"
                    :id="video.no" 
                    name="video-chk"
                    />
                  <label :for="video.no" class="chk-ment" :value="video.no">이 운동 할래요!</label>
                  </div>
                <div class="video">
                  <div class="video-container">
                    <iframe
                      width="980px"
                      height="300px"
                      :src="video.url"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </v-card>
          </v-col>
          <br>
          <v-btn rounded dark color="var(--color-blue5)" @click="choiceVideo()">
            운동 루틴 저장하기</v-btn
          >
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      radioValues: "",
      videoChoice: [],
    };
  },
  computed: {
    ...mapState(["videoList", "date", "user"]),
  },
  methods: {
    choiceVideo() {
      console.log(this.videoChoice);
      const plan = {
        date: this.date,
        videoList: this.videoChoice,
      };
      this.$store.dispatch("makePlan", plan);
    },
  },
};
</script>

<style scoped>
#main {
  width : 1050px;
  margin : 0 auto;
}

.video {
  width: 100%;
  max-width: 900px;
  /* margin: 20px auto; */
  border-radius: 30px;
  background-color: #f0f0f0;
  /* padding: 40px; */
  box-sizing: border-box;
}
.video-container {
  position: relative;
  width: 980px;
  height: 500px;
  /* overflow: hidden; */
  /* padding-top: 50%; */
}
.v-card {
  overflow: hidden;
}
iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 980px;
  height: 100%;
}

h3 {
  margin: 50px 0;
}

.video-and-check-box {
  display: flex;
  justify-content: space-between;
}

.check-box {
  padding: 0px;
  line-height: 86px;
}

.chk-ment {
  color: var(--color-blue5);
  font-weight: bold;
  font-size: 20px;

}

.video-chk{
  zoom: 1.3;
}

.v-btn {
  margin: 16px;
}
</style>
