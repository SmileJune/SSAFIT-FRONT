<template>
  <v-app>
    <HeaderNav></HeaderNav>
    <div id="main">
      <router-view />
    </div>

  </v-app>
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
import HeaderNav from "./components/common/HeaderNav.vue";
export default {
  name: "App",
  components: {
    //HomeView,
    HeaderNav,
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
  @import url('//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css');


* { 
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; 
}

#main {
  width: 1023px;
  margin: 0 auto;
}
</style>
