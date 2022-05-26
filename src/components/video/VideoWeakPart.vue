<template>
  <div class="weak-main">
    <div class="chartbox">
      <h1 style="margin-bottom: 50px">나의 운동 분석 차트</h1>
      <Radar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </div>
    <div class="result">
      <h3>잔디 건강 지표</h3>
      <div class="icon" v-if="result == 'good'">
        <img src="@/assets/good.png" alt="" width="100px">
      </div>
      <div class="icon" v-if="result == 'bad'" >
        <img src="@/assets/bad.jpg" alt="" width="150px">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Radar } from "vue-chartjs/legacy";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  RadialLinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  RadialLinearScale,
  LineElement
);
export default {
  name: "RadarChart",
  components: {
    Radar,
  },
  props: {
    chartId: {
      type: String,
      default: "radar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 600,
    },
    height: {
      type: Number,
      default: 600,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      result: "",
      chartData: {
        labels: ["전신", "상체", "복부", "하체"],
        datasets: [
          {
            label: "나의 운동 빈도",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [0, 0, 0, 0],
          },
          {
            label: "평균 운동 강도",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [0, 0, 0, 0],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapState(["mydata"]),
  },
  created() {
    this.$store.dispatch("getMyData");
    let sum = 0;
    for (let i = 0; i < this.$store.state.reviews.length; i++) {
      if (this.$store.state.user.id === this.$store.state.reviews[i].userId) {
        sum = sum + 1;
      }
    }
    let temp = 0;
    let sum2 = 0;
    for (let i = 0; i < this.$store.state.userPlan.length; i++) {
      if (temp != this.$store.state.userPlan[i].date.substr(8, 2)) {
        sum2 = sum2 + 1;
        temp = this.$store.state.userPlan[i].date.substr(8, 2);
      }
    }
    if (sum >= sum2 / 2) {
      this.result = "good";
    } else {
      this.result = "bad";
    }
  },
  mounted() {
    let temp = [0, 0, 0, 0];
    let temp2 = [0, 0, 0, 0];
    for (let i = 0; i < this.$store.state.mydata.length; i++) {
      let md = this.$store.state.mydata[i];
      temp[md.partNo - 1] = md.count;
      temp2[md.partNo - 1] = md.difficulty;
    }
    this.chartData.datasets[0].data = temp;
    this.chartData.datasets[1].data = temp2;
  },
};
</script>

<style scoped>
.weak-main {
  width: 800px;
  margin: 0 auto 100px;
  display: flex;
  justify-content: space-between;
}
.chartbox {
  margin-top: 70px;
}
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.result .icon {
  margin-top: 20px;
}
</style>