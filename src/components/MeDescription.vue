<template>
  <div class="me-description">
    <div class="me-description-info">
      <div class="me-description-info-photo">
        <img alt="me-description-photo" class="me-description-info-photo-value" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
      </div>
      <div class="me-description-info-links">
        <div class="me-description-info-links-pins">
          <v-icon class="me-description-info-links-pins-value" color="#FAF9F6" icon="mdi-github" />
        </div>
        <div class="me-description-info-links-pins">
          <v-icon class="me-description-info-links-pins-value" color="#FAF9F6" icon="mdi-linkedin" />
        </div>
      </div>
      <div class="me-description-info-description">
        <h1>Soo, that's me.</h1>
        <p v-if="!isInfoRotated" class="me-description-info-description-value">
          My name is Maciek and I am a web developer.
          I've finished computer science at University of Gdansk where I managed
          to discover programming from a lot of different perspectives.
          Now i am working in a small company as a full stack developer where
          my skills flew to the next level.
        </p>
        <div v-else class="me-description-info-description-value pointers">
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-account-tie" size="large" />
            <span>Maciej Słupianek</span>
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-map-marker" size="large" />
            <span>Gdansk, Poland</span>
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-phone" size="large" />
            <span>+48 501 474 375</span>
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-email-fast-outline" size="large" />
            <span>maciej.slupianekge@gmail.com</span>
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-earth" size="large" />
            <flag class="me-description-info-description-value-container-flag" iso="us" />
            <flag class="me-description-info-description-value-container-flag" iso="gb" /> (C1)
            <flag class="me-description-info-description-value-container-flag" iso="de" /> (B1)
            <flag class="me-description-info-description-value-container-flag" iso="it" /> (A2)
          </div>
        </div>
        <div class="me-description-info-description-button">
          <v-btn
            class="welcome-sign-button-value"
            color="#0B1215"
            height="48"
            rounded
            width="300"
            @click="switchInfo"
          >
            {{ isInfoRotated ? 'Classic about me' : 'CV and Contact info' }}? click!
          </v-btn>
        </div>
      </div>
    </div>
    <div class="me-description-projects">

    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'MeDescription',
    data () {
      return {
        isInfoRotated: false,
      }
    },
    methods: {
      switchInfo () {
        const description = document.querySelector('.me-description-info-description-value') as HTMLElement
        description.classList.add('animate')
        setTimeout(() => {
          this.isInfoRotated = !this.isInfoRotated
          description.classList.remove('animate')
        }, 1500);
      },
    },
  }
</script>

<style class="me-description" scoped lang="scss">
.me-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  .me-description-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    @media screen and (max-width: 500px) {
        gap: 20px;
    }
    .me-description-info-photo {
        display: flex;
        justify-content: center;
        .me-description-info-photo-value {
            width: 250px;
            height: 250px;
            border: 8px solid #0B1215;
            border-radius: 125px;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            animation-iteration-count: 1;
            &:hover {
                animation: photoAnimation 1s ease-in-out forwards;
            }
        }
    }
    .me-description-info-links {
        display: flex;
        justify-content: center;
        gap: 10px;
        .me-description-info-links-pins {
            background-color: #0B1215;
            border-radius: 50%;
            padding: 5px;
            transition: 0.5s ease-in-out;
            cursor: pointer;
            &:hover {
                animation: pinAnimation 0.2s ease-in-out both;
            }
            .me-description-info-links-pins-value {
                font-size: 40px;
            }
        }
    }
    .me-description-info-description {
        padding: 0 37px 0 37px;
        width: 500px;
        animation: none;
        @media screen and (max-width: 500px) {
            width: 400px;
        }
        .me-description-info-description-value {
            padding: 10px 0 0 0;
            font-size: 1.3rem;
            font-weight: 700;
            height: 265px;
            @media screen and (max-width: 500px) {
                height: 275px;
                font-size: 1.2rem;
            }
            &.animate {
              animation: descriptionAnimation 1.5s ease-in forwards;
            }
            &.pointers {
                padding: 20px 0 0 0;
                @media screen and (max-width: 500px) {
                    padding: 30px 0 0 0;
                }
                .me-description-info-description-value-container {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 2px 0;
                    .me-description-info-description-value-container-flag {
                        border-radius: 5px;
                    }
                }
            }
        }
        .me-description-info-description-button {
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }
    }
  }
}

@keyframes photoAnimation {
  0% {
    transform: rotate3d(0, 2, 0, 0deg);
  }
  100% {
    transform: rotate3d(0, 2, 0, 360deg);
  }
}

@keyframes descriptionAnimation {
  0% {
    transform: rotate3d(0, 2, 0, 0deg);
  }
  100% {
    transform: rotate3d(0, 2, 0, 1440deg);
  }
}

@keyframes pinAnimation {
  0% {
    transform: rotate3d(2, 0, 0, 0deg);
  }
  100% {
    transform: rotate3d(2, 0, 0, 30deg);
  }
}
</style>
