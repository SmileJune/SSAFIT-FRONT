<template>
  <div>
    <label for="id">ID : </label>
    <input v-model="id" type="text" id="id">
    <label for="password">PASSWORD : </label>
    <input v-model="password" type="password" id="password">
    <label for="nickname">닉네임 : </label>
    <input v-model="nickname" type="text" id="nickname">
    <label for="introduce">자기소개 : </label>
    <input v-model="introduce" type="text" id="introduce">
    <v-btn @click="join">회원가입</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id : "",
      password : "",
      nickname : "",
      introduce : "",
    }
  },
  methods : {
    join () {
      let user = {id : this.id, password : this.password, 
      nickname : this.nickname, introduce : this.introduce}
      this.$store.dispatch('join', user)
    }
  }
}
</script>

<style>

</style>