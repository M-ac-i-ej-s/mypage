<template>
  <Unlock v-if="!unlocked" @unlock="unlock" />
  <MeDescription />
</template>

<script lang="ts">
  export default {
    name: 'About',
    data () {
      return {
        unlocked: false,
      };
    },
    mounted () {
      const unlocked = localStorage.getItem('unlocked');
      this.unlocked = unlocked === 'true';
      const meDescription = document.querySelector('.me-description') as HTMLElement;

      if (this.unlocked) {
        meDescription.style.display = 'flex';
        meDescription.classList.add('animate__animated', 'animate__fadeInLeft');
      } else {
        meDescription.style.display = 'none';
      }
    },
    methods: {
      unlock () {
        const unclock = document.querySelector('.unlock') as HTMLElement;
        const meDescription = document.querySelector('.me-description') as HTMLElement;

        setTimeout(() => {
          unclock.classList.add('fade-out');
        }, 1000);
        setTimeout(() => {
          meDescription.style.display = 'flex';
          meDescription.classList.add('animate__animated', 'animate__fadeInLeft');
          localStorage.setItem('unlocked', 'true');
        }, 1300)
      },
    },
  }
</script>
