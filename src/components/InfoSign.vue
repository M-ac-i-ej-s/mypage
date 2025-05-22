<template lang="">
  <div class="info-sign-container">
    <v-lazy>
      <div class="info-sign-text">
        <h1>But what we can help you with?</h1>
        <h2>Here, take a look - step by step.</h2>
      </div>
    </v-lazy>
    <div style="height: 300px" />
    <v-lazy>
      <div class="info-cards-container">
        <div class="info-card animate__animated animate__fadeInLeft animate__delay-2s" @mouseleave="hoverFun(false, 0)" @mouseover="hoverFun(true, 0)">
          <div class="info-card-number">
            <v-icon color="#FAF9F6" icon="mdi-cellphone-cog" size="x-large" />
          </div>
          <div class="info-card-text">
            <span class="info-card-text-title">
              Conversion
            </span>
            <span class="info-card-text-description">
              We can convert your website to a mobile application. All we need is a <b>link</b> to your website and we will do the rest.
            </span>
          </div>
        </div>
        <div class="info-card animate__animated animate__fadeInLeft animate__delay-1s" @mouseleave="hoverFun(false, 1)" @mouseover="hoverFun(true, 1)">
          <div class="info-card-number">
            <v-icon color="#FAF9F6" icon="mdi-laptop" size="x-large" />
          </div>
          <div class="info-card-text">
            <span class="info-card-text-title">
              Building
            </span>
            <span class="info-card-text-description">
              We build websites from <b>scratch</b>. We can build anything you want, just tell us what you need.
            </span>
          </div>
        </div>
        <div class="info-card animate__animated animate__fadeInLeft" @mouseleave="hoverFun(false, 2)" @mouseover="hoverFun(true, 2)">
          <div class="info-card-number">
            <v-icon color="#FAF9F6" icon="mdi-robot" size="x-large" />
          </div>
          <div class="info-card-text">
            <span class="info-card-text-title">
              AI
            </span>
            <span class="info-card-text-description">
              We can implement AI into your website. We can implement any AI you want, ChatGPT, Eleven Labs, your call.
            </span>
          </div>
        </div>
      </div>
    </v-lazy>
    <v-lazy>
      <div class="info-sign-button">
        <v-btn
          class="info-sign-button-value"
          color="#FAF9F6"
          height="48"
          rounded
          width="200"
          @click="scrollElementBottomToTop('.info-sign-container')"
        >
          But why?&nbsp;<v-icon icon="mdi-arrow-down" />
        </v-btn>
      </div>
    </v-lazy>
    <v-lazy>
      <div class="arrows-for-mobile" @mouseleave="hoverFun(false, infoState)" @mouseover="hoverFun(true, infoState)">
        <v-btn
          :class="`arrow-button-values ${[1, 2].includes(infoState) ? 'active' : ''}`"
          color="#FAF9F6"
          icon="mdi-arrow-left"
          size="x-small"
          @click.stop="moveStateFun('prev')"
        />
        <v-btn
          :class="`arrow-button-values ${[0, 1].includes(infoState) ? 'active' : ''}`"
          color="#FAF9F6"
          icon="mdi-arrow-right"
          size="x-small"
          @click.stop="moveStateFun('next')"
        />
      </div>
    </v-lazy>
  </div>
