<template>
    <div>
        <div>VideoGoodJob 컴포넌트</div>
        <div>
            {{로그인유저이름}}님, 오늘 운동을 {{연속으로운동한일수}}일이나 연속으로 하셨어요!
        </div>
        <div>
            자랑하러 가볼까요?
        </div>
        <v-btn
        rounded
        color="primary"
        dark
        @click="goToBoast"
        >
        자랑하러 가기
        </v-btn>

    </div>
</template>

<script>
export default {
    name: 'VideoGoodJob',
    methods: {
        goToBoast() {
            // 오늘 운동한 영상이 담긴 Diary 객체를 들고
            // 커뮤니티 뷰로 가는데 '작성'칸에 오늘한 운동 리스트 좌르륵 업로드 해놓고
            // 게시글 작성할 수 있게
        }
    }
}
</script>

<style></style>
