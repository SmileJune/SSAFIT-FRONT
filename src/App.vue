<template>
  <v-app>
    <HeaderNav></HeaderNav>
    <router-view />
    <div>
      <h1>모달 컴포넌트 만들기 :)</h1>
      <ModalView v-if="isModalViewed" @close-modal="isModalViewed = false">
        <Content msg="Hello Vue in CodeSandbox!" />
      </ModalView>
      <button @click="isModalViewed = true">Open Modal</button>
    </div>
  </v-app>
</template>

<script>
//import HomeView from '@/views/HomeView.vue'
import HeaderNav from "./components/common/HeaderNav.vue";
import Content from "@/components/profile/Content.vue";
import ModalView from "@/components/profile/ModalView.vue";
export default {
  name: "App",
  components: {
    //HomeView,
    HeaderNav,
    Content,
    ModalView,
  },
  data() {
    return {
      isModalViewed: false,
    };
  },
};
</script>
