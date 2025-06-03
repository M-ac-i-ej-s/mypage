<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <NavBar />
  </v-app>
</template>

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
