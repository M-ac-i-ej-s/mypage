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
        ref="firstInput"
        v-model="password.first"
        class="unlock-password-input"
        hide-details
        inputmode="numeric"
        maxlength="1"
        variant="plain"
        @input="onFirstInput($event, 0)"
      />
      <v-text-field
        ref="secondInput"
        v-model="password.second"
        class="unlock-password-input"
        hide-details
        inputmode="numeric"
        maxlength="1"
        variant="plain"
        @input="onFirstInput($event, 1)"
      />
      <v-text-field
        ref="thirdInput"
        v-model="password.third"
        class="unlock-password-input"
        hide-details
        inputmode="numeric"
        maxlength="1"
        variant="plain"
        @input="onFirstInput($event, 2)"
      />
      <v-text-field
        ref="fourthInput"
        v-model="password.fourth"
        class="unlock-password-input"
        hide-details
        inputmode="numeric"
        maxlength="1"
        variant="plain"
        @input="onFirstInput($event, 3)"
      />
    </div>
    <div class="unlock-password-text">
      {{ unlocked ? 'Nice! You got it! Let\'s try to know each other better now! 😄' : 'Ups! You need to find the password, it\'s hidden in the code. 👀' }}
    </div>
    <div class="unlock-password-clue-button">
      <v-btn
        class="button-styles"
        :loading="loading"
        variant="tonal"
        :width="loading ? '330px' : '130px'"
        @click="viewAClue"
      >
        get a clue
        <template v-slot:loader>
          <div style="animation: shake 1s ease-in-out forwards;">
            {{ seeClue ? 'The password is 5! without a 5? 🤔' : 'get a clue' }}
          </div>
        </template>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Unlock',
    data () {
      return {
        password: {
          first: '',
          second: '',
          third: '',
          fourth: '',
        },
        unlocked: false,
        loading: false,
        seeClue: false,
      };
    },
    mounted () {
      console.log('Psst! The password is: 1234 :D')
    },
    methods: {
      onFirstInput (value: InputEvent, index: number) {
        const target = value.target as HTMLInputElement | null;
        const inputs = [
          this.$refs.firstInput,
          this.$refs.secondInput,
          this.$refs.thirdInput,
          this.$refs.fourthInput,
        ];
        if (target && target.value !== '') {
          (inputs[index + 1] as HTMLInputElement | undefined)?.focus();
        } else if (target && target.value === '') {
          (inputs[index - 1] as HTMLInputElement | undefined)?.focus();
        }

        if (this.password.first && this.password.second && this.password.third && this.password.fourth) {
          const fullPassword = `${this.password.first}${this.password.second}${this.password.third}${this.password.fourth}`;
          if (fullPassword === '1234') {
            setTimeout(() => {
              this.unlocked = true;
            }, 500);
            const lock1 = document.querySelector('.top-lock-padlock');
            const lock2 = document.querySelector('.bot-lock-padlock');
            const lockText = document.querySelector('.unlock-password-text');

            if (lock1 && lock2 && lockText) {
              lock1.classList.add('unlock-animation');
              lock2.classList.add('unlock-animation');
              lockText.classList.add('unlock-animation');
            }
          }
        }
      },
      viewAClue () {
        this.loading = true
        setTimeout(() => {
          this.seeClue = true
        }, 500)
      },
    },
  };
</script>

<style lang="scss">
.unlock {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  .top-lock-padlock {
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
    &.unlock-animation {
      animation: unlock 0.8s ease-in-out forwards;
    }
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
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 70px;
    border-left: 15px solid #0B1215;
    z-index: -1;
    &.unlock-animation {
      animation: unlock 0.8s ease-in-out forwards;
    }
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
    &.unlock-animation {
      animation: shake 1s ease-in-out forwards;
    }
  }

  .unlock-password-clue-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 380px;
    width: 400px;
    text-align: center;
    font-size: 1.2rem;
    color: #0B1215;
    .button-styles {
      transition: 0.5s ease-in-out;
    }
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

@keyframes shake {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
