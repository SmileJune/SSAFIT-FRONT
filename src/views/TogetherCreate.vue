<template>
  <div id="main">
    <div data-aos="fade-up" data-aos-duration="2000">
    <div class="title">
      <h1><span><font-awesome-icon icon="fa-solid fa-bicycle" /></span>   약속 잡기</h1>
    </div>
    <div class="whether">
    <vue-weather
      api-key="e4440d2e63625cac64aa8c732b44bcc3"
      units="us"
      :latitude= now.lat
      :longitude= now.lng
      />
    </div>
    <div class="map">
      <div id="map" style="width: 1000px; height: 700px"></div>
    </div>
    <div>
      <div class="box step1">
        <h4>step1</h4>
        <div>약속 장소를 지도에 클릭하세요!</div>
      </div>
      <div class="box step2">
        <h4>step2</h4>
        <v-datetime-picker
          label="이곳을 클릭해 약속 날짜와 시간을 고르세요!"
          v-model="datetime"
        >
        </v-datetime-picker>
      </div>
      <div class="box step3">
        <h4>step3</h4>
        <div>간단한 소개를 작성하고 등록하세요!</div>
        <input
          id="'content"
          type="text"
          v-model="content"
          style="width: 1000px"
        />
        <hr />
      </div>
      <div class="button-group">
        <v-btn
          @click="createTogether"
          color="primary"
          elevation="3"
          large
          rounded
          >약속 등록하기</v-btn
        >
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import VueWeather from "vue-weather-widget";
export default {
  name: "TogetherCreate",
  data() {
    return {
      markers: [],
      infowindow: null,
      now: null,
      lat: 1,
      lng: 1,
      date: "",
      time: "",
      content: "",
      datetime: "",
    };
  },
  components: {
      VueWeather,
  },
  computed: {
    ...mapState(["latlng"]),
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

    // let serviceKey = process.env.VUE_APP_WHETHER_KEY;
    // let numOfRows = 250;
    // let pageNo = 1;
    // let dataType = JSON;

    console.log(new Date());
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
    createTogether() {
      let datetime = this.datetime+"";
      let arr = datetime.split(" ");
      switch(arr[1]){
        case 'Jan':
          arr[1] = 1; break;
        case 'Feb':
          arr[1] = 2; break;
        case 'Mar':
          arr[1] = 3; break;
        case 'Apr':
          arr[1] = 4; break;
        case 'May':
          arr[1] = 5; break;
        case 'Jun':
          arr[1] = 6; break;
        case 'Jul':
          arr[1] = 7; break;
        case 'Aug':
          arr[1] = 8; break;
        case 'Sep':
          arr[1] = 9; break;
        case 'Oct':
          arr[1] = 10; break;
        case 'Nov':
          arr[1] = 11; break;
        case 'Dec':
          arr[1] = 12; break;
      }
      let result = `${arr[3]}-${arr[1]}-${arr[2]} ${arr[4]}`;

      let payload = {
        lat: this.lat,
        lng: this.lng,
        date: result,
        content: this.content,
      };
      console.log(payload);
      this.$store.dispatch("createTogether", payload);
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

      let marker = new kakao.maps.Marker({
        position: this.map.getCenter(),
      });

      marker.setMap(this.map);

      kakao.maps.event.addListener(this.map, "click", (mouseEvent) => {
        // 클릭한 위도, 경도 정보를 가져옵니다
        let latlng = mouseEvent.latLng;
        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);
        this.lat = latlng.getLat();
        this.lng = latlng.getLng();
        console.log(mouseEvent);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#main {
  width: 1050px;
  margin: 30px auto;
}

#map {
  width: 400px;
  height: 400px;
}

.title {
  margin: 30px;
}

.map {
  margin-bottom: 50px;
}

.button-group {
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}

.box {
  margin: 50px;
}

.step1 {
  margin-bottom: 10px;
}

</style>