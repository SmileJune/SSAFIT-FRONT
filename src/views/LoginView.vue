<template>
  <div>
    <label for="id">ID : </label>
    <input v-model="id" type="text" id="id">
    <label for="password">PASSWORD : </label>
    <input v-model="password" type="password" id="password">
    <v-btn @click="login">로그인</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id : "",
      password : ""
    }
  },
  methods : {
    login() {
      let user = {id : this.id, password : this.password}
      this.$store.dispatch('login', user)
    }
  } 
}
</script>

<style>

</style>