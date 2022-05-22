<template>
  <div>
    <v-container v-for="(review, idx) in reviews" :key="idx">
      <v-row justify="space-around">
        <v-card width="400">
          <!-- 리뷰 파트 -->
          <v-card-title class="mt-8">
            <!-- 사용자 프로필 -->
            <!-- <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar> -->
            <span class="ml-3 font-weight-bold">
              <!-- <a @click="showProfile(review.userId)"> -->
              {{ review.userId }}
              <!-- </a> -->
            </span>
            <span class="ml-3">님의 리뷰</span>

            <!-- 아이디 클릭하면 모달 컴포넌트 띄울거야 -->
            <v-dialog v-model="profileSwitch" width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="red lighten-2"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  @click="getUserProfile(review.userId)"
                >
                  {{ review.userId }} 님이 궁금하다면?
                </v-btn>
              </template>

              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ review.userId }}님의 프로필
                </v-card-title>

                <v-card-text>
                  <!-- 리뷰를 쓴 유저 아이디를 가지고 getUser를 해야한다 -->
                  <v-card-text>닉네임 : {{ userProfile.nickname }}</v-card-text>
                  <v-card-text
                    >간단한 소개 : {{ userProfile.introduce }}</v-card-text
                  >
                  <v-card-text>현재 팔로워 수 : </v-card-text>
                  <v-card-text>현재 팔로잉 수 : </v-card-text>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="followThisUser(review.userId)"
                  >
                    팔로우하기
                  </v-btn>
                  <v-btn color="primary" text @click="profileSwitch = false">
                    닫기
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- 프로필 모달창 끝 -->
            <v-card-text>
              <!-- <div class="ml-3 font-weight-bold">{{ review.title }}</div> -->
              <div class="sm-3 font-weight-bold">
                {{ review.userId }}님의 한마디
              </div>
              <div>{{ review.content }}</div>
              <div class="ml-3">{{ review.date }}</div>
              <!--여기라고-->
              <!-- <v-btn v-if="user.id === review.userId" @click="updateReview()"
                >수정</v-btn
              > -->

              <!-- 수정시 모달창 -->
              <template>
                <v-row justify="center">
                  <v-dialog v-model="dialog[idx]" width="600px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        color="black"
                        rounded
                        dark
                        v-bind="attrs"
                        v-on="on"
                        v-if="user.id === review.userId"
                        @click="updateReviewSwitch(idx)"
                      >
                        수정
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">오늘 운동은 어떠셨어요?</span>
                      </v-card-title>
                      <v-card-text>
                        <v-col
                          cols="12"
                          v-for="(video, idx3) in review.videoList"
                          :key="idx3"
                        >
                          <v-card>
                            <v-card-title class="text-h5">
                              {{ video.title }}
                            </v-card-title>

                            <v-card-subtitle>
                              {{ video.channelName }}
                            </v-card-subtitle>
                            <!-- 별점 주기 -->
                            <div>
                              <v-rating
                                full-icon="★"
                                empty-icon="☆"
                                hover
                                v-model="video.partNo"
                                background-color="grey lighten-1"
                                color="red lighten-3"
                                large
                              ></v-rating>
                            </div>
                            <v-card>
                              <iframe
                                style="zoom: 50%"
                                :src="video.url"
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
                        placeholder="내용을 입력해주세요"
                        v-model="content"
                      />

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="dialog = false"
                        >
                          작성안할래요
                        </v-btn>
                        <v-btn
                          color="green darken-1"
                          text
                          @click="updateReview(idx)"
                        >
                          리뷰저장
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
              <!-- 수정 리뷰 모달창  -->

              <v-btn
                color="black"
                rounded
                dark
                v-if="user.id === review.userId"
                @click="deleteReview(review.no)"
                >삭제</v-btn
              >
            </v-card-text>
          </v-card-title>
          <!-- 리뷰 파트 끝 -->

          <!-- 운동한 비디오 -->
          <div v-for="video in review.videoList" :key="video.no">
            <v-card color="blue lighten-5">
              <iframe
                style="zoom: 15%"
                :src="video.url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <v-card-text>
                <div class="font-weight-bold">{{ video.title }}</div>
                <div>{{ video.channelName }}</div>
              </v-card-text>
              <!-- <v-rating
                      full-icon="★"
                      empty-icon="☆"
                      hover
                      v-model="plan.partNo"
                      background-color="grey lighten-1"
                      color="red lighten-3"
                      large
                    ></v-rating> -->
            </v-card>
          </div>
          <!-- 루틴 리뷰 작성 -->

          <!-- 댓글 part 시작-->

          <!-- <v-btn @click="[writeReview, this.no = review.no]">댓글 달기</v-btn> -->
          <v-btn @click="writeComment(review.no)">댓글 달기</v-btn>
          <v-col cols="12" sm="40">
            <v-textarea
              append-outer-icon="mdi-comment"
              class="mx-2"
              label="댓글 쓰기"
              rows="1"
              v-model="message"
            ></v-textarea>
          </v-col>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">댓글</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(comment, idx2) in review.commentList"
                :key="idx2"
                small
              >
                <div>
                  <!-- 수정, 삭제 아이콘도 추가하기 -->
                  <div class="font-weight-normal">
                    <strong>{{ comment.userId }}</strong> {{ comment.date }}
                  </div>
                  <div>{{ comment.comment }}</div>
                  <!-- 유저 아이디와 코멘트 작성한 사람의 아이디가 같으면  -->
                  <v-btn
                    v-if="user.id === comment.userId"
                    @click="update(idx, idx2)"
                    >수정</v-btn
                  >
                  <v-btn
                    v-if="user.id === comment.userId"
                    @click="deleteComment(comment.no)"
                    >삭제</v-btn
                  >

                  <!-- 수정 할 수 있는 칸이 생겨야 하는데 -->
                  <v-col cols="12" sm="40">
                    <v-textarea
                      v-show="ok[idx][idx2]"
                      append-outer-icon="mdi-comment"
                      class="mx-2"
                      :label="comment.comment"
                      rows="1"
                      v-model="editMessage"
                    ></v-textarea>
                  </v-col>
                  <v-btn
                    v-if="user.id === comment.userId"
                    @click="updateComment(comment.no, idx, idx2)"
                    v-show="ok[idx][idx2]"
                    >완료</v-btn
                  >
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
    message: "",
    no: "",
    ok: [],
    editMessage: "",
    dialog: [],
    title: "",
    content: "",
    profileSwitch: false,
    //  arr1 : Array.from(Array(5), () => new Array(2))
  }),
  computed: {
    ...mapState(["reviews", "user", "userProfile"]),

    // arr1(){
    //   let arr = new Array(this.reviews.length);
    //   for(let i=0; i<arr.length; i++){
    //     arr[i] = new Array(this.reviews[i].commentList.length);
    //   }
    //   return arr;
    // },

    // ok(){
    //   let array = [];
    //   for (let i = 0; i < this.reviews.length; i++) {
    //     let arr = [];
    //     for (let j = 0; j < this.reviews[i].commentList.length; j++) {
    //       arr.push(this.reviews[i].commentList[j].no);
    //     }
    //     array.push(arr);
    //   }
    //   console.log(array);
    //   return array;
    // }
  },
  created() {
    this.$store.dispatch("getReview");
    let arrdialog = new Array(this.reviews.length);
    this.dialog = arrdialog;
    let arr = new Array(this.reviews.length);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(this.reviews[i].commentList.length);
    }
    this.ok = arr;
  },
  methods: {
    writeComment(no) {
      const payLoad = {
        comment: this.message,
        reviewNo: no,
      };
      // payload : 메시지, 리뷰 넘버
      this.$store.dispatch("writeComment", payLoad);
      this.$router.go();
    },
    updateComment(no, idx, idx2) {
      // 여기서도 코멘트와 코멘트넘버가 가야겠쥬?
      const payload = {
        comment: this.editMessage,
        no: no,
      };
      this.$store.dispatch("updateComment", payload);
      this.ok[idx][idx2] = false;
      this.$router.go();
    },
    deleteComment(no) {
      this.$store.dispatch("deleteComment", no);
      this.$router.go();
    },
    update(idx, idx2) {
      // 어떨 때만 트루여야 하지...
      // 1. 유저 아이디 === 코멘트를 작성한 사람의 아이디가 같고
      // no이
      // this.ok[idx[idx2]] = true;
      // console.log(this.ok[idx[idx2]]);
      this.ok[idx].splice([idx2], 1, true);
    },
    updateReviewSwitch(idx) {
      this.dialog[idx] = true;
    },
    updateReview(idx) {
      let review = {
        title: this.title,
        content: this.content,
        videoList: [],
      };
      this.reviews[idx].videoList.forEach((video) => {
        review.videoList.push({
          videoNo: video.no,
          difficulty: video.partNo,
        });
      });
      console.log(review);
      this.$store.dispatch("updateReview", review);
      this.dialog = false;
      // this.$router.go();
    },
    deleteReview(reviewNo) {
      this.$store.dispatch("deleteReview", reviewNo);
    },
    // showProfile(userId) {
    //   this.profileSwitch = true;
    //   userId;
    // },
    getUserProfile(userId) {
      this.$store.dispatch("getUserProfile", userId);
    },
  },
};
</script>
<style>
.video {
  width: 400px;
}
</style>
