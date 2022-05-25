<template>
  <div class="mypage" id="main">
    <div class="first">
      <div class="mypageTop">
        <h1 class="mypage-title">마이페이지</h1>
        <div data-aos="fade-left" data-aos-duration="2000"
        class="weakbtn"><router-link to="weak-part"><v-btn color="primary" style="font-size: large;" @click="showWeak">나의 운동 분석👉🏼</v-btn></router-link></div>
      </div>
      <hr />
      <div class="user-box">
        <h6>아이디</h6>
        <h6>{{ userProfile.id }}</h6>
      </div>
      <div class="user-box">
        <h6>닉네임</h6>
        <h6>{{ userProfile.nickname }}</h6>
      </div>
      <div class="user-box">
        <h6>자기소개</h6>
      </div>
      <div class="introduce">{{ userProfile.introduce }}</div>
    </div>
    <!-- <v-btn @click="updateProfile">수정</v-btn> -->
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            프로필 수정하기
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">프로필 수정하기</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="닉네임 변경"
                    required
                    v-model="profile.nickname"
                  ></v-text-field>
                </v-col>
                <!-- <v-col cols="12"> -->
                <!-- <v-text-field
                  label="비밀번호"
                  type="password"
                  required
                ></v-text-field>
              </v-col> -->
                <v-col cols="12">
                  <v-text-field
                    label="자기소개"
                    required
                    v-model="profile.introduce"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="비밀번호 확인"
                    type="password"
                    required
                    v-model="password"
                  ></v-text-field>
                  <v-btn color="blue darken-1" text @click="checkPassword">
                    비밀번호 확인
                  </v-btn>
                  <div v-if="check">확인됐습니다.</div>
                  <div v-else>비밀번호가 다릅니다</div>
                </v-col>
              </v-row>
            </v-container>
            <small>우리 11팀이 최고야</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              수정 안할래요
            </v-btn>
            <v-btn color="blue darken-1" text @click="updateProfile">
              수정 할래요
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <div class="followArea"><FollowManageMent></FollowManageMent></div>
    <div>
      <v-row justify="center">
        <v-dialog v-model="deleteDialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              회원 탈퇴
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">정말로 탈퇴 하시려구요?</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="비밀번호 확인"
                      type="password"
                      required
                      v-model="password"
                    ></v-text-field>
                    <v-btn color="blue darken-1" text @click="checkPassword">
                      비밀번호 확인
                    </v-btn>
                    <div v-if="check">확인됐습니다.</div>
                    <div v-else>비밀번호가 다릅니다</div>
                  </v-col>
                </v-row>
              </v-container>
              <small>우리 11팀이 최고야</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="deleteDialog = false">
                탈퇴 안할래요 ㅠㅠ
              </v-btn>
              <v-btn color="blue darken-1" text @click="deleteUser">
                탈퇴 할래요 퉷!
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FollowManageMent from "@/components/mypage/FollowManagement.vue";
export default {
  data() {
    return {
      dialog: false,
      deleteDialog: false,
      password: "",
      profile: {
        nickname: "",
        introduce: "",
      },
      check: false,
    };
  },
  components: {
    FollowManageMent,
  },
  computed: {
    ...mapState(["userProfile"]),
  },
  created() {
    this.$store.dispatch("getMyProfile");
  },
  methods: {
    checkPassword() {
      let user = {
        password: this.password,
      };
      this.$store.dispatch("checkPassword", user);
      this.check = this.$store.state.check;
    },
    updateProfile() {
      if (!this.check) {
        alert("비밀번호를 다시 한번 확인해주세요!");
      } else {
        this.$store.dispatch("updateProfile", this.profile);
        this.dialog = false;
        this.check = false;
        this.$router.go();
      }
    },
    deleteUser() {
      if (!this.check) {
        alert("비밀번호를 다시 한번 확인해주세요!");
      } else {
        this.$store.dispatch("deleteUser", this.profile);
        this.deleteDialog = false;
        localStorage.removeItem("vuex")
        sessionStorage.removeItem("access-token")
        // this.check = false;
        alert('회원 탈퇴가 되었습니다.')
        this.$router.go();
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/style.css";
#main {
  width: 1000px;
  margin: 0 auto;
}

#adad {
  color: var(--color-blue5);
}
.mypage {
  width: 700px;
  margin: 0 auto;
}

.mypage-title {
  margin-top: 50px;
  margin-bottom: 20px;
}

.first {
  margin: 0 auto;
  width: 800px;
}

.user-box {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  margin: 10px;
}

.followArea {
  padding: 20px;
}
.introduce {
  margin-left: 20px;
}
.mypageTop {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

</style>
