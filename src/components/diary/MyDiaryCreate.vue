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
            <input type="radio" id="body" name="drone" value="1"  v-model="part"
                    checked>
            <label for="body">전신</label>
            </div>

            <div>
            <input type="radio" id="top" name="drone" value="2" v-model="part">
            <label for="top">상체</label>
            </div>

            <div>
            <input type="radio" id="bottom" name="drone" value="3" v-model="part">
            <label for="bottom">하체</label>
            </div>

            <div>
            <input type="radio" id="abs" name="drone" value="4" v-model="part">
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
                v-model="rating"
                background-color="grey lighten-1"
                color="red lighten-3"
                large
            ></v-rating>



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
            // 왜 바인딩이 안됨?
                part: '',
                difficulty: 3,
                spot: null,
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
.work-out-spot {
    display: flex;
}
</style>