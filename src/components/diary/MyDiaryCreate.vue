<template>
  <v-container>
    <div
      class="step1"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
    >
      <!-- <div class="step"> -->
      <h1>step1</h1>
      <h1>오늘은 어느 부위를 운동해볼까요?</h1>
      <!-- </div> -->
      <div class="select-part">
        <div>
          <input
            type="radio"
            id="body"
            name="drone"
            value="1"
            v-model="partNo"
          />
          <label for="body">전신</label>
        </div>
        <div>
          <input
            type="radio"
            id="top"
            name="drone"
            value="2"
            v-model="partNo"
          />
          <label for="top">상체</label>
        </div>
        <div>
          <input
            type="radio"
            id="bottom"
            name="drone"
            value="3"
            v-model="partNo"
          />
          <label for="bottom">하체</label>
        </div>
        <div>
          <input
            type="radio"
            id="abs"
            name="drone"
            value="4"
            v-model="partNo"
          />

          <label for="abs">복부</label>
        </div>
      </div>
      <v-btn rounded color="black" dark @click="showStep2">다음 단계로</v-btn>
    </div>

    <div
      class="step2"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
      v-show="okStep2"
    >
      <h1>step2</h1>
      <h1>운동 강도를 골라주세요!</h1>
      <v-rating
        full-icon="★"
        empty-icon="☆"
        hover
        v-model="difficulty"
        background-color="grey lighten-1"
        color="red lighten-3"
        large
      ></v-rating>

      {{ difficulty }}
      <v-btn rounded color="black" dark @click="showStep3">다음 단계로</v-btn>
    </div>

    <div
      class="step3"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
      v-show="okStep3"
    >
      <h1>step3</h1>
      <h1>어디에서 운동을 하실건가요?</h1>
      <div class="work-out-spot">
        <div>
          <v-img
            max-width="100"
            max-height="100"
            @click="spotNo = 1"
            src="@/assets/gym.png"
          />
        </div>
        <div class="img-box">
          <v-img
            max-width="100"
            max-height="100"
            @click="spotNo = 2"
            src="@/assets/hometraing.png"
          />
        </div>
      </div>
      {{ spotNo }}
      <v-btn rounded color="black" dark @click="showVideos">다 골랐어요!</v-btn>
    </div>
    <video-select v-if="finish"></video-select>
  </v-container>
</template>

<script>
import videoSelect from "@/components/video/VideoSelect.vue";
import { mapState } from "vuex";

export default {
  name: "MyDiaryCreate",
  data() {
    return {
      partNo: "",
      difficulty: "",
      spotNo: "",
      finish: false,
      okStep2: false,
      okStep3: false,
    };
  },
  computed: {
    ...mapState(["videoList"]),
  },
  methods: {
    showVideos() {
      const condition = {
        partNo: this.partNo,
        difficulty: this.difficulty,
        spotNo: this.spotNo,
      };
      console.log(condition);
      this.$store.dispatch("showVideos", condition);
      this.finish = true;
    },
    showStep2() {
      this.okStep2 = true;
    },
    showStep3() {
      this.okStep3 = true;
    },
  },
  components: {
    videoSelect,
  },
};
</script>

<style>
.work-out-spot {
  display: flex;
}

.step {
  height: 50px;
}

.select-part label {
  font-size: 20px;
  margin: 5px;
}

.select-part {
  margin: 20px;
}

.img-box {
  border-radius: 70%;
}

.v-rating {
  height: 200px;
  display: flex;
}

.v-container {
  width: 1023px;
  margin: 0 auto;
  overflow: auto;
}

.v-application--wrap {
  min-height: unset;
}

/* .step1 {
  background-color: yellow;
  height: 100vh;
  display: flexbox;
} */
</style>