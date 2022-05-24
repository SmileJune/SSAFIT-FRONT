<template>
  <v-app>
    <HeaderNav></HeaderNav>

    <router-view />

    <contact-us />
  </v-app>
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
import HeaderNav from "./components/common/HeaderNav.vue";
import ContactUs from "@/components/common/ContactUsvue.vue";
export default {
  name: "App",
  components: {
    //HomeView,
    HeaderNav,
    ContactUs,
  },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>
<style>
/* @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css); */
@import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css");
@import "@/assets/style.css";

* {
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
}

#main {
  width: 1050px;
  margin: 30px auto;
}

.v-btn {
  color: var(--color-blue5);
}
</style>
