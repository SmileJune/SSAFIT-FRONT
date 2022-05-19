import { createApi } from "@/api";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);

const api = createApi();

export default new Vuex.Store({
  state: {
    isLogin: false,
    videoList: [],
  },
  getters: {},
  mutations: {
    USER_LOGIN(state, token) {
      state.isLogin = true;
      sessionStorage.setItem("access-token", token);
      api.defaults.headers["access-token"] = token;
    },
    USER_LOGOUT(state) {
      state.isLogin = false;
      sessionStorage.removeItem("access-token");
      api.defaults.headers["access-token"] = "";
    },
    SHOW_VIDEOS(state, videos) {
      state.videoList = videos;
    }
  },
  actions: {
    login({ commit }, user) {
      api({
        url: `/login`,
        method: "POST",
        data: user,
      }).then(({ data }) => {
        commit("USER_LOGIN", data["access-token"]);
        router.push({ name: "home" });
      });
    },
    join({ commit }, user) {
      api({
        url: `/join`,
        method: "POST",
        data: user,
      }).then(() => {
        router.push({ name: "login" });
        commit();
      });
    },

    showVideos({commit}, condition) {
      api({
        url: `/video/search`,
        method: "POST",
        data: condition,
      }).then((res) => {
        console.log(res);
        commit("SHOW_VIDEOS", res.data)
      }).catch((error)=>{
        console.log(error);
      });
    }
  },
  modules: {},
});
