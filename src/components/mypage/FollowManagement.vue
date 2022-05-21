<template>
  <div>
    <hr />
    <h2>정현 : 일준오빠 ~~~~</h2>
    <div>나를 팔로잉 중인 사람</div>
    <div v-for="(follower, idx) in followerList" :key="idx">
      <div>{{ follower.nickname }}</div>
    </div>
    <hr />
    <div>내가 팔로우 중인 사람</div>
    <div v-for="(following, idx) in followingList" :key="idx">
      <div>{{ following.nickname }}</div>
      <v-btn @click="unFollow(following.id)">연 끊기</v-btn>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["followingList", "followerList"]),
  },
  methods: {
    unFollow(followingUser) {
      this.$store.dispatch("unFollow", followingUser);
    },
  },
};
</script>

<style>
</style>