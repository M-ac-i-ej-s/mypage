<template lang="">
  <div class="navbar">
    <div class="navbar-menu">
      <div class="navbar-menu left" @click="switchPage('about')">
        <v-icon class="menu-icon" icon="mdi-information" size="x-large" />
      </div>
      <div class="navbar-menu mid" @click="switchPage('')">
        <v-icon class="menu-icon" icon="mdi-home" size="x-large" />
      </div>
      <div class="navbar-menu right" @click="switchPage('store')">
        <v-icon class="menu-icon" icon="mdi-store" size="x-large" />
      </div>
    </div>

    <v-btn
      class="toggle-button mb-4"
      icon
      size="large"
      variant="text"
      @click="toggleMenu"
    >
      <v-icon class="toggle-button-icon" icon="mdi-home" size="x-large" />
    </v-btn>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'NavBar',
    props: {
      switchPage: {
        type: Function,
      },
    },
    data () {
      return {
        isOpen: false,
      }
    },
    mounted () {
      const menu = document.querySelector('.navbar-menu') as HTMLElement
      const toggleButton = document.querySelector('.toggle-button') as HTMLElement
      document.addEventListener('click', event => {
        if (!menu.contains(event.target as Node) && !toggleButton.contains(event.target as Node)) {
          this.toggleMenu(true)
        }
      })
      window.addEventListener('scroll', () => {
        const rect = toggleButton.getBoundingClientRect();
        const x = 100;
        const y = rect.bottom - 100;
        const elementBehind = document.elementFromPoint(x, y) as HTMLElement;
        if (!(elementBehind instanceof HTMLElement)) {
          return
        }
        const bgColor = getComputedStyle(elementBehind).backgroundColor;
        toggleButton.style.color = !bgColor.includes('0') ? 'white' : 'black'
      });
    },
    methods: {
      toggleMenu (forceClose: boolean = false) {
        if (forceClose === true) {
          this.isOpen = false
        } else {
          this.isOpen = !this.isOpen
        }
        // eslint-disable-next-line no-undef
        const menu = document.querySelectorAll('.navbar-menu') as NodeListOf<HTMLElement>
        const toggleButton = document.querySelector('.toggle-button') as HTMLElement
        if (this.isOpen) {
          toggleButton.style.bottom = '-200px'
          menu.forEach((item, index) => {
            if (index !== 0) {
              item.style.height = '360px'
            }
          })
        } else {
          toggleButton.style.bottom = '0px'
          menu.forEach((item, index) => {
            if (index !== 0) {
              item.style.height = '0px'
            }
          })
        }
      },
    },
  }
</script>
<style lang="scss">
.navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  .navbar-menu {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: -110px;
    height: 200px;
    width: 450px;
    border-radius: 200px;
    transition: 0.4s ease-in-out;
    .menu-icon {
      margin: 60px 0px 0px 0px;
      color: rgb(88, 86, 86);
      @media screen and (max-width: 640px) {
        margin: 50px 0px 0px 0px;
      }
    }
    @media only screen and (max-width: 640px) {
      width: 300px;
      bottom: -125px;
    }
    &.left {
      width: 150px;
      height: 0px;
      left: 1px;
      transform: translateX(0);
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: rgb(247, 247, 247);
      cursor: pointer;
      -webkit-box-shadow: inset 30px 43px 87px -51px rgba(66, 68, 90, 1);
      -moz-box-shadow: inset 30px 43px 87px -51px rgba(66, 68, 90, 1);
      box-shadow: inset 30px 43px 87px -51px rgba(66, 68, 90, 1);
      .menu-icon {
        padding: 40px 0 0 10px;
        transform: rotate(315deg);

      }
      @media only screen and (max-width: 640px) {
        width: 100px;
      }
      &:hover {
        background-color: rgb(218, 217, 217);
        transition: 0.2s ease-in-out;
      }
    }
    &.mid {
      width: 150px;
      height: 0px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0px;
      cursor: pointer;
      background-color: rgb(247, 247, 247);
      -webkit-box-shadow: inset -1px 72px 87px -76px rgba(66, 68, 90, 1);
      -moz-box-shadow: inset -1px 72px 87px -76px rgba(66, 68, 90, 1);
      box-shadow: inset -1px 72px 87px -76px rgba(66, 68, 90, 1);
      @media only screen and (max-width: 640px) {
        width: 100px;
      }
      &:hover {
        background-color: rgb(218, 217, 217);
        transition: 0.2s ease-in-out;
      }
    }
    &.right {
      width: 150px;
      height: 0px;
      right: 0;
      transform: translateX(calc(50% - 1px));
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      cursor: pointer;
      background-color: rgb(247, 247, 247);
      -webkit-box-shadow: inset -30px 43px 87px -51px rgba(66, 68, 90, 1);
      -moz-box-shadow: inset -30px 43px 87px -51px rgba(66, 68, 90, 1);
      box-shadow: inset -30px 43px 87px -51px rgba(66, 68, 90, 1);
      .menu-icon {
        padding: 40px 10px 0 0;
        transform: rotate(45deg);
      }
      @media only screen and (max-width: 640px) {
        width: 100px;
      }
      &:hover {
        background-color: rgb(218, 217, 217);
        transition: 0.2s ease-in-out;
      }
    }
  }
  .toggle-button {
    bottom: 0px;
    transition: 0.4s ease-in-out;
    color: #FAF9F6;
  }
}
</style>
