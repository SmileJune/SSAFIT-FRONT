<template>
  <div>
    <section>
      <div class="content">
        <div data-aos="fade-right"
          data-aos-offset="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in"
          data-aos-mirror="true"
          class="box1">
            <h1>WELCOME</h1>
            <h1>어서오세요</h1>
            <h3>SSAFIT</h3>
            <h3>싸핏입니다</h3>
        </div>
        <div class="guide-introduce">
          <div class="content">
            <div 
              class="box2"
              data-aos= "fade-up-left"
              data-aos-offset="100"
              data-aos-delay="10"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-quart"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              >
              <h3>싸핏이 처음이신가요?</h3>
              <h3>그렇다면 싸핏의 가이드를 읽어보세요!</h3>
            </div>
            <div class="card-collection">
              <div class="card card-0"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-delay="10"
              data-aos-easing="ease-in-out-quart">
                <h6>
                  나만의 운동 캘린더
                </h6>
                <h4>깃헙말고 싸핏 캘린더에도 잔디 심자!</h4>
                <p style="padding-bottom: 80px;">
                  <span>운동 계획이 있는 날엔 빨간색, 운동을 실천한 날엔 초록색이 달력에 표시됩니다.</span><br>
                  <span>매일 운동하고 초록색으로 가득찬 달력을 만들어볼까요?</span>
                </p>
                <img src="@/assets/grass.png" alt="" width="100%" >
              </div>
              <div class="card">
                <div class="card card-1"
                data-aos="fade-left"
                data-aos-offset="800"
                data-aos-delay="10"
                data-aos-easing="ease-in-out-quart">
                <h6>
                  회원의 리뷰를 반영한 운동 필터
                </h6>
                <h4>여러분이 주신 피드백을 모두 반영해요</h4>
                <div style="display: flex;">
                  <!-- <img src="@/assets/good.png" alt="" width="100px"> -->
                    <!-- <img src="@/assets/feedback.png" alt="" width="100px"> -->
                  <p>
                    <span>운동을 하고 리뷰를 남겨주실 때마다 회원님의 리뷰를 바탕으로</span><br>
                    <span>저희가 가지고 있는 운동 데이터베이스가 새로 구축됩니다.</span>
                  </p>
                </div>
              </div>
              </div>
              <div class="card card-2"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="10"
                data-aos-easing="ease-in-out-quart">
                <h6>
                  홈트족을 위한 거울모드 지원
                </h6>
                <h4>거울보고 자세 잡으랴 운동 영상보랴 힘드셨죠?</h4>
                <p>
                  <span>운동 영상과 함께 카메라 필터가 지원돼요! </span><br>
                  <span><strong>시선 돌릴 필요 없이!</strong> 운동에 더 집중할 수 있어요</span>
                </p>
              </div>
              <div class="card card-3"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="10"
                data-aos-easing="ease-in-out-quart">
                <h6>
                  다른 회원님들과 소통할 수 있는 커뮤니티
                </h6>
                <h4>고민이 있다면 함께 나눠봐요</h4>
                <p>
                  <span>'열심히 하는데 왜 이렇게 더디지..?'</span><br>
                  <span>'오늘은 운동 뭐하지?' 고민하지 말고 </span><br>
                  <span>회원님들의 리뷰를 참고해보세요!</span>
                </p>
              </div>
              <div class="card card-4"
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="10"
                data-aos-easing="ease-in-out-quart">
                <h6>
                  내 근처 회원들과의 오프라인 만남
                </h6>
                <h4>혼자 운동하기 싫다면?</h4>
                <h4>약속 잡고 같이 해요!</h4>
                <p>
                  <span>이제부터 지겹게 혼자서 운동하지 마세요!</span><br>
                  <span>헬스장에서도 야외에서도 싸핏 회원님들과 약속잡고 같이 운동해요!</span>
                </p>
              </div>                    
            </div>
            <!-- card 끝 -->
          </div>
          <!-- content 끝 -->
          <div class="go-login">
            <h4>그럼 지금부터 시작해볼까요?</h4>
            <v-btn roumded light @click="login">로그인하러 가기</v-btn>
          </div>
      </div>
    </div>
    </section>

     
      
      
    </div>

</template>

<script>

export default {
  methods: {
    login() {
      this.$router.push({name: 'login'});
    }
  }
}
</script>

<style scoped>
* {
  font-family: sangsang;
}
section {
  margin: 0;
  background: url(@/assets/main2.jpg);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 10000px;

}
.content {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

h1 {
  /* color: black; */
  font-size: 6em;
  font-weight: 400;
}

h3 {
  font-size: 4em;
  /* color: black; */
  margin: 0;
  font-weight: lighter;
}

p {
  font-size: 1em;
  margin: 10px 30px; 
}

.box1 {
  color: white;
  padding: 0 0 300px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.box2 {
  color: black;
  display: flex;
  flex-direction: column;

  padding-top: 20px;
  padding-bottom: 30px;

}

.guide-introduce {
  background-color: white;
  height: 3200px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
/* .card-container {
  display: flex;
  justify-content: space-around;
} */

.card-collection {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
  background-color: #fff;
  margin-bottom: 130px;
  box-shadow: 0 4px 8px rgb(0, 0, 0, 0.1), 0 6px 16px rgb(0, 0, 0, 0.1);
  border-radius: 6px;
  color: black;

  /* 임의로 */
  width: 800px;
  height: 500px;
  overflow: hidden;
}
.card h6 {
  font-size: 2em;
  font-weight: 600;
  margin: 10px 30px;
}

.card h4 {
  font-size: 3em;
  margin-left: 30px;
  margin-right: 30px;
}

.card-1,
.card-3 {
  display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: flex-end;
}

.card-1 {
  background-color: #000000b9;
  /* background-color: #fce63dab; */
  color: white
}
.card-2 {
  background-color: #000000b9;
  /* background-color: #dfe4dec8; */
  color: white
}
.card-3 {
  background-color: white;
}

.card-4 {
  background-color: white;
  /* background-color: #e1dcd9b6; */
}

p span {
  font-size: 1.4em;
}

.go-login h4 {
  font-size: 5em;
  color: white;
 }

 .v-btn, .v-btn:not(.v-btn--round).v-size--default {
   font-size: 35px;
   min-width: 300px;
   height: 70px;
   padding: 40px 80px;
   margin-top: 20px;
   background-color: white;
 }

 .go-login {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;

   margin-top: 100px;
 }

</style>