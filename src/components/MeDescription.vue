<template>
  <div class="me-description">
    <div class="me-description-info">
      <div class="me-description-info-photo">
        <img alt="me-description-photo" class="me-description-info-photo-value" src="/src/assets/mePhoto.jpg" />
      </div>
      <div class="me-description-info-links">
        <div class="me-description-info-links-pins">
          <a href="https://github.com/M-ac-i-ej-s" target="_blank">
            <v-icon class="me-description-info-links-pins-value" color="#FAF9F6" icon="mdi-github" />
          </a>
        </div>
        <div class="me-description-info-links-pins">
          <a href="https://www.linkedin.com/in/maciej-s%C5%82upianek-686246237/" target="_blank">
            <v-icon class="me-description-info-links-pins-value" color="#FAF9F6" icon="mdi-linkedin" />
          </a>
        </div>
      </div>
      <div class="me-description-info-description">
        <h1>Soo, that's me.</h1>
        <p v-if="!isInfoRotated" class="me-description-info-description-value">
          My name is Maciek and I am a web developer.
          I've finished computer science at University of Gdansk where I managed
          to discover programming from a lot of different perspectives.
          Now i am working in a small company as a full stack engineer where
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
            <v-icon color="#0B1215" icon="mdi-email-outline" size="large" />
            <span>maciej.slupianekge@gmail.com</span>
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-earth" size="large" />
            <flag class="me-description-info-description-value-container-flag" iso="us" />
            <flag class="me-description-info-description-value-container-flag" iso="gb" /> (C1)
            <flag class="me-description-info-description-value-container-flag" iso="de" /> (B1)
            <flag class="me-description-info-description-value-container-flag" iso="it" /> (A2)
          </div>
          <div class="me-description-info-description-value-container">
            <v-icon color="#0B1215" icon="mdi-file-account-outline" size="large" />
            <a class="me-description-info-description-value-container-resume" download="resume-Maciej-Słupianek.pdf" href="/src/assets/resume.pdf">resume.pdf</a>
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
    <div>
      <div class="me-description-projects" @click="oneClickTextColored(-1)">
        <ProjectModal
          v-for="(project, index) in projects"
          :key="index"
          :index="index"
          :one-click-text-colored="oneClickTextColored"
          :project="project"
        />
        <div class="me-description-projects-options">
          <v-menu location="top right" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-icon class="me-description-projects-options-icon" icon="mdi-cog" v-bind="props" />
            </template>

            <div class="me-description-projects-options-menu">
              <v-btn
                color="#0B1215"
                height="48"
                rounded
                width="200"
                @click="changeWallpaper"
              >
                Change wallpaper
              </v-btn>
            </div>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'MeDescription',
    data () {
      return {
        isInfoRotated: false,
        projects: [
          {
            name: 'Y-app',
            link: 'https://github.com/M-ac-i-ej-s/Y-app',
            description: 'Y is an X/twiter clone. With posts, reposts, images, full profile customization etc. UI with a bit of insipiration was desing by me. Search engine allows you to find users as well as posts. To top it off there are notifications that allow users to know if new posts are available.',
            photos: ['/src/assets/Y-app/titlePage.PNG','/src/assets/Y-app/mainPage.PNG','/src/assets/Y-app/visitingProfiles.PNG','/src/assets/Y-app/search.PNG'],
            stack: {
              frontend: ['Vue 3', 'Vuex', 'Vuetify 3', 'SCSS'],
              backend: ['Node.js', 'Express.js', 'MongoDB', 'socket.io', 'cloudinary'],
            },
          },
          {
            name: 'IT-INDER',
            link: 'https://github.com/M-ac-i-ej-s/IT-INDER',
            description: 'The main purpose of the page is to connect developers looking for projects with people who have ideas but lack the time, experience, or knowledge to implement them. The platform uses an algorithm to match users based on their preferred programming languages. If both the idea provider and the developer express interest by \'swiping right\', they are then able to communicate through chat to discuss further details.',
            photos: ['/src/assets/IT-INDER/mainPage.PNG','/src/assets/IT-INDER/chat.PNG','/src/assets/IT-INDER/swipeView.PNG','/src/assets/IT-INDER/match.gif'],
            stack: {
              frontend: ['React', 'TypeScript', 'SCSS'],
              backend: ['Node.js', 'Express.js', 'MongoDB', 'socket.io'],
            },
          },
          {
            name: 'Sales Manager',
            link: 'https://github.com/M-ac-i-ej-s/Sales-manager-app',
            description: 'A lightweight application that allows users to create fully customizable catalogs, complete with powerful search and filtering features for an optimal user experience – all wrapped in a clean, simple, and effective design.',
            photos: ['/src/assets/Sales-manager-app/mainPage.PNG','/src/assets/Sales-manager-app/SimpleAbout.PNG','/src/assets/Sales-manager-app/catalog.PNG','/src/assets/Sales-manager-app/addForm.PNG'],
            stack: {
              frontend: ['Vue', 'Vuetify', 'SCSS'],
              backend: ['json-server'],
            },
          },
          {
            name: 'Address book',
            link: 'https://github.com/M-ac-i-ej-s/Address-book',
            description: 'Simple employees manager with implmented progresive web application features enabling download and offline usage.',
            photos: ['/src/assets/PWA-example/mainPage.PNG','/src/assets/PWA-example/editForm.PNG','/src/assets/PWA-example/downloadblePage.PNG','/src/assets/PWA-example/confirmation.PNG'],
            stack: {
              frontend: ['Vue', 'Vuetify', 'SCSS'],
              backend: ['json-server'],
            },
          },
          {
            name: 'Knight game',
            link: 'https://github.com/M-ac-i-ej-s/Knight-the-defend-game',
            description: 'My first ever bigger project (spaghetti code alert!). Music was played and graphic was design by me, that)\'s the part i like to focus on. Everyhing was coded using pygame.',
            photos: ['/src/assets/Knight-Game/mainPage.PNG','/src/assets/Knight-Game/settings.PNG','/src/assets/Knight-Game/play.PNG','/src/assets/Knight-Game/highscore.PNG'],
            stack: {
              frontend: ['Python'],
              backend: ['Python as well:)'],
            },
          },
        ],
        wallpaperChangd: false,
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
      oneClickTextColored (index: number) {
        const descriptions = document.querySelectorAll('.me-description-projects-folder-text-value') as NodeListOf<HTMLElement>
        descriptions.forEach((desc, i) => {
          if (i === index) {
            desc.style.backgroundColor = '#1425a8';
          } else {
            desc.style.backgroundColor = 'transparent';
          }
        });
      },
      changeWallpaper () {
        const wallpaper = document.querySelector('.me-description-projects') as HTMLElement
        const cog = document.querySelector('.me-description-projects-options-icon') as HTMLElement
        if (this.wallpaperChangd) {
          wallpaper.style.backgroundImage = ''
          cog.style.color = '#616a6b'
        } else {
          wallpaper.style.backgroundImage = 'url(\'/src/assets/wallapaper.jpg\')'
          cog.style.color = '#FAF9F6'
        }
        this.wallpaperChangd = !this.wallpaperChangd
      }
    },
  }
