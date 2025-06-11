<template>
  <div class="unlock">
    <div class="ulock-padlock">
      <div class="top-lock-padlock">
        <div class="top-lock-padlock-white" />
      </div>
      <div class="bot-lock-padlock" />
      <div class="bot-lock-padlock-mechanism">
        <div class="bot-lock-padlock-mechanism-inner-circle" />
        <div class="bot-lock-padlock-mechanism-inner-bot" />
      </div>
    </div>
    <div class="unlock-password">
      <v-text-field
        class="unlock-password-input"
        hide-details
        variant="plain"
      />
      <v-text-field
        class="unlock-password-input"
        hide-details
        variant="plain"
      />
      <v-text-field
        class="unlock-password-input"
        hide-details
        variant="plain"
      />
      <v-text-field
        class="unlock-password-input"
        hide-details
        variant="plain"
      />
    </div>
    <div class="unlock-password-text">
      Ups! You need to find the password, it's hidden in the code. 👀
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style lang="scss">
.unlock {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  .top-lock-padlock {
    animation: unlock 1s ease-in-out forwards;
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 70px;
    border-right: 15px solid #0B1215;
    border-top: 15px solid #0B1215;
    border-left: 15px solid #0B1215;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 0;
    .top-lock-padlock-white {
        position: absolute;
        top: 40px;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 85px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        background-color: #FAF9F6;
        z-index: 9;
    }
  }
  .bot-lock-padlock {
    animation: unlock 1s ease-in-out forwards;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 70px;
    border-left: 15px solid #0B1215;
    z-index: -1;
  }
  .bot-lock-padlock-mechanism {
    position: absolute;
    top: 90px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 150px;
    height: 120px;
    border-radius: 10px;
    background-color: #0B1215;
    .bot-lock-padlock-mechanism-inner-circle {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background-color: #FAF9F6;
        z-index: 11;
        border-radius: 50%;
    }
    .bot-lock-padlock-mechanism-inner-bot {
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 50px;
        background-color: #FAF9F6;
        z-index: 11;
        border-radius: 20%;
    }
  }
  .unlock-password {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    top: 220px;
    gap: 10px;
    .unlock-password-input {
        width: 60px;
        height: 75px;
        border: 2px solid #0B1215;
        border-radius: 4px;
        input {
            text-align: center;
            padding: 10px 0;
            font-size: 2.3rem;
        }
    }
  }
  .unlock-password-text {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 320px;
    width: 400px;
    text-align: center;
    font-size: 1.2rem;
    color: #0B1215;
  }
}

@keyframes unlock {
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -50%) translateY(20px);
  }
  100% {
    transform: translate(-50%, -50%) translateY(-20px);
  }
}
</style>
