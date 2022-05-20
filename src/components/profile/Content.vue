<template>
  <div class="content">
    <h1>회원 정보</h1>
    <div>
      <h2>Hi, I'm {{ userProfile.nickname }}</h2>
      {{userProfile.introduce}}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["userProfile"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
