<template>
  <div>
      <div class="container">
        <div class="step1">
          <div class="wrapper fadeInDown">
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
            <v-btn rounded dark @click="showStep2" color="var(--color-blue5)"
              >다음 단계로 👉🏼</v-btn
            >
          </div>
        </div>
        <div class="step2" v-show="okStep2">
          <div class="wrapper fadeInDown">
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
            <v-btn rounded dark @click="showStep3" color="var(--color-blue5)"
              >다음 단계로 👉🏼</v-btn
            >
          </div>
        </div>
        <div class="step3" v-show="okStep3">
          <div class="wrapper fadeInDown">
            <h1>step3</h1>
            <h1>어디에서 운동을 하실건가요?</h1>
            <div class="work-out-spot">
              <div class="img-gym">
                <v-img
                  id="img-gym"
                  max-width="200"
                  max-height="200"
                  @click="spotNo = 1"
                  src="@/assets/gym.png"
                />
                <div class="place">헬스장</div>
              </div>
              <div class="img-home">
                <v-img
                  id="img-home"
                  max-width="200"
                  max-height="200"
                  @click="spotNo = 2"
                  src="@/assets/hometraing.png"
                />
                <div class="place">집</div>
              </div>
            </div>
            <div class="finish">
              <v-btn rounded dark @click="showVideos" color="var(--color-blue5)"
                >다 골랐어요! 🙌🏻</v-btn
              >
            </div>
          </div>
        </div>
      <div class="fly">
        <!-- <div class="wrapper fadeInDown"></div> -->
        <v-progress-circular
          :rotate="-90"
          :size="250"
          :width="15"
          :value="value"
          color="primary"
        >
          {{ value }}
        </v-progress-circular>
      </div>
      </div>

    <video-select v-if="finish"></video-select>
  </div>
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
      interval: {},
      value: "0 %",
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },

  computed: {
    ...mapState(["videoList"]),
  },
  methods: {
    showVideos() {
      this.value = "100 %";
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
      this.value = "30 %";
    },
    showStep3() {
      this.okStep3 = true;
      this.value = "70 %";
    },
  },
  components: {
    videoSelect,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
.container {
  display: flex;
  justify-content: space-around;
}
.work-out-spot {
  display: flex;
  height: 300px;
  justify-content: space-around;
  align-items: center;
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
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#img-home {
  height: 300px;
  border-radius: 20%;
}
#img-gym {
  height: 200px;
  border-radius: 20%;
}
#img-home:active,
#img-gym:active {
  border: 5px solid #5fbae9;
}

.v-rating {
  height: 250px;
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

.v-btn {
  width: 250px;
  color: white;
}
.fly {
  text-align: center;
  left: 50%;
  width: 100px;
  margin: 90px;
}

.step1,
.step2,
.step3 {
  margin: 50px 0;
}
.step3 {
  display: flexbox;
}
.wrapper {
  justify-content: flex-start;
}
.v-progress-circular {
  margin: 1rem;
}
.place {
  text-align: center;
  font-size: 2rem;
  font-style: bold;
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

/* Simple CSS3 Fade-in Animation */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  opacity: 0;
  -webkit-animation: fadeIn ease-in 1;
  -moz-animation: fadeIn ease-in 1;
  animation: fadeIn ease-in 1;

  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  animation-fill-mode: forwards;

  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  animation-duration: 1s;
}

/* .step1 {
  background-color: yellow;
  height: 100vh;
  display: flexbox;
} */
</style>
