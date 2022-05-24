<template>
  <div>
    <section>
      <div class="content">
      
          <div data-aos="fade-left" class="box1">
            <h1>WELCOME</h1>
            <h1>어서오세요</h1>
            <h3>싸핏입니다</h3>
            <h3>SSAFIT</h3>
        </div>
        <div class="guide-1">
          <div class="content">
          <div 
    data-aos= "fade-up-right"
    data-aos-offset="100"
    data-aos-delay="10"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out-quart"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    class="box2">
        <h1>어딨니</h1>
        <h1>어서오세요</h1>
        <h3>싸핏입니다</h3>
        <h3>SSAFIT</h3>
        </div>
      </div>
      </div>
      <div data-aos="fade-left" class="box3">
        <h1>WELCOME</h1>
        <h1>어서오세요</h1>
        <h3>싸핏입니다</h3>
        <h3>SSAFIT</h3>
      </div>
      <div class="guide-1">
        1. 깃헙말고 싸핏 캘린더에도 잔디 심자!
        2. 회원들의 리뷰를 반영한 운동 필터의 탁월함
        3. 홈트족을 위한 거울 모드 지원
        4. 다른 회원들은 어떤 영상으로 운동을 했는지 공유해보아요
        5. 마음에 드는 회원은 팔로우도 할 수 있답니다
        6. 혼자 운동하기 싫다면? 내 근처에 마음 맞는 사람과 같이 운동해요!
      </div>
      <div data-aos="fade-left" class="box4">
        <h1>WELCOME</h1>
        <h1>어서오세요</h1>
        <h3>싸핏입니다</h3>
        <h3>SSAFIT</h3>
      </div>
      <div data-aos="fade-left" class="box5">
        <h1>WELCOME</h1>
        <h1>어서오세요</h1>
        <h3>싸핏입니다</h3>
        <h3>SSAFIT</h3>
      </div>
    </div>
    </section>

     
      
      
    </div>

</template>

<script>

export default {

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
}

h1 {
  color: black;
  font-size: 8em;
  font-weight: 400;
}

h3 {
  font-size: 4em;
  color: black;
  margin: 0;
  font-weight: lighter;
}
.box1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.box2 {
  /* margin-top: 500px; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.guide-1 {
  background-color: white;
  height: 600px;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
}
</style>