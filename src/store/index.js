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
    somedayPlan: [],
    date: "",
    user : {
      id : '',
      nickname: '',
      introduce:''
    },
    reviews: [],
    userProfile : {
      id : 'dlfwns',
      nickname: 'SmileJun',
      introduce: 'Im SmileJun'
    }
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
    },
    GET_PLAN(state, data) {
      state.somedayPlan = data;
    },
    SET_TODAY(state, date) {
      state.date = date;
    },
    SET_DATE(state, date) {
      state.date = date;
    },
    GET_USER(state, data) {
      state.user.id = data.id;
      state.user.nickname = data.nickname;
      state.user.introduce = data.introduce;
    },
    GET_REVIEW(state, data) {
      state.reviews = data;
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
        alert("오늘도 우리와 함께 신나게 운동해봐요!");
        router.push({ name: "home" });
      })
    },
    who({commit}, id) {
      api({
        url:`user/${id}`,
        method: "GET",
      }).then((res) =>{
        console.log(res);
        commit("GET_USER", res.data);
      })
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

    showVideos({ commit }, condition) {
      api({
        url: `/video/search`,
        method: "POST",
        data: condition,
      })
        .then((res) => {
          console.log(res);
          commit("SHOW_VIDEOS", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPlan({ commit }, date) {
      api({
        url: `/plan`,
        method: "POST",
        data: {date : date},
      }).then((res) => {
        commit("GET_PLAN", res.data);
        commit("SET_TODAY", date);
      }).catch((error) => {
        console.log(error);
      });
    },
    makePlan({commit}, plan) {
      api({
        url: `/plan/write`,
        method: "POST",
        data: plan,
      }).then(() => {
        router.push({ name: "home"});
        commit();
      })
    },
    changeDate({commit}, date) {
      commit("SET_DATE", date);
    },
    writeReview({commit}, data) {
      api({
        url: `review/write`,
        method: "POST",
        data: data,
      }).then((res) => {
        router.push({ name : "review"});
        commit();
        console.log(res)
      })
    },
    getReview({commit}) {
      api({
        url: `review`,
        method: "GET",
      }).then((res) => {
        commit("GET_REVIEW", res.data);
      })
    },
    follow({commit}){
      api({
        url: `follow/write`,
        method: "POST",
        data : {
          to : this.state.userProfile.id
        }
      }).then((res) => {
        console.log(res);
        commit();
      })
    }
  },
  modules: {},
});
