<template lang="">
  <div class="info-sign-container">
    <v-lazy>
      <div class="info-sign-text">
        <h1>But what we can help you with?</h1>
        <h2>Here, take a look - step by step.</h2>
      </div>
    </v-lazy>
    <v-lazy>
      <div class="info-cards-container">
        <div class="info-card animate__animated animate__fadeInLeft animate__delay-2s" @mouseleave="hoverFun(false, 0)" @mouseover="hoverFun(true, 0)">
          <div class="info-card-number">
            1
          </div>
          <div class="info-card-text">
            some text
          </div>
        </div>
        <div class="info-card animate__animated animate__fadeInLeft animate__delay-1s" @mouseleave="hoverFun(false, 1)" @mouseover="hoverFun(true, 1)">
          <div class="info-card-number">
            2
          </div>
          <div class="info-card-text">
            some text
          </div>
        </div> 
        <div class="info-card animate__animated animate__fadeInLeft" @mouseleave="hoverFun(false, 2)" @mouseover="hoverFun(true, 2)">
          <div class="info-card-number">
            3
          </div>
          <div class="info-card-text">
            some text
          </div>
        </div>
      </div>
    </v-lazy>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'InfoSign',
    data () {
      return {
        infoState: 0,
      }
    },
    methods: {
      hoverFun (state: boolean, index: number) {
        const infoCardsNumbers = document.querySelectorAll('.info-card-number') as NodeListOf<HTMLElement>
        const infoCardsText = document.querySelectorAll('.info-card-text') as NodeListOf<HTMLElement>
        if (state) {
          infoCardsNumbers[index].style.transition = '0.4s ease-in-out'
          infoCardsNumbers[index].style.opacity = '0'
          infoCardsText[index].style.transition = '0.4s ease-in-out'
          infoCardsText[index].style.opacity = '1'
          infoCardsText[index].style.filter = 'blur(0px)'
        } else {
          infoCardsNumbers[index].style.transition = '5s ease-in-out'
          infoCardsNumbers[index].style.opacity = '1'
          infoCardsText[index].style.transition = '2s ease-in-out'
          infoCardsText[index].style.opacity = '0.5'
          infoCardsText[index].style.filter = 'blur(3px)'
        }
      },
    },
  }
</script>
<style lang="scss">
.info-sign-container {
    position: relative;
    height: 100vh;
    color: #FAF9F6;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: Inter;
    font-size: 2rem;
    background-color: #0B1215;
    gap: 50px;
    .info-sign-text {
      padding: 0 0 25px 0;
    }
    .info-cards-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      gap: 30px;
      .info-card {
        position: relative;
        width: 400px;
        height: 500px;
        background-color: rgb(116, 116, 116, 0.1);
        box-shadow: 0px 0px 24px 0px rgba(116, 116, 116, 0.2);
        transition: 0.4s ease-in-out;
        margin: auto;
        cursor: pointer;
        &:hover {
          box-shadow: 0px 0px 24px 0px rgba(185, 185, 185, 0.2);
          transform: scale(1.02);
        }
        .info-card-number {
          position: absolute;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          top: 50%;
          font-size: 11rem;
          font-weight: 900;
          color: rgb(250, 249, 246, 0.8);
          transition: 0.4s ease-in-out;
        }
        .info-card-text {
          padding: 20px;
          opacity: 0.5;
          filter: blur(3px);
          transition: 0.5s ease-in-out;
        }
      }
    }
}
</style>
