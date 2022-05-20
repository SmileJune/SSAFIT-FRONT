<template>
  <div>
    <div>VideoGoodJob 컴포넌트</div>
    <div>오늘도 운동하신 ㅇㅇ님 너무 멋있어요!</div>
    <div>자랑하러 가볼까요?</div>
    <v-btn rounded color="primary" dark @click="goToBoast">
      자랑하러 가기
    </v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "VideoGoodJob",
  computed: {
    ...mapState([
        "planVideoList"
    ])
   }
}
</script>

<style></style>
