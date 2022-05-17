<template>
    <div>
        <HeaderNav></HeaderNav>
        <VideoGoodJob></VideoGoodJob>
        <GoodInfo/>
    </div>
</template>

<script>
import HeaderNav from '@/components/common/HeaderNav.vue'
import VideoGoodJob from '@/components/video/VideoGoodJob.vue'
import GoodInfo from '@/components/common/GoodInformation.vue'

export default {
    name: 'HomeView',
    components: {
        HeaderNav,
        VideoGoodJob,
        GoodInfo,
    }
}
</script>

<style>

</style>