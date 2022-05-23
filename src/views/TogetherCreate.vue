<template>
  <div>
    <div id="map" style="width: 1000px; height: 700px"></div>
    <div class="button-group">
      <v-btn
        color="primary"
        elevation="3"
        large
        rounded
        @click="displayInfoWindow"
        >내 주위 등록된 약속 보기</v-btn
      >
      <v-btn color="primary" elevation="3" large rounded>약속잡기</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "KakaoMap",
  data() {
    return {
      markerPositions1: [
        {
          latlng: [36.3574142, 127.3093141],
          content: "1번",
        },
        {
          latlng: [36.3584142, 127.3103141],
          content: "2번",
        },
        {
          latlng: [36.3594142, 127.3083141],
          content: "3번",
        },
        {
          latlng: [36.3544142, 127.3033141],
          content: "4번",
        },
      ],
      markers: [],
      infowindow: null,
      now: null,
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.now = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert("GPS를 지원하지 않습니다");
    }
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}`;
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
    },

    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
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
      for (let i = 0; i < this.markerPositions1.length; i++) {
        let latDistance = Math.abs(
          this.now.lat - this.markerPositions1[i].latlng[0]
        );
        let lngDistance = Math.abs(
          this.now.lng - this.markerPositions1[i].latlng[1]
        );

        console.log(latDistance);
        console.log(lngDistance);

        if ((latDistance < 0.007) & (lngDistance < 0.007)) {
          var iwContent = `<div style="padding:5px;">${this.markerPositions1[i].content}</div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(
              this.markerPositions1[i].latlng[0],
              this.markerPositions1[i].latlng[1]
            ), //인포윈도우 표시 위치입니다
            iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

          this.infowindow = new kakao.maps.InfoWindow({
            map: this.map, // 인포윈도우가 표시될 지도
            position: iwPosition,
            content: iwContent,
            removable: iwRemoveable,
          });
        }
      }
      this.map.setCenter(new kakao.maps.LatLng(this.now.lat, this.now.lng));
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
