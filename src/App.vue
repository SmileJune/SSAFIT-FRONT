<template>
  <v-app>
    <TestVue/>
    <HeaderNav></HeaderNav>
    <div id="main">
      <router-view />
    </div>
    <contact-us />
  </v-app>
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
import HeaderNav from "./components/common/HeaderNav.vue";
import ContactUs from "@/components/common/ContactUsvue.vue";
import TestVue from "@/views/TestVue.vue"
export default {
  name: "App",
  components: {
    //HomeView,
    HeaderNav,
    ContactUs,
    TestVue,
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
  font-family: sangsang, Spoqa Han Sans, Spoqa Han Sans JP, Sans-serif;
  
}

/* #main {
  width: 1050px;
  margin: 30px auto;
*/
#main {
  width: 100%;
  height : auto;
  margin: 0;
}



.v-btn {
  color: var(--color-blue5);
}
</style>
