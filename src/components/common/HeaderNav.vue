<template>
  <header>
    <div class="header-box">
      <div class="logo">
        <router-link to="/">
          <img id="logo" src="@/assets/ssafit.png" alt="logo" />
        </router-link>
      </div>
      <div class="menucontainer">
        <ul class="menu" data-animation="to-top">
          <li>
            <router-link to="/home" class="link">
              <span
                ><h4><font-awesome-icon icon="fa-solid fa-house" /></h4
              ></span>
              <span aria-hidden="true">Home</span></router-link
            >
          </li>
          <li>
            <router-link to="/review" class="link"
              ><span
                ><h4>
                  <font-awesome-icon
                    icon="fa-solid fa-people-group"
                  /></h4></span
              ><span aria-hidden="true" style="font-size: 80%;">Community</span></router-link
            >
          </li>
          <li class="cursor">
            <div to="/together" class="link" @click="goTogether">
              
              <span
                ><h4><font-awesome-icon icon="fa-solid fa-people-pulling" /></h4
              ></span>
             
              <span aria-hidden="true" style="font-size: 90%;">Together</span>
            </div>
          </li>

          <li>
            <router-link v-if="isLogin" to="/mypage" class="link"
              ><span>
                <h4><font-awesome-icon icon="fa-solid fa-user" /></h4></span
              ><span aria-hidden="true">Mypage</span></router-link
            >
          </li>

          <li>
            <router-link v-if="!isLogin" to="/login" class="link">
      
              <span>
                <h4>
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right-to-bracket"
                  />
                </h4>
              </span>
              <span aria-hidden="true">Login</span></router-link
            >
          </li>
          <li>
            <a v-if="isLogin" @click="doLogout" class="link">
              <span>
                <h4>
                  <font-awesome-icon
                    icon="fa-solid fa-arrow-right-from-bracket"
                    
                  />
                </h4>
              </span>
              <span aria-hidden="true">Logout</span>
            </a>
          </li>
          <!-- <a v-else @click="doLogout" class="link"
            ><h4>
              <font-awesome-icon
                icon="fa-solid fa-arrow-right-from-bracket"
              /></h4
          ></a> -->
        
        </ul>
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
      this.$router.push({name : 'main'});
    },
    goTogether() {
      this.$router.push({ name: "together" });
      location.reload();
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.logo {
  display: flex;
  justify-content: center;
}
ul {
  list-style: none;
}
.link {
  text-decoration: none;
  color: inherit;
}

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
  justify-content: flex-end;
  font-size: 1.5rem;
  font-style: bold;
}

.menu li {
  margin-right: 0px;
}

.menu .link {
  position: relative;
  display: block;
  overflow: hidden;
  padding : 5px;
}

.menu .link span {
  transition: transform 0.2s ease-out;
}

.menu .link span:first-child {
  display: inline-block;
  padding: 30px;
}

.menu .link span:last-child {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
}

.menu .link :hover span:first-child {
  transform: translateY(100%);
}

.menu .link:hover span:last-child,
.menu[data-animation] .link:hover span:last-child {
  transform: none;
}

.menu[data-animation="to-top"] .link span:last-child {
  transform: translateY(100%);
}

.menu[data-animation="to-top"] .link:hover span:first-child {
  transform: translateY(-100%);
}

.cursor:hover {
  cursor: pointer;
}
#logo {
  height: 150px;
}
</style>
