import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import JoinView from "../views/JoinView.vue";

// import store from '@/store'
// vuex가 아니라 store 객체를 직접 가져옴

Vue.use(VueRouter);

// 목록 누르면 목록 들어가기 전에 체크하고 가야해
// const checkLogin = () => (from, to, next) => {
//   if (store.state.login) {
//     next();
//   } else {
//     if (confirm('로그인이 필요한 서비스입니다. \n 로그인 페이지로 이동하시겠습니까?')) {
//       // 이동하겠다고 하면
//       // 찍어보면 from에 fullPath로 누가 나를 불렀는지 알 수 있음
//       console.dir(from)
//       next(`/login?call=${from.fullPath}`);
//     } 
//       // 아무 이동 안하면 돼
    
//   }
// }

// beforeEnter: checkLogin(),

const routes = [
  {
    path: "/",
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
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
