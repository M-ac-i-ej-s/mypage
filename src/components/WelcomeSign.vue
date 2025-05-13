<template lang="">
  <div class="welcome-sign-container">
    <div>
      <h1 class="animate__animated animate__fadeInLeft">It's time for a change.</h1>
      <h2 class="second-tier-text animate__animated animate__fadeInLeft animate__delay-1s">Let us help!</h2>
    </div>
    <div class="welcome-sign-button animate__animated animate__fadeInUp animate__delay-2s">
      <v-btn class="welcome-sign-button-value" color="#0B1215" height="48" width="200" rounded>
        Let's go!&nbsp;<v-icon icon="mdi-arrow-down" />
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'WelcomeSign',
  }
</script>
<style lang="scss">
.welcome-sign-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: Inter;
    font-size: 2.5rem;
    gap: 100px;
    .welcome-sign-button {
      display: flex;
      justify-content: center;
      .welcome-sign-button-value {
        animation: animate-icon-down 1.5s infinite alternate linear;
      }
    }
}

@keyframes animate-icon-down {
    0% {
        -webkit-box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
        -moz-box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
        box-shadow: 0px 0px 24px 0px rgba(66, 68, 90, 1);
    }
    100% {
        -webkit-box-shadow: 0;
        -moz-box-shadow: 0;
        box-shadow: 0;
    }
}
</style>
