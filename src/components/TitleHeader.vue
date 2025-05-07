<template lang="">
  <div class="title-header-conatiner">
    <h1 class="title-header">
      Nativly
    </h1>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'TitleHeader',
  }
</script>
<style lang="scss">
.title-header-conatiner {
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  // .title-header {
  //   text-align: center;
  //   font-size: 3.5rem;
  //   font-family: Arvo;
  //   letter-spacing: 2px;
  // }
}

.title-header {
    font-size: 4rem;
    font-weight: bold;
    font-family: Arvo;
    color: transparent;
    background-image: url('../assets/background.png');
    background-size: 200%; /* Enlarged for smooth animation */
    background-position: 0 50%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate-background 3s infinite alternate linear;
}

@keyframes animate-background {
    0% {
        background-position: 0 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
</style>
