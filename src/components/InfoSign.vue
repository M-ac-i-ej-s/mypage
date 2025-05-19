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
      <div class="arrows-for-mobile">
        <v-btn
          :class="`arrow-button-values ${[1, 2].includes(infoState) ? 'active' : ''}`"
          color="#FAF9F6"
          icon="mdi-arrow-left"
          size="x-small"
          @click="moveStateFun('prev')"
        />
        <v-btn
          :class="`arrow-button-values ${[0, 1].includes(infoState) ? 'active' : ''}`"
          color="#FAF9F6"
          icon="mdi-arrow-right"
          size="x-small"
          @click="moveStateFun('next')"
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
      moveStateFun (label: string) {
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
            this.infoState = 0
          }
        } else {
          this.infoState = this.infoState - 1
          if (this.infoState < 0) {
            this.infoState = 2
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
    .info-cards-container {
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translate3d(-50%, -50%, 0);
      display: flex;
      gap: 30px;
      overflow-x: hidden;
      @media screen and (max-width: 640px) {
        left: calc(50% + 330px);
      }
      .info-card {
        position: relative;
        width: 300px;
        height: 400px;
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
          font-size: 9rem;
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
    .info-sign-button {
      padding: 180px 0 0 0;
      display: flex;
      justify-content: center;
      .info-sign-button-value {
        animation: animate-icon-down 1.5s infinite alternate linear;
        font-weight: 800;
      }
    }
    .arrows-for-mobile {
      position: absolute;
      display: none;
      padding: 0 0 30px 0;
      gap: 320px;
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
