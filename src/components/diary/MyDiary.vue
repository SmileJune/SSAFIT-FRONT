<template>
  <div class="diary">
    <v-card
      min-height="500"
      max-height="500"
      width="450"
      class="ml-50 mr-0"
      id="diary-box"
    >
      <v-app-bar dark color="var(--color-blue5)" style="height: 87px">
        <v-toolbar-title v-if="isLogin"
          >{{ user.nickname }}님의 SSAFIT diary 📝
        </v-toolbar-title>
        <v-toolbar-title v-else id="diary-title"
          >SSAFIT diary 📝
        </v-toolbar-title>
      </v-app-bar>

      <v-card-text>
        <v-row dense>
          <div class="switch">
            <v-btn
              color="var(--color-blue4)"
              rounded
              dark
              v-if="somedayPlan.length > 0"
              ><router-link to="/showVideo"
                ><h1>
                  <font-awesome-icon
                    icon="fa-solid fa-person-running"
                  /></h1></router-link
            ></v-btn>
            <v-btn
              rounded
              color="var(--color-blue4)"
              dark
              v-if="somedayPlan.length > 0"
              ><router-link to="/createVideo"
                ><h2>
                  <font-awesome-icon icon="fa-solid fa-pen" /></h2></router-link
            ></v-btn>

            <!-- 운동 루틴이 없으면 보여주기 -->
            <v-btn
              class="mt-5"
              rounded
              color="var(--color-blue4)"
              dark
              style="width: 300px"
              v-else
              ><router-link to="/createVideo"
                >새로운 운동 영상을 고르러 가볼까요?</router-link
              ></v-btn
            >
          </div>

          <!-- v-col 반복 돌면 됨 -->
          <v-col cols="12" v-for="(plan, idx) in somedayPlan" :key="idx">
            <v-card color="black" light>
              <v-card-title class="text-h6">
                <p id="ptitle">{{ plan.title }}</p>
              </v-card-title>

              <v-card-subtitle class="text">
                <p id="psub">{{ plan.channelName }}</p>
              </v-card-subtitle>
            </v-card>
          </v-col>
          <!-- 여기까지 -->

          <h4 id="no-video" v-if="somedayPlan.length == 0">
            오늘 운동할 영상이 없네요!
          </h4>
        </v-row>
      </v-card-text>
      <!-- 운동 루틴이 있으면 보여주기 -->
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import MyDiaryCreate from '@/components/diary/MyDiaryCreate.vue';
export default {
  data() {
    return {
      date: "",
    };
  },
  computed: {
    ...mapState(["somedayPlan", "user", "isLogin"]),
  },
  created() {
    // 오늘의 운동 루틴이 미리 담겨 있으면 좋겠어
    // 날짜를 store에 보내면 뜨게 할 수 있지 않을까?
    if (sessionStorage.getItem("access-token")) {
      let day = new Date();
      let year = day.getFullYear();
      let month = day.getMonth() + 1;
      let date = day.getDate();

      let today = year + "-" + month + "-" + date;
      this.date = today;

      this.$store.dispatch("getPlan", today);
    }
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  margin: 10px 8px 10px 8px;
  color: white;
}

.diary {
  flex: 0;
}

#diary-title {
  display: flex;
  justify-content: center;
}

.v-card {
  flex-grow: 1;
  overflow: auto;
}

.v-card__text {
  max-height: 413px;
  overflow: auto;
}

.v-btn {
  margin: 0 16px;
  width: 100px;
}

.switch {
  display: flex;
  width: 450px;
  justify-content: center;
  margin-bottom: 10px;
}
.v-application a {
  color: white !important;
}

.v-toolbar-title {
  padding: 8px 16px 0px 16px;
}

.v-toolbar__title {
  font-size: 30px;
}

.v-card__title.text-h6,
.v-card__subtitle.text {
  background-color: rgb(250, 250, 255);
}

#no-video {
  margin: 5px auto;
  font-size: 25px;
}

.v-app-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 418px;
}
#ptitle {
  font-size: 1.4rem;
}
#psub {
  font-size: 1.2rem;
}
</style>
