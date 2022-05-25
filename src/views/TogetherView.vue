<template>
  <div id="main" data-aos="fade-up" data-aos-duration="2000">
    <h1><span><font-awesome-icon icon="fa-solid fa-people-pulling" /></span
              >   주변에 같이 운동할 친구 없나? 💪🏽</h1>
    <br />
   
  <div class="weather">
   <vue-weather
    api-key="e4440d2e63625cac64aa8c732b44bcc3"
    units="uk"
    :latitude= now.lat
    :longitude= now.lng
    />
  </div>

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

      <router-link to="/together-create"
        ><v-btn color="primary" elevation="3" large rounded
          >약속잡기</v-btn
        ></router-link
      >
      <!-- <v-btn color="primary" elevation="3" large rounded>약속잡기</v-btn> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueWeather from "vue-weather-widget";
export default {
  name: "KakaoMap",
  data() {
    return {
      // markerPositions1: [
      //   {
      //     latlng: [36.3574142, 127.3093141],
      //     content: "1번",
      //   },
      //   {
      //     latlng: [36.3584142, 127.3103141],
      //     content: "2번",
      //   },
      //   {
      //     latlng: [36.3594142, 127.3083141],
      //     content: "3번",
      //   },
      //   {
      //     latlng: [36.3544142, 127.3033141],
      //     content: "4번",
      //   },
      // ],
      markers: [],
      infowindow: null,
      now: null,
    };
  },
   components: {
      VueWeather,
    },
  computed: {
    ...mapState(["markerPositions1"]),
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

    this.$store.dispatch("getPositions");
  },
  methods: {
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
        let latDistance = Math.abs(this.now.lat - this.markerPositions1[i].lat);
        let lngDistance = Math.abs(this.now.lng - this.markerPositions1[i].lng);

        if ((latDistance < 0.007) & (lngDistance < 0.007)) {
          var marker = new kakao.maps.Marker({
            map: this.map,
            position: new kakao.maps.LatLng(
              this.markerPositions1[i].lat,
              this.markerPositions1[i].lng
            ),
          });

          var content = `
          <div class="wrap">
            <div>${this.markerPositions1[i].date.substr(
              5,
              2
            )}월 ${this.markerPositions1[i].date.substr(8, 2)}일
            ${this.markerPositions1[i].date.substr(11, 2)}시
            ${this.markerPositions1[i].date.substr(14, 2)}분
            </div>
            <div>${this.markerPositions1[i].content}</div>
          </div>
          `;

          // 마커 위에 커스텀오버레이를 표시합니다
          // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
          var overlay = new kakao.maps.CustomOverlay({
            content: content,
            map: this.map,
            position: marker.getPosition(),
          });

          // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
          kakao.maps.event.addListener(marker, "click", function () {
            overlay.setMap(this.map);
          });

          // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
          // function closeOverlay() {
          //   overlay.setMap(null);
          // }
        }
      }
      this.map.setCenter(new kakao.maps.LatLng(this.now.lat, this.now.lng));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#main {
  width: 1050px;
  margin: 30px auto;
}

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

.wrap {
  background-color: #123123;
  position: relative;
  bottom: 100px;
}
.weather {
  padding-left: 80px;
}

</style>