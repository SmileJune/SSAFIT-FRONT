<template>
  <div class="diary">
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-app-bar
      dark
      color="pink"
    >
      <v-toolbar-title>정현이의 SSAFIT diary</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-container>
      <v-row dense>
        <!-- v-col 반복 돌면 됨 -->
        <v-col cols="12">
          <v-card color="red" dark>
            <v-card-title class="text-h5">
              비디오 제목
            </v-card-title>

            <v-card-subtitle>
              비디오 파트
              이게 비디오 리스트 길이만큼 v-for 돌면 되겠따따
            </v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                버튼이 요깄네
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- 여기까지 -->
        <v-col cols="12">
          <v-card
            color="yellow"
            dark
          >
            <v-card-title class="text-h5">
              sdfg
            </v-card-title>

            <v-card-subtitle>sdfg</v-card-subtitle>

            <v-card-actions>
              <v-btn text="asdf">
                
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card
            color="green"
            dark
          >
            <v-card-title class="text-h5">
              
            </v-card-title>

            <v-card-subtitle></v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- 운동 루틴이 있으면 보여주기 -->
        <v-btn rounded color="black" small dark @click="goExercise" v-if="somedayPlan.length > 0">운동하러 가볼까요?</v-btn>
        <!-- 운동 루틴이 없으면 보여주기 -->
        <v-btn rounded color="black" small dark @click="chooseVideos" v-else><router-link to="/createVideo">새로운 운동 영상을 고르러 가볼까요?</router-link></v-btn>
        <v-btn text>
                
        </v-btn>

      </v-row>
    </v-container>
  </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import MyDiaryCreate from '@/components/diary/MyDiaryCreate.vue';
export default {
  data() {
    return {
      // date: '2022-05-19',
      date: '',
    }
  },
  computed: {
    ...mapState([
      'somedayPlan',
    ])
  },
  created() {
    // 오늘의 운동 루틴이 미리 담겨 있으면 좋겠어
    // 날짜를 store에 보내면 뜨게 할 수 있지 않을까?
    let day = new Date();
    let year = day.getFullYear();
    let month = day.getMonth() + 1;
    let date = day.getDate();

    let today = year + '-' + month + '-' + date;
    this.date = today

    // 토큰을 가져오자
    // let token = sessionStorage.getItem("access-token")
    // this.$store.dispatch('getToken', token)

    this.$store.dispatch('getPlan', today)

  },
  methods: {
    goExercise() {
      // router 이동할까
      // this.$router.push(MyDiaryCreate)
    }
  }
}
</script>

<style>
.diary {
  flex: 1;
}
</style>