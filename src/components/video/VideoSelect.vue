<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-container>
      <v-row dense>
        <v-col
          v-for="video in videoList" :key="video.no" cols="12"
        >
          <v-card
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="video.title"
                ></v-card-title>

                <v-card-subtitle v-text="video.channelName"></v-card-subtitle>
              </div>
                <input type="checkbox">
                <div class="video">
                  <div class="video-container">
                    <iframe width="100%" height="100%" :src="video.url" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return{
            radioValues: '',
        }
    },
    computed : {
      ...mapState(['videoList'])
    }
}
</script>

<style>

</style>