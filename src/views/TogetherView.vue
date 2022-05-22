<template>
  <div>
    <h1>운동같이해요</h1>
    <div id="map" style="width:1000px;height:700px;"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      map: null,
      // markerPositions : [
      //   {
      //     title : "카카오", lating : new.kakao.maps.LatLng(36.35730083428502,127.31929633898431)
      //   }
      // ],
      // // 화면에 표시되어있는 marker들
      // markers : [],
    }
  },
  mounted(){
    if(!window.kakao || window.kakao.maps){
    //script 태그 객체 생성
    const script = document.createElement("script");
    //src 속성을 추가하며 .env.local에 등록한 service 키 활용
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
    //document의 head에 script 추가
    /* global kakao */
    script.addEventListener("load", ()=>{
      kakao.maps.load(this.initMap);
    })
    document.head.appendChild(script);
    }else {
      console.log("이미 로딩됨: ",window.kakao);
      this.initMap();
    }
  },
  methods : {
    initMap(){
      var mapContainer = document.getElementById('map'),
          mapOption = {
            center : new kakao.maps.LatLng(36.35730083428502,127.30929633898431 ),
            level: 3,
            mapTypeId : kakao.maps.MapTypeId.ROADMAP
          };
      this.map = new kakao.maps.Map(mapContainer, mapOption);
    },
    // displayMarkers(positions){
    //   //1. 현재 표시되어있는 marker들이 있다면 marker에 등록된 map에 없애준다.
    //   if(this.marker.length>0){
    //     this.markers.forEach((item)=>{
    //       item.setMap(null);
    //     })
    //   }

    //   const imgSize = new kakao
    // }
  }
}
</script>

<style>

</style>