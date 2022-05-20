<template>
  <div>
    <div>마이페이지</div>
    <div>id</div>
    <div>{{userProfile.id}}</div>
    {{userProfile.nickname}}
    {{userProfile.introduce}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(["userProfile"]),
  },
  created() {
    this.$store.dispatch("getMyProfile");
  },
};
</script>

<style></style>
