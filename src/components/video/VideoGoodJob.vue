<template>
  <div>
    <div class="compliment">
      <h1>🎉🎊 오늘도 운동하신 {{ user.nickname }}님 너무 멋있어요! 👍🏼</h1>
      <h1>친구들한테 자랑하러 가볼까요?</h1>
    </div>

    <!-- start of 리뷰 작성하는 모달창 -->
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="var(--color-blue5)" rounded dark v-bind="attrs" v-on="on">
              자랑하러가기
            </v-btn>
          </template>
          <v-card>
            <v-card-title class="jarang-header">
              <span class="text-h5">오늘 운동은 어떠셨어요?</span>
            </v-card-title>
            <v-card-text>
              <v-col cols="12" v-for="(plan, idx) in somedayPlan" :key="idx">
                <v-card>
                  <v-card-title class="text-h5">
                    {{ plan.title }}
                  </v-card-title>

                  <v-card-subtitle>
                    {{ plan.channelName }}
                  </v-card-subtitle>
                  <!-- 별점 주기 -->
                  <div>
                    <v-rating
                      full-icon="★"
                      empty-icon="☆"
                      hover
                      v-model="plan.partNo"
                      background-color="grey lighten-1"
                      color="red lighten-3"
                      large
                    ></v-rating>
                  </div>
                  <!-- 영상이 안들어와 썸네일만 보여주게 해야겠어 -->
                  <v-card>
                    <iframe
                      style="zoom: 50%"
                      :src="plan.url"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </v-card>
                </v-card>
              </v-col>
            </v-card-text>
            <div class="review-write">
                <input
                type="text"
                placeholder="제목을 입력해주세요"
                v-model="title"
              />

              <input
                type="text"
                placeholder="내용을 입력해주세요"
                v-model="content"
                @keyup.enter="writeReview"
              />
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="var(--color-blue5)" text @click="dialog = false">
                작성안할래요
              </v-btn>
              <v-btn color="var(--color-blue5)" text @click="writeReview">
                리뷰저장
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
    <!-- end of 리뷰 작성 모달창 -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VideoGoodJob",
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
    };
  },
  computed: {
    ...mapState(["user", "somedayPlan"]),
  },
  methods: {
    writeReview() {
      // 모달창을 띄워서
      this.dialog = false;
      //리뷰 객체를 생성해서 넣어줘야지
      let review = {
        title: this.title,
        content: this.content,
        videoList: [],
      };
      // console.log(this.somedayPlan);

      this.somedayPlan.forEach((plan) => {
        review.videoList.push({
          videoNo: plan.no,
          difficulty: plan.partNo,
        });
      });

      // console.log(review);
      this.$store.dispatch("writeReview", review);

      alert('리뷰가 작성되었어요 \n 다른 분들의 리뷰를 보러 가볼까요?')
    },
  },
};
</script>

<style scoped>
.jarang-header {
  background-color: var(--color-blue2);
}

.review-write {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.compliment {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0
}

</style>
