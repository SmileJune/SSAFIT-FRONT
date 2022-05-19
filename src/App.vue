<template>
  <v-app>
      <HeaderNav></HeaderNav>
      <router-view />
  </v-app>
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
import HeaderNav from './components/common/HeaderNav.vue';
export default {
  name: 'App',
  components: {
    //HomeView,
    HeaderNav
},
  data() {
    return {

    }
  }
};
</script>
