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
        <div class="project-description">
          <div class="photos">
            <img alt="photo-value" class="photo-value" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
            <img alt="photo-value" class="photo-value" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
            <img alt="photo-value" class="photo-value" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
            <img alt="photo-value" class="photo-value" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
          </div>
          <div class="description">
            <h1 class="title">{{ project.name }}</h1>
            <p>
              {{ project.description }}
            </p>
            <h1>
              Stack:
            </h1>
          </div>
        </div>
        <template #actions>
          <v-btn
            class="ms-auto"
            color="#0B1215"
            full-width
            text="Zamknij"
            variant="tonal"
            width="100%"
            @click="dialog = false"
          />
        </template>
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
  };
</script>

<style lang="scss">
.project-description {
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 20px;
   padding: 30px;
  .photos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    .photo-value {
      width: 320px;
      height: 180px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
        text-align: center;
        color: #FAF9F6;
      }
    }
  }
</style>
