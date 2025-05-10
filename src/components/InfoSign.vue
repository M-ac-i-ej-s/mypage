<template lang="">
  <div class="info-sign-container">
    <div>
      <h1>But what we can help you with?</h1>
      <h2>Here, take a look.</h2>
    </div>
    <div class="info-sign-instructions-container">
      <div class="info-sign-instructions">
        <v-icon class="icon-laptop" color="#FAF9F6" icon="mdi-laptop" />
        <div class="info-sign-instructions-text">
          <h2>We ask for your webpage url.</h2>
          <h2>No unnecessery files or folders.</h2>
        </div>
      </div>
      <div class="info-sign-instructions second">
        <v-icon class="icon-laptop" color="#FAF9F6" icon="mdi-laptop" />
        <div class="info-sign-instructions-text">
          <h2>SSSSSSSSS</h2>
          <h2>No unnecessery files or folders.</h2>
        </div>
      </div>
      <div class="info-sign-instructions third">
        <v-icon class="icon-laptop" color="#FAF9F6" icon="mdi-laptop" />
        <div class="info-sign-instructions-text">
          <h2>HHHHHHHHHHHH</h2>
          <h2>No unnecessery files or folders.</h2>
        </div>
      </div>
      <div>
        <v-btn class="info-sign-button-value" color="#0B1215" icon="mdi-arrow-left" @click="prevInfo" />
        <v-btn class="info-sign-button-value" color="#0B1215" icon="mdi-arrow-right" @click="nextInfo" />
      </div>
    </div>
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
      nextInfo () {
        this.infoState += 1
        if (this.infoState > 2) {
          this.infoState = 0
        }
        const instructions = document.querySelectorAll('.info-sign-instructions') as NodeListOf<HTMLElement>
        if (this.infoState === 0) {
          instructions[0].style.left = 'auto'
          instructions[1].style.left = '100%'
          instructions[2].style.left = '200%'
        } else if (this.infoState === 1) {
          instructions[0].style.left = '-100%'
          instructions[1].style.left = 'auto'
          instructions[2].style.left = '100%'
        } else if (this.infoState === 2) {
          instructions[0].style.left = '-200%'
          instructions[1].style.left = '-100%'
          instructions[2].style.left = 'auto'
        }
      },
      prevInfo () {
        this.infoState -= 1
        if (this.infoState < 0) {
          this.infoState = 2
        }
        const instructions = document.querySelectorAll('.info-sign-instructions') as NodeListOf<HTMLElement>
        if (this.infoState === 0) {
          instructions[0].style.left = 'auto'
          instructions[1].style.left = '100%'
          instructions[2].style.left = '200%'
        } else if (this.infoState === 1) {
          instructions[0].style.left = '-100%'
          instructions[1].style.left = 'auto'
          instructions[2].style.left = '100%'
        } else if (this.infoState === 2) {
          instructions[0].style.left = '-200%'
          instructions[1].style.left = '-100%'
          instructions[2].style.left = 'auto'
        }
      },
    },
  }
</script>
<style lang="scss">
.info-sign-container {
    position: relative;
    padding: 200px 0 300px 0;
    color: #FAF9F6;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    font-family: Inter;
    font-size: 2rem;
    background-color: #0B1215;
    gap: 100px;
    .info-sign-instructions {
        position: absolute;
        display: flex;
        align-content: center;
        gap: 30px;
        .icon-laptop {
            display: flex;
            justify-content: center;
            font-size: 15rem;
        }
        .info-sign-instructions-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        &.second {
            left: 100%;
        }
        &.third {
            left: 200%;
        }
    }
    .info-sign-instructions-container {
        // position: absolute;
    }
}
</style>