</template>
<script lang="ts">
  import mixin from '@/mixin';

  export default {
    name: 'InfoSign',
    mixins: [mixin],
    data () {
      return {
        infoState: 0,
      }
    },
    methods: {
      hoverFun (state: boolean, index: number) {
        const infoCardsNumbers = document.querySelectorAll('.info-card-number') as NodeListOf<HTMLElement>
        const infoCardsText = document.querySelectorAll('.info-card-text') as NodeListOf<HTMLElement>
        const infoCard = document.querySelectorAll('.info-card') as NodeListOf<HTMLElement>
        if (state) {
          infoCardsText[index].style.transition = '0.5s ease-in-out'
          infoCardsNumbers[index].style.transition = '0.5s ease-in-out'
          infoCardsText[index].style.opacity = '1'
          infoCardsNumbers[index].style.opacity = '0'
          infoCardsText[index].style.filter = 'blur(0px)'
          infoCard[index].style.width = '315px'
          infoCard[index].style.height = '415px'
          infoCard[index].style.padding = '7px'
        } else {
          infoCardsNumbers[index].style.transition = '2s ease-in-out'
          infoCardsText[index].style.transition = '2s ease-in-out'
          infoCardsNumbers[index].style.opacity = '1'
          infoCardsText[index].style.opacity = '0.5'
          infoCardsText[index].style.filter = 'blur(3px)'
          infoCard[index].style.width = '300px'
          infoCard[index].style.height = '400px'
          infoCard[index].style.padding = '0px'
        }
      },
      moveStateFun (label: string) {
        [0, 1, 2].forEach(num => {
          this.hoverFun(false, num)
        })
        const multiplier = () => {
          switch (this.infoState) {
            case 0:
              return 1
            case 1:
              return 0
            case 2:
              return -1
            default:
              return 0
          }
        }

        const infoCardsContainer = document.querySelector('.info-cards-container') as HTMLElement
        if (label === 'next') {
          this.infoState = this.infoState + 1
          if (this.infoState > 2) {
            this.infoState = 2
          }
        } else {
          this.infoState = this.infoState - 1
          if (this.infoState < 0) {
            this.infoState = 0
          }
        }
        infoCardsContainer.style.left = `calc(50% + ${multiplier() * 330}px)`
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: Inter;
    font-size: 1.7rem;
    background-color: #0B1215;
    gap: 20px;
    .info-sign-text {
      @media screen and (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 60px 0 0 0;
        h1, h2 {
          font-size: 1.6rem;
        }
      }
    }
    .info-cards-container {
      position: absolute;
      height: 420px;
      left: calc(50% + 0px);
      bottom: 20px;
      transform: translate3d(-50%, -50%, 0);
      display: flex;
      gap: 30px;
      overflow-x: hidden;
      transition: 0.4s ease-in-out;
      @media screen and (max-width: 640px) {
        left: calc(50% + 330px);
      }
      .info-card {
        position: relative;
        width: 300px;
        height: 400px;
        background-color: rgb(116, 116, 116, 0.1);
        // box-shadow: 0px 0px 46px -26px rgba(11, 18, 21, 1);
        transition: 0.4s ease-in-out;
        margin: auto;
        border-radius: 24px;
        cursor: pointer;
        &:hover {
          // box-shadow: 0px 0px 24px 0px rgba(114, 114, 114, 0.2);
          width: 315px;
          height: 415px;
          padding: 7px;
          // transform: scale(1.2);
        }
        .info-card-number {
          position: absolute;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          top: 50%;
          font-size: 5rem;
          font-weight: 900;
          color: rgb(250, 249, 246, 0.8);
          transition: 0.4s ease-in-out;
        }
        .info-card-text {
          width: 300px;
          padding: 20px;
          opacity: 0.5;
          filter: blur(5px);
          transition: 0.4s ease-in-out;
          display: flex;
          flex-direction: column;
          gap: 10px;
          .info-card-text-title {
            font-size: 2rem;
            font-weight: 800;
          }
        }
      }
    }
    .info-sign-button {
      padding: 180px 0 0 0;
      display: flex;
      justify-content: center;
      @media screen and (max-width: 640px) {
        padding: 200px 0 0 0;
      }
      .info-sign-button-value {
        animation: animate-icon-down 1.5s infinite alternate linear;
        font-weight: 800;
      }
    }
    .arrows-for-mobile {
      position: absolute;
      display: none;
      padding: 0 0 52.5px 0;
      gap: 335px;
      z-index: 1;
      @media only screen and (max-width: 640px) {
        display: flex;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40%;
      }
      .arrow-button-values {
        opacity: 0.3;
        &.active {
          opacity: 0.7;
        }
      }
    }
}
</style>
