<template>
    <div id="my-diary-create">
        <div>MyDaiaryCreate컴포넌트</div>
        <div class="step1" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
        <div>step1</div>
        <div>오늘은 어느 부위를 운동해볼까요?</div>
        <div>[신체부위 사진]</div>
        <p>{{ part }}</p>
            <div>
            <input type="radio" id="body" name="drone" value="1"  v-model="partNo">
            <label for="body">전신</label>
            <input type="radio" id="top" name="drone" value="2" v-model="partNo">
            <label for="top">상체</label>
            <input type="radio" id="bottom" name="drone" value="3" v-model="partNo">
            <label for="bottom">하체</label>
            <input type="radio" id="abs" name="drone" value="4" v-model="partNo">
            <label for="abs">복부</label>
            </div>
        <v-btn rounded color="black" dark>다음 단계로</v-btn>
        </div>

        <div class="step2" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step2</div>
            <div>운동 강도를 골라주세요!</div>
            <v-rating
                full-icon="★"
                empty-icon="☆"
                hover
                v-model="difficulty"
                background-color="grey lighten-1"
                color="red lighten-3"
                large
            ></v-rating>

            {{difficulty}}
            <v-btn rounded color="black" dark>다음 단계로</v-btn>
        </div>


        <div class="step3" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step3</div>
            <div>어디에서 운동을 하실건가요?</div>
            <div class="work-out-spot">
                <div>
                    <v-img src='@/assets/gym.png' max-width="100" max-height="100" @click="spotNo = 1"/>
                </div>
                <div>
                    <v-img src='@/assets/gym.png' max-width="100" max-height="100" @click="spotNo = 2"/>
                </div>
            </div>
            {{spotNo}}
            <v-btn rounded color="black" dark @click="showVideos">다 골랐어요!</v-btn>
        </div>
        <video-select></video-select>
    </div>
</template>

<script>
import videoSelect from "@/components/video/VideoSelect.vue"
import { mapState } from 'vuex'

export default {
    name: 'MyDiaryCreate',
    data() {
        return {
            partNo: "",
            difficulty: "",
            spotNo: "",
        }
    },
    computed : {
        ...mapState(['videoList'])
    },
    methods: {
        showVideos() {
            const condition = {
                partNo: this.partNo,
                difficulty: this.difficulty,
                spotNo: this.spotNo,
            }
            console.log(condition);
            this.$store.dispatch('showVideos', condition)
        }
    },
    components : {
        videoSelect
    }
    
    
}
</script>

<style>
.work-out-spot {
    display: flex;
}
</style>