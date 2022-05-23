<template>
  <div>
    <h1>다른 분들은 어떤 운동을 하셨을까요? 🧐</h1>
    <div class="ment">누가누가 운동 많이 했나~~~</div>
    <br>
    <div class="ment">👇🏼 요기 아래 아이디를 클릭하면 프로필도 볼 수 있어요</div>
    <br>
    <v-container v-for="(review, idx) in pageReviewList" :key="idx">
      <v-row justify="space-around">
        <v-card width="1000">
          <!-- 리뷰 파트 -->
          <v-card-title class="review-top">
            <!-- 사용자 프로필 -->
            <span class="ml-3 font-weight-bold review-id">
              <a @click="getUserProfile(review.userId)" class="review-userId">
                {{ review.userId }}
              </a>
            </span>
            <!-- <span class="ml-3 review-id">님의 리뷰</span> -->

            <!-- 아이디 클릭하면 모달 컴포넌트 띄울거야 -->
            <v-dialog v-model="profileSwitch" width="500" :retain-focus="false">
              <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                  {{ userProfile.id }}님의 프로필
                </v-card-title>

                <v-card-text>
                  <!-- 리뷰를 쓴 유저 아이디를 가지고 getUser를 해야한다 -->
                  <v-card-text>닉네임 : {{ userProfile.nickname }}</v-card-text>
                  <v-card-text
                    >간단한 소개 : {{ userProfile.introduce }}</v-card-text
                  >
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn rounded dark color="var(--color-blue5)" text @click="follow(userProfile.id)">
                    팔로우하기
                  </v-btn>
                  <v-btn rounded dark color="var(--color-blue5)" text @click="profileSwitch = false">
                    닫기
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- 프로필 모달창 끝 -->

            <!-- start : 후기 작성 part -->
            <v-card-text>
              <div class=""></div>
              <h2 class="sm-3 font-weight-bold"  color="black">
                {{ review.userId }}님의 후기
              </h2>
              <div class="ml-3">{{ review.date }}</div>
              <div>{{ review.title }}</div>
              <div>{{ review.content }}</div>

              <v-btn
                rounded dark color="var(--color-blue5)"
                v-if="user.id === review.userId"
                @click="updateReviewSwitch(idx)"
                ><font-awesome-icon icon="fa-solid fa-pen" /></v-btn
              >
              <v-btn
                rounded dark color="var(--color-blue5)"
                v-if="user.id === review.userId"
                @click="deleteReview(review.no)"
                ><font-awesome-icon icon="fa-solid fa-trash-can" /></v-btn
              >

              <!-- 수정시 모달창 -->
              <template>
                <v-row justify="center">
                  <v-dialog v-model="dialog[idx]" width="600px">
                    <v-card>
                      <v-card-title>
                        <span class="text-h5">오늘 운동은 어떠셨어요?</span>
                      </v-card-title>
                      <v-card-text id="updateModal">
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
                            <div style="text-align: center;">
                              
                                <img :src="'https://img.youtube.com/vi/' + makeId(video.url) + '/default.jpg'" alt="">
                              
                              <v-rating
                                full-icon="★"
                                empty-icon="☆"
                                hover
                                v-model="review.routineList[idx3].difficulty"
                                background-color="grey lighten-1"
                                color="red lighten-3"
                                medieum
                              ></v-rating>
                            </div>
                          </v-card>
                        </v-col>
                      </v-card-text>
                      <div class="review-update-input">

                        <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        v-model="title"
                        />

                        <input
                          type="text"
                          placeholder="내용을 입력해주세요"
                          v-model="content"
                        />
                      </div>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          rounded dark color="var(--color-blue5)"
                          text
                          @click="dialog.splice(idx, 1, false)"
                        >
                          작성안할래요
                        </v-btn>
                        <v-btn
                          rounded dark color="var(--color-blue5)"
                          text
                          @click="updateReview(review.no, idx)"
                        >
                          리뷰저장
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </template>
              <!-- 수정 리뷰 모달창  -->

              <!-- <v-btn
                rounded dark color="var(--color-blue5)"
                v-if="user.id === review.userId"
                @click="deleteReview(review.no)"
                >삭제</v-btn
              > -->
            </v-card-text>
            <!-- end : 후기 작성 part -->

          </v-card-title>
          <!-- 리뷰 파트 끝 -->


              <!-- 운동한 비디오 -->
          <div v-for="(video, idx4) in review.videoList" :key="idx4">
            <v-card color="white" >
              <v-card-text id="reviewText">
                <div>
              <img :src="'https://img.youtube.com/vi/' + makeId(video.url) + '/default.jpg'" alt="">
              </div>
              <div class="reviewArea">
                <div class="font-weight-bold">{{ video.title }}</div>
                <div>{{ video.channelName }}</div>
              <v-rating
                      full-icon="★"
                      empty-icon="☆"
                      hover
                      v-model="review.routineList[idx4].difficulty"
                      background-color="grey lighten-1"
                      color="red lighten-3"
                      small
              ></v-rating>
              </div>
              </v-card-text>
              
            </v-card>
          </div>


          <!-- start : 댓글 part -->
          <!-- <v-btn @click="[writeReview, this.no = review.no]">댓글 달기</v-btn> -->
          <div class="comment-input">
              <v-col cols="10" sm="40">
                <v-textarea
                append-outer-icon="mdi-comment"
                class="mx-2"
                label="댓글 쓰기"
                rows="1"
                v-model="message"
                @keyup.13="writeComment(review.no)"
              ></v-textarea>
            </v-col>
            <v-btn rounded dark color="var(--color-blue5)" @click="writeComment(review.no)"> 작성 </v-btn>
          </div>

          <v-card-text>
            <div class="font-weight-bold ml-8 mb-2">댓글</div>

            <v-timeline align-top dense>
              <v-timeline-item
                v-for="(comment, idx2) in review.commentList"
                :key="idx2"
                small
              >
                <div class="comment-and-button">
                  <div class="comment">
                    <div class="font-weight-normal">
                    <strong>
                      <a @click="getUserProfile(comment.userId)">{{
                        comment.userId
                      }}</a>
                    </strong>
                      {{ comment.date }}
                    </div>
                    <div>{{ comment.comment }}</div>
                  </div>
                  <div class="button">
                    <v-btn
                    rounded dark color="var(--color-blue5)"
                      v-if="user.id === comment.userId"
                      @click="update(idx, idx2)"
                      ><font-awesome-icon icon="fa-solid fa-pen" /></v-btn
                    >
                    <v-btn
                    rounded dark color="var(--color-blue5)"
                      v-if="user.id === comment.userId"
                      @click="deleteComment(comment.no)"
                      ><font-awesome-icon icon="fa-solid fa-trash-can" /></v-btn
                    >
                  </div>

                  <!-- 수정 할 수 있는 칸이 생겨야 하는데 -->
                  <div class="comment-update">
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
                    rounded dark color="var(--color-blue5)"
                      v-if="user.id === comment.userId"
                      @click="updateComment(comment.no, idx, idx2)"
                      v-show="ok[idx][idx2]"
                      >완료</v-btn
                    >
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>

    <!-- 페이지네이션 -->
    <v-pagination
      v-model="currPage"
      :length="numOfPages"
      circle
    ></v-pagination>
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
    currPage: 1,
    reviewPerPage: 3,
    //  arr1 : Array.from(Array(5), () => new Array(2))
  }),
  computed: {
    ...mapState(["reviews", "user", "userProfile"]),
    numOfPages() {
      
      return Math.ceil(this.reviews.length / this.reviewPerPage);
    },
    pageReviewList() {
      return this.reviews.slice(
        (this.currPage - 1) * this.reviewPerPage,
        this.currPage * this.reviewPerPage
      );
    },

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
      console.log(this.message);
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
      // this.ok[idx[idx2]] = true;
      this.ok[idx].splice([idx2], 1, true);
    },
    updateReviewSwitch(idx) {
      this.dialog.splice(idx, 1, true);
    },
    updateReview(no, idx) {
      let review = {
        no: no,
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
      
      this.$store.dispatch("updateReview", review);
      this.dialog.splice(idx, 1, false);
      this.$router.go();
    },
    deleteReview(reviewNo) {
      this.$store.dispatch("deleteReview", reviewNo);
      this.$router.go();
    },
    getUserProfile(userId) {
      this.profileSwitch = true;
      this.$store.dispatch("getUserProfile", userId);
    },
    follow(toUser) {
      if (this.user.id == toUser) {
        alert("왜 니꺼 팔로우하냐?");
      } else {
        let follow = {
          to: toUser,
        };
        this.$store.dispatch("follow", follow);
        alert("팔로우 성공!");
        this.profileSwitch = false;
      }
    },
    makeId(url) {
      return url.substring(30,41);
    }
  },
  
};
</script>
<style scoped>
.ment, .review-id {
  font-size: 24px;
  font-weight: bold;
}

.video {
  width: 400px;
}
.comment-input {
  display: flex;
}

h2, h3 {
  margin: 0;
  color: black;
}

.v-btn {
  color: white;
  width: 10px;
}
#reviewText {
  display: flex;
}
#updateModal {
  display: flexbox;
}
.reviewArea {
  margin-left: 40px;
}

.review-update-input {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.review-userId {
  font-weight: bold;
  color: black;
}
</style>
