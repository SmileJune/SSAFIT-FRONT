<template>
  <div>
    <v-container v-for="(review, idx) in reviews" :key="idx">
      <v-row justify="space-around">
        <v-card width="400">
          <!-- 사용자 프로필 -->
          <v-card-title class="mt-8">
            <!-- <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              />
            </v-avatar> -->
            <div class="ml-3 font-weight-bold">{{ review.userId }}님의 리뷰</div>
            <div class="ml-3 font-weight-bold">{{ review.title }}</div>
          </v-card-title>
          <div class="ml-3">{{ review.date }}</div>
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
                <div >{{ video.channelName }}</div>
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
          <v-card-text>
            <div class="sm-3 font-weight-bold">{{ review.userId }}님의 한마디</div>
            <div >{{ review.content }}</div>
          </v-card-text>
          
          <!-- 댓글 part 시작-->
          
          <!-- <v-btn @click="[writeReview, this.no = review.no]">댓글 달기</v-btn> -->
          <v-btn @click="writeComment(review.no)">댓글 달기</v-btn>
          <v-col
          cols="12"
          sm="40"
          >
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
                  <v-btn v-if="user.id === comment.userId" @click="update(idx, idx2)">수정</v-btn>
                  <v-btn v-if="user.id === comment.userId" @click="deleteComment(comment.no)">삭제</v-btn>
                  
                  <!-- 수정 할 수 있는 칸이 생겨야 하는데 -->
                  <v-col
                    cols="12"
                    sm="40"
                    >
                    <v-textarea
                      v-show="ok[idx][idx2]"
                      append-outer-icon="mdi-comment"
                      class="mx-2"
                      :label="comment.comment"
                      rows="1"
                      v-model="editMessage"
                    ></v-textarea>

                  </v-col>
                  <v-btn v-if="user.id === comment.userId" @click="updateComment(comment.no, idx, idx2)">완료</v-btn>
                      
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
   message : "",
   no : "",
   ok: [],
   editMessage: '',
  //  arr1 : Array.from(Array(5), () => new Array(2))
  }),
  computed: {
    ...mapState(["reviews", 'user']),

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

    let arr = new Array(this.reviews.length);
      for(let i=0; i<arr.length; i++){
        arr[i] = new Array(this.reviews[i].commentList.length);
      }
    this.ok = arr;
    console.log(this.ok);
    
  },
  methods : {
    writeComment(no) {
      const payLoad = {
        comment : this.message,
        reviewNo: no
      }
      // payload : 메시지, 리뷰 넘버
      this.$store.dispatch("writeComment", payLoad)
      this.$router.go();
    },
    updateComment(idx, idx2) {
      // 여기서도 코멘트와 리뷰넘버가 가야겠쥬?
      const payload = {
        comment : "",
        reviewNo : "",
      }
      this.$store.dispatch('updateComment', payload);
      this.ok[idx][idx2] = false;
    },
    deleteComment(no){
      this.$store.dispatch('deleteComment', no);
      this.$router.go();
    },
    update(idx, idx2) {
      // 어떨 때만 트루여야 하지...
      // 1. 유저 아이디 === 코멘트를 작성한 사람의 아이디가 같고
      // no이 
      // this.ok[idx[idx2]] = true;
      // console.log(this.ok[idx[idx2]]);
      this.ok[idx].splice([idx2],1,true);
      console.log(this.ok[idx][idx2]);
    }
  }
};
</script>

<style>
.video {
   width: 400px
}

</style>
