<template>
  <div>
    <div class="me-description-projects-folder" @click.stop="oneClickTextColored(index)" @dblclick="dialog = true">
      <div class="me-description-projects-folder-back" />
      <div class="me-description-projects-folder-front" />
      <div class="me-description-projects-folder-text">
        <span class="me-description-projects-folder-text-value">
          {{ project.name }}
        </span>
      </div>
    </div>

    <v-dialog
      v-model="dialog"
      width="1200"
    >
      <v-card
        max-width="1200"
      >
        <v-card-title class="d-flex align-end flex-column">
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="dialog = false"
          ></v-btn>
        </v-card-title>
        <div class="project-description">
          <div class="description">
            <h1 class="title">
              <a class="title-link" :href="project.link" target="_blank">{{ project.name }}</a>
            </h1>
            <p class="description-value">
              {{ project.description }}
            </p>
            <h1>
              Stack:
            </h1>
            <div class="description-value">
              <div class="description-value-container">
                <p>Frontend:</p>
                <div class="description-value-container-chips">
                  <v-chip v-for="technology in project.stack.frontend" :key="technology">
                    {{ technology }}
                  </v-chip>
                </div>
              </div>
              <div class="description-value-container">
                <p>Backend:</p>
                <div class="description-value-container-chips">
                  <v-chip v-for="technology in project.stack.backend" :key="technology">
                    {{ technology }}
                  </v-chip>
                </div>
              </div>
            </div>
          </div>
          <div class="photos">
            <img
              v-for="(photo, indexPhoto) in project.photos"
              :key="photo"
              alt="photo-value"
              class="photo-value"
              :src="photo"
              :style="{ 'transform-origin': tranformOriginValue(indexPhoto) }"
              @mouseleave="enlarge(-1)"
              @mouseover="enlarge(indexPhoto)"
            />
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ProjectModal',
    props: {
      oneClickTextColored: {
        type: Function,
        required: true,
      },
      project: {
        type: Object,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
    },
    data () {
      return {
        dialog: false,
      };
    },
    methods: {
      enlarge (index: number) {
        const photos = document.querySelectorAll('.photo-value') as NodeListOf<HTMLElement>;
        photos.forEach((photo, i) => {
          if (i === index) {
            photo.style.zIndex = '10';
            photo.style.transform = 'scale(2.1)';
          } else {
            photo.style.zIndex = '1';
            photo.style.transform = 'scale(1)';
          }
        });
      },
      tranformOriginValue (index: number) {
        let tranformOriginValue;
        if (index === 0) {
          tranformOriginValue = 'top left';
        } else if (index === 1) {
          tranformOriginValue = 'top right';
        } else if (index === 2) {
          tranformOriginValue = 'bottom left';
        } else {
          tranformOriginValue = 'bottom right';
        }
        return tranformOriginValue;
      },
    },
  };
</script>

<style lang="scss">
.project-description {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;
   gap: 20px;
   padding: 0 40px 60px 40px;
  .photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    .photo-value {
      position: relative;
      width: 320px;
      height: 180px;
      // object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: 0.4s ease-in-out;
      transform: scale(1);
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title-link {
      color: #0B1215;
    }
    .description-value {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0 10px;
      .description-value-container {
        display: flex;
        gap: 10px;
        .description-value-container-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }
}
.me-description-projects {
    display: grid;
    grid-template-columns: repeat(9, minmax(100px, 1fr));
    grid-template-rows: repeat(5, minmax(100px, 1fr));
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border: 0.2px solid rgb(211, 210, 210);
    border-radius: 24px;
    padding: 20px;
    background-image: url('/src/assets/wallapaper.jpg');
    background-size: cover;
    -webkit-box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
    box-shadow: 8px 8px 23px -1px rgba(66, 68, 90, 0.5);
    .me-description-projects-folder {
      cursor: pointer;
      .me-description-projects-folder-back {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: #ffe89e;
        transform: rotate3d(2, -1, 0.25, 30deg);
        border-radius: 10px;
        margin-left: 0px;
        z-index: 1;
        transition: 0.2s ease-in-out;
        &:hover {
          transform: rotate3d(2, -1, 0.35, 45deg);
          height: 108px;
          margin-left: 4px;
        }
      }
      .me-description-projects-folder-front {
        position: relative;
        background-color: #f7d572;
        width: 90px;
        height: 95px;
        border-radius: 10px;
        right: 5px;
      }
      .me-description-projects-folder-text {
        position: relative;
        display: flex;
        justify-content: center;
        // text-align: center;
        color: #FAF9F6;
        .me-description-projects-folder-text-value {
          position: absolute;
          text-align: center;
          // padding: 0 0 0 25px;
        }
      }
    }
  }
</style>
