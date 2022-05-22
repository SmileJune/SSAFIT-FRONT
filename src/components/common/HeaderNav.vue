<template>
  <header>
    <div class="header-box">
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="@/assets/ssafit.png" alt="logo" />
        </router-link>
      </div>
      <div class="menu">
        <div class="balance"></div>
        <div class="menuWrap">
          <router-link to="/review" class="link">커뮤니티</router-link>
        </div>
        <div class="logbox">
          <router-link v-if="!isLogin" to="/login" class="link"
            >로그인</router-link
          >
          <a v-else @click="doLogout" class="link">로그아웃</a>

          <router-link v-if="isLogin" to="/mypage" class="link">{{
            user.nickname
          }}</router-link>
        </div>
      </div>
    </div>
  </header>
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
header {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid #35495e;
}
.header-box {
  width: 1023px;

  display: flexbox;
  justify-content: center;
}
.menu {
  display: flex;
  justify-content: space-between;
}
.balance {
  flex-grow: 1.37;
}
.menuWrap {
  flex-grow: 1;
}
.logo {
  display: flex;
  justify-content: center;
}
#logo {
  height: 150px;
}
</style>
