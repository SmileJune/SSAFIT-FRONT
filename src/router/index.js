import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import JoinView from "@/views/JoinView.vue";
import CommunityView from "@/views/CommunityView.vue";
import MyPageView from "@/views/MyPageView.vue";
import TogetherView from "@/views/TogetherView.vue";
import TogetherCreate from "@/views/TogetherCreate.vue";
import UpdateUser from "@/components/mypage/UpdateUser.vue";
import MyDiaryCreate from "@/components/diary/MyDiaryCreate.vue";
import VideoShow from "@/components/video/VideoShow.vue";
import MainView from "@/views/MainView.vue";
import store from '@/store'
// vuex가 아니라 store 객체를 직접 가져옴

Vue.use(VueRouter);

const checkLogin = () => (from, to, next) => {
  if (store.state.isLogin) {
    next();
  } else {
    if (
      confirm(
        "로그인이 필요한 서비스입니다.\n로그인 페이지로 이동하시겠습니까?"
      )
    ) {
      next(`/login?call=${from.fullPath}`);
    }
  }
};

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/join",
    name: "join",
    component: JoinView,
  },
  {
    path: "/mypage",
    name : "mypage",
    component: MyPageView,
    beforeEnter: checkLogin(),
    children: [
      {
        path: "/update",
        name: "UpdateUser",
        component: UpdateUser,
        beforeEnter: checkLogin(),
      }
    ],
  },
  {
    path: "/createVideo",
    name: "createVideo",
    component: MyDiaryCreate,
  },
  {
    path: "/showVideo",
    name: "showVideo",
    component: VideoShow,
    beforeEnter: checkLogin(),
  },
  {
    path: "/review",
    name: "review",
    component: CommunityView,
    beforeEnter: checkLogin(),
  },
  {
    path: "/together",
    name: "together",
    component: TogetherView,
    beforeEnter: checkLogin(),
  },
  {
    path: "/together-create",
    name: "together-create",
    component: TogetherCreate,
    beforeEnter: checkLogin(),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
