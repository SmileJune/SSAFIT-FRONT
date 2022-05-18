<template>
    <div>
        <HeaderNav></HeaderNav>
         <div class="calda">
            <MyCalender></MyCalender>
            <MyDiary></MyDiary>
        </div>
        <MyDiaryCreate/>
        <VideoGoodJob></VideoGoodJob>
        <GoodInfo/>
    </div>
</template>

<script>
import HeaderNav from '@/components/common/HeaderNav.vue'
import VideoGoodJob from '@/components/video/VideoGoodJob.vue'
import GoodInfo from '@/components/common/GoodInformation.vue'
import MyCalender from '@/components/diary/MyCalender.vue'
import MyDiary from '@/components/diary/MyDiary.vue'
import MyDiaryCreate from '@/components/diary/MyDiaryCreate.vue'


export default {
    name: 'HomeView',
    components: {
        HeaderNav,
        VideoGoodJob,
        GoodInfo,
        MyCalender,
        MyDiary,
        MyDiaryCreate
    }

}
</script>

<style>
#my-schedule {
    display: flex;
    justify-content: space-around;
    
.calda {
    display: flex;
    justify-content: center;
}
</style>