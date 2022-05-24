<template>
  <div data-aos="fade-right" 
  data-aos-duration="1500"
  class="calender">
    <v-row>
      <v-col>
        <v-sheet height="300">
          <v-date-picker
            v-model="date1"
            header-color="primary"
            width="500"
            @change="getEvents"
            :events="functionEvents"
            :event-color="(date) => (date ? 'red' : 'green')"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    arraytemp: [],
    arrayFail: [],
    arraySuccess: [],
    date1: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),

  created() {
    this.$store.dispatch("getUserPlan");
  },
  mounted() {
    this.arraytemp = this.$store.state.userPlan;
    for (let i = 0; i < this.arraytemp.length; i++) {
      let day = this.arraytemp[i].date.substr(8, 2);
      this.arrayFail.push(day);
    }
      for (let i = 0; i < this.$store.state.reviews.length; i++) {
        let temp = this.$store.state.reviews[i];
        if (temp.userId == this.$store.state.user.id) {
          this.arraySuccess.push(temp.date.substr(8, 2));
        }
      }
  },

  methods: {
    getEvents(event) {
      this.$store.dispatch("changeDate", event);
      this.$store.dispatch("getPlan", this.$store.state.date);
    },
    functionEvents(date) {
      const [, , day] = date.split("-");
      if (this.arrayFail.includes(day)) {
        if (this.arraySuccess.includes(day)) {
          return ["green"];
        } else return true;
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.calender {
  flex: 0;
  justify-content: center;
}
.toolbar {
  display: flex;
  justify-content: center;
}

.v-date-picker-header {
  height: 60px;
  font-size: 30px;
}
.v-date-picker-table {
  max-width: 500px !important;
  height: 351px !important;

  th {
    font-size: 25px !important;
    color: var(--color-blue4) !important;
  }
  td {
    font-size: 30px !important;
  }
  .v-btn__content {
    font-size: 27px !important;
  }
  .red,
  .green {
    margin-top: 15px;
    height: 3px;
    width: 30px;
  }
}
</style>
