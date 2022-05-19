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
            <fieldset>

                <div>
                <input type="radio" id="huey" v-model="part" value="1">
                <label for="huey">전신</label>
                </div>

                <div>
                <input type="radio" id="dewey" v-model="part" value="2">
                <label for="dewey">상체</label>
                </div>

                <div>
                <input type="radio" id="louie" v-model="part" value="3">
                <label for="louie">하체</label>
                </div>

                <div>
                <input type="radio" id="asdf" v-model="part" value="4">
                <label for="asdf">복부</label>
                </div>
            </fieldset>

            <v-btn rounded color="black" dark>다음 단계로</v-btn>
        </div>
        <!-- 스크롤을 내릴때마다 시간차로 올라와야 하는데? -->
        <div class="step2" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step2</div>
            <div>운동 강도를 골라주세요!</div>

        </div>
        <div class="step3" data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center">
            <div>step3</div>
            <div>어디에서 운동을 하실건가요?</div>
            <div class="work-out-spot">
                <div>
                    <a @click="Redirect">
                        <v-img src='@/assets/gym.png' max-width="100" max-height="100" />
                        헬스장
                    </a>
                </div>
                <div>
                    <a>
                        <v-img src='@/assets/gym.png' max-width="100" max-height="100" />
                        홈트
                    </a>
                </div>
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
                part: '',
                difficulty: 3,
                spot: null,
                selected: '',

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
.work-out-spot {
    display: flex;
}
</style>