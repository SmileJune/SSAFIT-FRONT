<template>
  <header>
    <div class="header-box">
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="@/assets/ssafit.png" alt="logo" />
        </router-link>
      </div>
      <div class="menu">
        <div class="menuWrap">
          </div>
        <div class="logbox">
          <router-link to="/home" class="link"><h4><font-awesome-icon icon="fa-solid fa-house" /></h4></router-link>
          <router-link to="/review" class="link"><h4><font-awesome-icon icon="fa-solid fa-people-group" /></h4></router-link>
          <div to="/together" class="link" @click="goTogether"><h4><font-awesome-icon icon="fa-solid fa-people-pulling" /></h4></div>
          <router-link v-if="isLogin" to="/mypage" class="link"><h4><font-awesome-icon icon="fa-solid fa-user" /></h4></router-link>
          <router-link v-if="!isLogin" to="/login" class="link"
            ><h4><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" /></h4></router-link
          >
          <a v-else @click="doLogout" class="link"><h4><font-awesome-icon icon="fa-solid fa-arrow-right-from-bracket" /></h4></a>

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
    goTogether() {
      this.$router.push({ name: "together" });
      location.reload();
    }
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
  margin: 10px;
  display: flexbox;
  justify-content: center;
}
.menu {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-style: bold;
}
.logo {
  display: flex;
  justify-content: center;
}
#logo {
  height: 150px;
}
.link {
  padding: 10px 15px;
  color: #000;
  font-weight: bold;
  font-size: 23px;
}
.logbox {
  display: flex;
}

</style>
