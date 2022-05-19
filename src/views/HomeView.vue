<template>
    <div>
        <router-view/>
        <div class="calda">
            <MyCalender></MyCalender>
            <MyDiary></MyDiary>
        </div>
        <VideoSelect/>
        <VideoGoodJob></VideoGoodJob>
        <GoodInfo/>
    </div>
</template>

<script>
import VideoGoodJob from '@/components/video/VideoGoodJob.vue'
import GoodInfo from '@/components/common/GoodInformation.vue'
import MyCalender from '@/components/diary/MyCalender.vue'
import MyDiary from '@/components/diary/MyDiary.vue'
import VideoSelect from '@/components/video/VideoSelect.vue'

export default {
    name: 'HomeView',
    components: {
    VideoGoodJob,
    GoodInfo,
    MyCalender,
    MyDiary,
    VideoSelect,
}

}
</script>

<style>

#my-schedule {
    display: flex;
    justify-content: space-around;
}    
.calda {
    display: flex;
    justify-content: center;
}
</style>