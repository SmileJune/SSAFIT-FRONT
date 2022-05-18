<template>
    <div>
        <HeaderNav></HeaderNav>
        <VideoGoodJob></VideoGoodJob>
        <GoodInfo/>
        <div class="calda">
            <MyCalender></MyCalender>
            <MyDiary></MyDiary>
        </div>
    </div>
</template>

<script>
import HeaderNav from '@/components/common/HeaderNav.vue'
import VideoGoodJob from '@/components/video/VideoGoodJob.vue'
import GoodInfo from '@/components/common/GoodInformation.vue'
import MyCalender from '@/components/diary/MyCalender.vue'
import MyDiary from '@/components/diary/MyDiary.vue'

export default {
    name: 'HomeView',
    components: {
    HeaderNav,
    VideoGoodJob,
    GoodInfo,
    MyCalender,
    MyDiary
}
}
</script>

<style>
.calda {
    display: flex;
    justify-content: center;
}
</style>