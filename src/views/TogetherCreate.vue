<template>
  <div>
    <h1>약속 잡기</h1>
    <div id="map" style="width: 1000px; height: 700px"></div>
    <div class="button-group">
      <v-btn @click="createTogether" color="primary" elevation="3" large rounded>약속 등록하기</v-btn>
    </div>
    <div>
      <h1>약속 장소를 지도에 클릭하세요!</h1>
      <label for="datePicker">날짜</label>
      <input id="datePicker" type="date" v-model="date"><br>
      <label for="timePicker">시간</label>
      <input id="'timePicker" type="time" v-model="time"><br>
      <label for="content">한줄소개</label>
      <input id="'content" type="text" v-model="content"><br>
      
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "TogetherCreate",
  data() {
    return {
      markers: [],
      infowindow: null,
      now: null,
      lat: 1,
      lng: 1,
      date: '',
      time: '',
      content: '',
    };
  },
  computed : {
    ...mapState([
      'latlng'
    ])
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
    createTogether(){
      let payload = {
        lat : this.lat,
        lng : this.lng,
        date : `${this.date} ${this.time}`,
        content : this.content
      }
      console.log(payload);
      this.$store.dispatch('createTogether', payload);
    },
    initMap() {
      // let templat = 0;
      // let templng = 0;
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(this.now.lat, this.now.lng),
        level: 3,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);

      let marker = new kakao.maps.Marker({
        position: this.map.getCenter()
      });
     
      marker.setMap(this.map);

      kakao.maps.event.addListener(this.map, 'click', (mouseEvent) => {        
    
        // 클릭한 위도, 경도 정보를 가져옵니다 
        let latlng = mouseEvent.latLng; 
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        this.lat = latlng.getLat();
        this.lng = latlng.getLng();
      });

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