<template lang="">
  <div class="welcome-sign-container">
    <div>
      <h1 class="animate__animated animate__fadeInLeft">It's time for a change.</h1>
      <h2 class="second-tier-text animate__animated animate__fadeInLeft animate__delay-1s">Let us help!</h2>
    </div>
    <div class="welcome-sign-button animate__animated animate__fadeInUp animate__delay-2s">
      <v-btn
        class="welcome-sign-button-value"
        color="#0B1215"
        height="48"
        rounded
        width="200"
        @click="scrollElementBottomToTop('.welcome-sign-container')"
      >
        Let's go!&nbsp;<v-icon icon="mdi-arrow-down" />
      </v-btn>
    </div>
    <svg id="wave" class="welcome-sign-svg" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(11, 18, 21, 1)" offset="0%"></stop><stop stop-color="rgba(61.793, 61.793, 61.793, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,30L10,33.3C20,37,40,43,60,43.3C80,43,100,37,120,40C140,43,160,57,180,66.7C200,77,220,83,240,75C260,67,280,43,300,41.7C320,40,340,60,360,71.7C380,83,400,87,420,86.7C440,87,460,83,480,76.7C500,70,520,60,540,50C560,40,580,30,600,21.7C620,13,640,7,660,10C680,13,700,27,720,33.3C740,40,760,40,780,48.3C800,57,820,73,840,75C860,77,880,63,900,48.3C920,33,940,17,960,15C980,13,1000,27,1020,40C1040,53,1060,67,1080,68.3C1100,70,1120,60,1140,56.7C1160,53,1180,57,1200,63.3C1220,70,1240,80,1260,76.7C1280,73,1300,57,1320,46.7C1340,37,1360,33,1380,40C1400,47,1420,63,1430,71.7L1440,80L1440,100L1430,100C1420,100,1400,100,1380,100C1360,100,1340,100,1320,100C1300,100,1280,100,1260,100C1240,100,1220,100,1200,100C1180,100,1160,100,1140,100C1120,100,1100,100,1080,100C1060,100,1040,100,1020,100C1000,100,980,100,960,100C940,100,920,100,900,100C880,100,860,100,840,100C820,100,800,100,780,100C760,100,740,100,720,100C700,100,680,100,660,100C640,100,620,100,600,100C580,100,560,100,540,100C520,100,500,100,480,100C460,100,440,100,420,100C400,100,380,100,360,100C340,100,320,100,300,100C280,100,260,100,240,100C220,100,200,100,180,100C160,100,140,100,120,100C100,100,80,100,60,100C40,100,20,100,10,100L0,100Z"></path></svg>
  </div>
</template>
<script lang="ts">
  import mixin from '@/mixin';

  export default {
    name: 'WelcomeSign',
    mixins: [mixin],
  }
</script>
<style lang="scss">
.welcome-sign-container {
    position: relative;
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
    @media screen and (max-width: 640px) {
      gap: 50px;
    }
    .welcome-sign-button {
      display: flex;
      justify-content: center;
      .welcome-sign-button-value {
        animation: animate-icon-down 1.5s infinite alternate linear;
      }
    }
    .welcome-sign-svg {
      position: absolute;
      bottom: -1px;
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
