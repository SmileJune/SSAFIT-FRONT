<template>
  <div class="overflow">
    <!--  -->
    <section>
      <div class="welcome-message">
        <h1>WELCOME</h1>
        <h1>어서오세요</h1>
        <h3>싸핏입니다</h3>
        <h3>SSAFIT</h3>
      </div>
    </section>

    <div class="guide-1">

    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    let welcomeMessage = document.querySelector(".welcome-message")

    window.addEventListener('scroll', function () {
      let value = window.scrollY
      //console.log(value); //620

      if (value > 620) {
        welcomeMessage.style.animation = "out_welcome_message 1s ease-out"
        console.log(welcomeMessage.style.animation)
      } else {
        welcomeMessage.style.animation = "in_welcome_message 1s ease-out"
      }
    })
  }
}
</script>

<style scoped>
/* .overflow {
  width: 1800px !important;
} */

section {
  margin: 0;
  background: url(@/assets/main2.jpg);
  height: 2000px;
}

.welcome-message {
  position: absolute;
  top: 300px;
  right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: in_welcome_message 1s ease-out
}

@keyframes in_welcome_message {
  from {
    right: -300px;
    opacity: 0;
  }
  to {
    right: 100px;
    opacity: 1;
  }
}

@keyframes out_welcome_message {
  from {
    right: 100px;
    opacity: 1;
  }
  to {
    right: -300px;
    opacity: 0;
  }
  
}

h1 {
  color: white;
  font-size: 8em;
}

h3 {
  font-size: 4em;
  color: white;
  margin: 0;
}

/* #main {
  width: 100% !important
} */
</style>