<template>
  <div class="timeline">
    <br>
    <h1 v-if="isLogin">내 친구들은 언제 운동했을까?</h1>
    <div v-for="(review, idx) in TimelineList" :key="idx">
      <!--실험시작-->
      <div class="timeline-box">
        <v-card
          class="mx-auto"
          color="var(--color-blue4)"
          dark
          max-width="1023"
        >
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="white">
                <v-img
                  class="elevation-6"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  >{{ review.userId }}님이 운동을 마쳤습니다!</v-list-item-title
                >
              </v-list-item-content>

              <v-row align="center" justify="end"> </v-row>
              <span class="subheading">{{ distance[idx] }}</span>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </div>
      <!--실험끝-->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      distance: [],
    };
  },
  computed: {
    ...mapState(["TimelineList", "isLogin"]),
  },

  created() {
    if (sessionStorage.getItem("access-token")) {
      this.$store.dispatch("getTimelineList");
      this.setDistance();
    }
  },
  methods: {
    setDistance() {
      // console.log(this.TimelineList);
      let arr = new Array(this.TimelineList.length);
      let now = new Date();
      for (let i = 0; i < this.TimelineList.length; i++) {
        let before = new Date(this.TimelineList[i].date);
        let distance = now - before;
        distance = distance / 1000 / 60 / 60 / 24 / 12;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "년 전";
          continue;
        }
        distance = distance * 12;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "달 전";
          continue;
        }
        distance = distance * 24;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "시간 전";
          continue;
        }
        distance = distance * 60;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "분 전";
          continue;
        } else {
          distance = distance * 60;
          arr[i] = Math.floor(distance) + "초 전";
        }
      }
      this.distance = arr;
    },
  },
};
</script>

<style>
.timeline {
  margin: 50px 0;
}

.timeline-box {
  margin: 5px 0;
}
</style>
