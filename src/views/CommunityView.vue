<template>
  <div>
    <v-container v-for="review in reviews" :key="review.no">
      <v-row justify="space-around">
        <v-card width="400">
          <v-card-title class="mt-8">
            <!-- <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar> -->
            <p class="ml-3">{{ review.userId }}</p>

            <div v-for="video in review.videoList" :key="video.no">
              <v-card>
                <iframe
                  style="zoom: 15%"
                  :src="video.url"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-card>
            </div>
          </v-card-title>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">댓글</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="message in messages"
                :key="message.time"
                :color="message.color"
                small
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 카드 형태
// 페이지네이션 구현
// 작성자 클릭하면 팔로우할 수 있는 모달창 뜨게 하기
export default {
  data: () => ({
    messages: [
      {
        from: "정현",
        message: `댓글을 여기 메시지 안에 넣어야겠네`,
        time: "10:42am",
        color: "deep-purple lighten-1",
      },
      {
        from: "일준형",
        message: "그래서 오늘 쉰다고?",
        time: "10:37am",
        color: "green",
      },
      {
        from: "정현",
        message: "시간하고 메시지를 넣는다 근데 밑에 다 반복되네",
        time: "9:47am",
        color: "deep-purple lighten-1",
      },
    ],
  }),
  computed: {
    ...mapState(["reviews", "user"]),
  },
  created() {
    this.$store.dispatch("getReview");
  },
};
</script>

<style></style>
