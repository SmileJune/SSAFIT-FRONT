<template>
    
    <div>
        <div>MyDaiaryCreate컴포넌트</div>
        <div class="step1" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step1</div>
            <div>오늘은 어느 부위를 운동해볼까요?</div>
            <div>[신체부위 사진]</div>
            <v-btn rounded color="black" dark>다음 단계로</v-btn>
        </div>
        <!-- 스크롤을 내릴때마다 시간차로 올라와야 하는데? -->
        <div class="step2" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step2</div>
            <div>운동 강도를 골라주세요!</div>
            <v-rating
                v-model="rating"
                background-color="grey lighten-1"
                color="red lighten-3"
                large
            ></v-rating>
            <div>[드래그]</div>
            <v-btn rounded color="black" dark>다음 단계로</v-btn>
        </div>
        <div class="step3" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step3</div>
            <div>어디에서 운동을 하실건가요?</div>
            <div class="work-out-spot">
                <div>이미지 넣기</div>
                <v-img alt="" src="@/assets/gym.png" max-width="100" max-height="100"></v-img>
                <v-img alt="" src=""  value="home"></v-img>
            </div>
            <v-btn rounded color="black" dark @click="showVideos">다 골랐어요!</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyDiaryCreate',
    data() {
        return {
                part: [],
                difficulty: '',
                spot: '',
                rating: 4,

        }
    },
    methods: {
        showVideos() {
            const todayRoutine = {
                // 고객이 선택한 부위, 강도, 운동 장소를 객체로 만들기!
                part: this.part,
                difficulty: this.difficulty,
                spot: this.spot,
            }
            this.$store.dispatch('showVideos', todayRoutine)
        }
    }

    
}
</script>

<style>

</style>