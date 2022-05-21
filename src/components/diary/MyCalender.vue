<template>
  <div class="calender">
    <v-row>
      <v-col>
        <!-- <v-sheet height="64" >
        <v-toolbar
          flat
          class="toolbar" 
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-toolbar>
      </v-sheet> -->
        <v-sheet height="300">
          <!-- <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          @click="showDiary"
        ></v-calendar> -->
          <v-date-picker
            v-model="date"
            mode="date"
            ref="calendar"
            width="400"
            @change="getEvents"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "",
    };
  },
  created() {
    // let today = new Date();
    // let year = today.getFullYear();
    // let month = today.getMonth();
    // let date = today.getDate();
    // this.date = today;
    // console.log(this.date);
  },
  methods: {
    showDiary() {},
    setToday() {
      this.focus = "";
    },
    // prev () {
    //   this.$refs.calendar.prev()
    // },
    // next () {
    //   this.$refs.calendar.next()
    // },
    getEvents(event) {
      this.$store.dispatch("changeDate", event);
      this.$store.dispatch("getPlan", this.$store.state.date);
    },
  },
};
</script>

<style>
.calender {
  flex: 1;
  justify-content: center;
}
.toolbar {
  display: flex;
  justify-content: center;
}

/* .v-date-picker-table {
  height : 500px !important;
} */
</style>