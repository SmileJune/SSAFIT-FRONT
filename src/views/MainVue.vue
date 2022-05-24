<template>
  <div class="main">
    <img src="../assets/main.png" alt="" />
    <div class="card-container">
      <div class="blog-card left1" data-aos="zoom-in-right">
        <div class="title-content">
          <h3>SSAFIT은 이런 사이트입니다</h3>
          <hr />
          <div class="intro">유튜브 영상을 통해 어디서든 운동을 해보자</div>
        </div>
        <!-- /.title-content -->
        <div class="card-info">
          <img src="../assets/manual1.png" alt="" id="cardimg" />
        </div>
        <!-- /.card-info -->

        <!-- overlays -->
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
      <!-- /.blog-card -->
    </div>
    <div class="card-container">
      <div class="blog-card right1" data-aos="zoom-in-right">
        <div class="title-content">
          <h3>로그인을 해보세요!!!</h3>
          <hr />
          <div class="intro">다양한 커뮤니티 기능이 준비되어 있습니다.</div>
        </div>
        <!-- /.title-content -->
        <div class="card-info"></div>
        <!-- /.card-info -->

        <!-- overlays -->
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
      <!-- /.blog-card -->
    </div>
    <div class="card-container">
      <div class="blog-card left2" data-aos="zoom-in-right">
        <div class="title-content">
          <h3>원하는 운동을 고르고 다이어리를 작성해 보세요!!!</h3>
          <hr />
          <div class="intro">
            캘린더를 통해 운동다이어리를 관리 할 수 있습니다.
          </div>
        </div>
        <!-- /.title-content -->
        <div class="card-info"></div>
        <!-- /.card-info -->

        <!-- overlays -->
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
      <!-- /.blog-card -->
    </div>
    <div class="card-container">
      <div class="blog-card right2" data-aos="zoom-in-right">
        <div class="title-content">
          <h3>사람들과 팔로우 하고 서로의 소식을 공유해요</h3>
          <hr />
          <div class="intro">같이 운동할 친구를 사귀어보는 것도 좋아요</div>
        </div>
        <!-- /.title-content -->
        <div class="card-info"></div>
        <!-- /.card-info -->

        <!-- overlays -->
        <div class="gradient-overlay"></div>
        <div class="color-overlay"></div>
      </div>
      <!-- /.blog-card -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// variables
@import url("//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css");
$card-width: 850px;
$card-height: 500px;
$h-color: #1206b3;
$yellow: #d0bb57;
$txt-color: #000000;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Spoqa Han Sans", "Spoqa Han Sans JP", "Sans-serif";
}
.card-containter {
  width: 1023px;
  display: flexbox;
  text-align: left;
}

.blog-card {
  width: $card-width;
  height: $card-height;
  position: absolute;
  margin: -250px 0 0 -175px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(192, 76, 228, 0.5) 43;
  text-align: center;

  &.left1 {
    top: 1700px;
    left: 20%;
  }
  &.left2 {
    top: 3100px;
    left: 20%;
  }
  &.right1 {
    top: 2400px;
    right: 20%;
  }
  &.right2 {
    top: 3800px;
    right: 20%;
  }
  .color-overlay {
    /* Rectangle 11: */
    background: rgb(6, 153, 197);
    width: $card-width;
    height: $card-height;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    transition: background 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  .gradient-overlay {
    /* bg-gradient: */
    background-image: -webkit-linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 21%
    );
    background-image: -moz-linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 21%
    );
    background-image: -o-linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 21%
    );
    background-image: linear-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.6) 21%
    );
    width: $card-width;
    height: $card-height;
    position: absolute;
    top: 350px;
    left: 0;
    z-index: 15;
  }

  &:hover {
    .card-info {
      opacity: 1;
      bottom: 120px;
    }
    .color-overlay {
      background: var(--color-blue5);
    }
  }
}

.title-content {
  text-align: center;
  margin: 70px 0 0 0;
  position: absolute;
  z-index: 20;
  width: 100%;
  top: 0;
  left: 0;
}
h3 {
  font-size: 40px;
  font-weight: 500;
  letter-spacing: 2px;
  color: $h-color;
  font-family: "Spoqa Han Sans", sans-serif;
  margin-bottom: 0;
}
hr {
  width: 400px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: $yellow;
}
.intro {
  width: 170px;
  margin: 0 auto;
  color: $txt-color;
  font-family: "Spoqa Han Sans", sans-serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
}
.card-info {
  width: 100%;
  height: 100%;
  position: relative;
  bottom: 100px;
  left: 0;
  margin: 0 auto;
  color: $txt-color;
  font-family: "Spoqa Han Sans", sans-serif;
  font-style: 16px;
  line-height: 24px;
  z-index: 20;
  opacity: 0;
  transition: bottom 0.3s, opacity 0.3s cubic-bezier(0.33, 0.66, 0.66, 1);
}

.utility-info {
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 20;
}
.utility-list {
  list-style-type: none;
  margin: 0 0 30px 20px;
  padding: 0;
  width: 100%;

  li {
    margin: 0 15px 0 0;
    padding: 0 0 0 22px;
    display: inline-block;
    color: $txt-color;
    font-family: "Roboto", sans-serif;

    &.comments {
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-chat.svg)
        no-repeat 0 0.1em;
    }
    &.date {
      background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1765/icon-calendar.svg)
        no-repeat 0 0.1em;
    }
  }
  #cardimg {
    max-width: 100px;
    max-height: 50px;
  }
}
</style>