</script>

<style class="me-description" scoped lang="scss">
.me-description {
  display: none;
  align-items: center;
  justify-content: center;
  gap: 50px; // was 20px, @media had 30px, now default is 30px
  width: 100%;
  height: 100%;
  .me-description-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px; // was 30px, but @media had 20px, now default is 20px
    border: 0.2px solid rgb(211, 210, 210);
    border-radius: 24px;
    padding: 20px 0 0 0;
    -webkit-box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
    box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
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
        width: 400px; // was 500px, @media had 400px, now default is 400px
        animation: none;
        .me-description-info-description-value {
            padding: 10px 0 0 0;
            font-size: 1.2rem; // was 1.3rem, @media had 1.2rem, now default is 1.2rem
            font-weight: 700;
            height: 275px; // was 265px, @media had 275px, now default is 275px
            &.animate {
              animation: descriptionAnimation 1.5s ease-in forwards;
            }
            &.pointers { // was 20px, @media had 30px, now default is 30px
                .me-description-info-description-value-container {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    padding: 5px 0;
                    .me-description-info-description-value-container-flag {
                        border-radius: 5px;
                    }
                    .me-description-info-description-value-container-resume {
                        cursor: pointer;
                        color: #0B1215;
                        &:hover {
                          text-decoration: underline;
                        }
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
