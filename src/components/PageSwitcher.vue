<template>
  <div class="page-switcher animate__animated animate__bounceInLeft">
    <v-icon class="page-switcher-icon" icon="mdi-format-color-fill" size="x-large" />
    <div class="page-switcher-filler" />
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
.page-switcher {
    position: fixed;
    top: 50%;
    left: 49%;
    transform: translate(-50%, -50%);
    .page-switcher-filler {
        position: fixed;
        top: 50%;
        left: 49%;
        transform: translate(-50%, -50%);
        border-radius: 90px;
        width: 1px;
        height: 1px;
        background-color: #0B1215;
        animation: scaleAnimation 3s ease-in-out forwards;
        animation-delay: 1.5s;
    }
    .page-switcher-icon {
        font-size: 3rem;
        animation: clickAnimation 1s ease-in-out forwards;
        animation-delay: 1s;
    }
}

@keyframes clickAnimation {
    0% {
        transform: scale(1);
    }
    25% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(1);
    }
    75% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes scaleAnimation {
    50% {
        transform: scale(5000);
    }
    99% {
        transform: scale(1);
    }
    99.9% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes disapearAnimation {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
</style>
