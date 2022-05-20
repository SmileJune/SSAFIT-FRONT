<template>
  <v-card max-width="1000" class="mx-auto">
    <v-container>
      <v-row dense>
        <v-col v-for="video in videoList" :key="video.no" cols="12">
          <v-card dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div class="text-center">
                <v-card-title
                  class="text-h5"
                  v-text="video.title"
                ></v-card-title>

                <v-card-subtitle v-text="video.channelName"></v-card-subtitle>
                <input
                  type="checkbox"
                  v-model="videoChoice"
                  :value="video.no"
                />선택
              </div>
              <div class="video">
                <div class="video-container">
                  <iframe
                    width="100%"
                    height="100%"
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
        <v-btn @click="choiceVideo()"> 운동 루틴 저장하기</v-btn>
      </v-row>
    </v-container>
  </v-card>
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
    ...mapState(["videoList", "date"]),
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

<style>
.video {
  width: 100%;
  max-width: 900px;
  margin: 20px auto;
  border-radius: 30px;
  background-color: #f0f0f0;
  padding: 40px;
  box-sizing: border-box;
}
.video-container {
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 50%;
}

iframe {
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>