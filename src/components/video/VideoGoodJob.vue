<template>
  <div>
    <div>VideoGoodJob 컴포넌트</div>
    <div>오늘도 운동하신 {{ user.nickname }}님 너무 멋있어요!</div>
    <div>자랑하러 가볼까요?</div>

    <!-- start of 리뷰 작성하는 모달창 -->
    <template>
      <v-row justify="center">
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="black" rounded dark v-bind="attrs" v-on="on">
              자랑하러가기
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
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
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              v-model="title"
            />

            <input
              type="textarea"
              placeholder="내용을
            입력해주세요"
              v-model="content"
            />

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                작성안할래요
              </v-btn>
              <v-btn color="green darken-1" text @click="writeReview">
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
      console.log(this.somedayPlan);

      this.somedayPlan.forEach((plan) => {
        review.videoList.push({
          videoNo: plan.no,
          difficulty: plan.partNo,
        });
      });

      console.log(review);
      this.$store.dispatch("writeReview", review);
    },
  },
};
</script>

<style></style>
