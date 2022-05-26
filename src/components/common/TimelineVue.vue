<template>
  <div 
  data-aos="fade-up"
  data-aos-duration="1500"
  class="timeline"
  >
    <br>
    <h1 class="timeline-title" v-if="isLogin">내 친구들은 언제 운동했을까?</h1>
    <div v-for="(review, idx) in TimelineList" :key="idx">
      
      <div class="timeline-box" @click="open(idx)">
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

<!--실험시작 -->
      
              <v-dialog v-model="dialog[idx]" width="600px">
                <v-card>
                  <v-card-title class="jarang-header">
                    <span class="text-h5">{{review.userId}}님이 하신 운동</span>
                  </v-card-title>
                  <v-card-text>
                    <v-col cols="12" v-for="(video, idx2) in review.videoList" :key="idx2">
                      <v-card>
                        <v-card-title class="text-h5">
                          {{ video.title }}
                        </v-card-title>

                        <v-card-subtitle>
                          {{ video.channelName }}
                        </v-card-subtitle>
                        <div class="planVideo">
                          <div>
                          <img :src="'https://img.youtube.com/vi/' + makeId(video.url) + '/maxresdefault.jpg'" alt="">
                          </div>
                        <!-- 별점 주기 -->
                        <div class="rating">
                          <v-rating
                            full-icon="★"
                            empty-icon="☆"
                            hover
                            v-model="review.routineList[idx2].difficulty"
                            background-color="grey lighten-1"
                            color="red lighten-3"
                            large
                          ></v-rating>
                        </div>
                        </div>
                        <!-- 영상이 안들어와 썸네일만 보여주게 해야겠어 -->
                        
                      </v-card>
                    </v-col>
                  </v-card-text>
                
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="var(--color-blue5)" text @click="setPlanFromFollowing(idx)">
                      루틴 그대로 가져오기
                    </v-btn>
                    <v-btn color="var(--color-blue5)" text @click="dialog.splice(idx,1,false)">
                      닫기
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </div>
          
      <!--실험끝-->
    
  
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      distance: [],
      dialog: [],
    };
  },
  computed: {
    ...mapState(["TimelineList", "isLogin", "date"]),
  },

  created() {
    if (sessionStorage.getItem("access-token")) {
      this.$store.dispatch("getTimelineList");
      this.setDistance();
    }
    this.dialog = new Array(this.TimelineList.length);
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
          arr[i] = Math.floor(distance) + "월 전";
          continue;
        }
        distance = distance * 12;
        if (distance >= 1) {
          arr[i] = Math.floor(distance) + "일 전";
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
    open(idx){
      this.dialog.splice(idx,1,true);
    },

    setPlanFromFollowing(idx){
      let videoNoList = [];
      for(let i=0; i<this.TimelineList[idx].videoList.length; i++){
          videoNoList.push(this.TimelineList[idx].videoList[i].no);
      }
      const plan = {
        date: this.date,
        videoList: videoNoList
      };
      console.log(plan);
      this.$store.dispatch("makePlan", plan);
      this.dialog.splice(idx,1,false);
      location.reload();
    },
    makeId(url) {
      return url.substring(30,41);
    }
  }
}
</script>

<style scoped>
.timeline {
  margin: 50px 0;
}

.timeline-box {
  margin: 5px 0;
}

.timeline-title {
  margin-bottom: 20px;
}

img {
  width: 200px;
  height: 155px;
}
.rating {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.timeline-box:hover {
  cursor: pointer;
}

</style>
