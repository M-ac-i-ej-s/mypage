<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <NavBar :switch-page="switchPage" />
    <PageSwitcher v-if="enable" />
  </v-app>
</template>

<script lang="ts">
  export default {
    name: 'App',
    data () {
      return {
        enable: false,
      }
    },
    methods: {
      switchPage (page: string) {
        this.enable = true;
        setTimeout(() => {
          this.$router.push(`/${page}`);
        }, 3000);
        setTimeout(() => {
          this.enable = false;
        }, 6000);
      },
    },
  }
</script>

<style lang="scss">
html {
  font-family: Inter;
  color: #0B1215;
  background-color: #FAF9F6;
}

body {
  overflow-x: hidden;
}

@media screen and (max-width: 640px) {
  html {
    h1, h2 {
      font-size: 2rem;
    }
  }
}
</style>
