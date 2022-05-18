<template>
    <div>
        <v-app-bar id="header-nav"
            elevation="4"
        >
            <div>
                <a href="#">커뮤니티</a>
            </div>
            <div class="sign-in">
                <a href="#">로그인</a>
                <a href="#">회원가입</a>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'HeaderNav',
    components: {

    }

}
</script>


<style scoped>
#header-nav {
    display: flex;
    justify-content: space-between;
}
.sign-in > a {
    padding: 0px 5px;
}

v-app-bar {
    padding: 10px;
}

v-app-bar a {
    font-weight: bold;
    color: #2c3e50;
}

v-app-bar a.router-link-exact-active {
    color: #42b983;
}
</style>
