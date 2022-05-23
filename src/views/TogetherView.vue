<template>
  <div>
    <div id="map" style="width:1000px; height:700px;"></div>
    <div class="button-group">
      <button @click="changeSize(800)"></button>
      <v-btn
      color="primary"
      elevation="3"
      large
      rounded
      @click="displayMarker(markerPositions1)"
      >내 주위 등록된 약속 보기</v-btn>
        <v-btn
        color="primary"
        elevation="3"
        large
        rounded
      >약속잡기</v-btn>
      <button @click="displayInfoWindow"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Together",
  data() {
    return {
      markerPositions1: [
        {
          content : `<div>몰라1</div>`,
          latlng: new kakao.maps.LatLng(36.35630083428502,127.30929633898431)
        },
        {
          content : `<div>몰라2</div>`,
          latlng: new kakao.maps.LatLng(36.35730083428502,127.31029633898431)
        },
        {
          content : `<div>몰라3</div>`,
          latlng: new kakao.maps.LatLng(36.35530083428502,127.30829633898431)
        }
      ],
      markers: [],
      infowindow: null,
      now: {
        lat :37.499590490909185,
        lng : 127.0263723554437
      },
    };
  },
  created(){
    this.getLocation();
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      document.head.appendChild(script);
    }
    this.displayMarker(this.markerPositions1);
  },
  methods: {
    getLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
          this.now = {
            lat : position.coords.latitude,
            lng : position.coords.longitude
          }
          }, (error)=>{
            console.error(error);
          }, {
            enableHighAccuracy: false,
            maximumAge : 0,
            timeout : Infinity
          })
      }else{
        alert('GPS를 지원하지 않습니다');
      }
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.now.lat, this.now.lng),
        level: 3,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },
    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size*0.7}px`;
      this.map.relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map((position) => {
          new kakao.maps.LatLng(...position);
          }
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    displayInfoWindow() {
      if (this.infowindow && this.infowindow.getMap()) {
        //이미 생성한 인포윈도우가 있기 때문에 지도 중심좌표를 인포윈도우 좌표로 이동시킨다.
        this.map.setCenter(this.infowindow.getPosition());
        return;
      }

      var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667), //인포윈도우 표시 위치입니다
        iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      this.infowindow = new kakao.maps.InfoWindow({
        map: this.map, // 인포윈도우가 표시될 지도
        position: iwPosition,
        content: iwContent,
        removable: iwRemoveable,
      });

      this.map.setCenter(iwPosition);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 0px;
  
}

button {
  margin: 0 3px;
}
</style>
