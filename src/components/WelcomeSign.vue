<template lang="">
  <div class="welcome-sign-container">
    <div>
      <h1>It's time for a change.</h1>
      <h2>Let us help!</h2>
    </div>
    <div class="welcome-sign-button">
      <v-btn class="welcome-sign-button-value" color="#0B1215" icon="mdi-arrow-down" />
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
    padding: 200px 0 300px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: Inter;
    font-size: 2rem;
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
