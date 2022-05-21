<template>
  <div>
    <v-app-bar id="header-nav" elevation="4">
      <router-link to="/">
        <img id="logo" src="@/assets/ssafit.png" alt="logo" />
      </router-link>
      <div class="sign-in">
        <router-link to="/review" class="link">커뮤니티</router-link>
        <router-link v-if="!isLogin" to="/login" class="link" >로그인</router-link>
        <a v-else @click="doLogout" class="link">로그아웃</a>
        <router-link v-if="!isLogin" to="/join" class="link">회원가입</router-link>
        <router-link v-else to="/mypage" class="link">{{user.nickname}}</router-link>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HeaderNav",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["isLogin", "user"]),
  },
  methods: {
    ...mapMutations(["USER_LOGOUT"]),
    doLogout() {
      this.USER_LOGOUT();
    },
  },
};
</script>
<style scoped>
#header-nav {
  display: flex;
  justify-content: center;
}
.sign-in > a {
  padding: 0px 5px;
}

v-app-bar {
  padding: 10px;
}

v-app-bar a {
  font-weight: bold;
  color: #2c3e50;
}

v-app-bar a.router-link-exact-active {
  color: #42b983;
}

#logo {
  height: 80px;
}
.link {
  color : black;
  text-decoration: none;
  font-size: 20px;

}
</style>
