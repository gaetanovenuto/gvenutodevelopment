<script>
import { store } from "../store";

export default {
  data() {
    return {
      store, 
      currentIndex: 0, 
      modalImage: '',
    };
  },
  methods: {
    nextProject() {
      this.currentIndex = (this.currentIndex + 1) % this.store.projects.length;
    },
    prevProject() {
      this.currentIndex = (this.currentIndex - 1 + this.store.projects.length) % this.store.projects.length;
    },
    openModal(image) {
      this.modalImage = image;
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();
    },
  },
};
</script>

<template>
    <div class="container py-5 d-flex justify-content-between align-items-center row m-auto">
        <button @click="prevProject" class="prev-btn col-1 m-0">
            <i class="fas fa-chevron-left"></i>
        </button>
        <div class="carousel-wrapper col-10 m-0">
            <div class="carousel m-0">
                <transition name="fade" mode="out-in">
                    <div class="card" :key="store.projects[currentIndex].title">
                        <h3>{{ store.projects[currentIndex].title }}</h3>
                        <p>
                            {{ store.projects[currentIndex].description }} 
                            <a v-if="store.projects[currentIndex].link" :href="store.projects[currentIndex].link" class="text-decoration-none fw-bold">
                                Guestly
                            </a>
                        </p>
                        <div class="image-wrapper">
                            <img :src="store.projects[currentIndex].image" :alt="store.projects.title" @click="openModal(store.projects[currentIndex].image)" />
                        </div>
                    </div>
                </transition>
            </div>
        </div>
        <button @click="nextProject" class="next-btn col-1">
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>

    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="text-center fw-bold">
                        {{ store.projects[currentIndex].title }}
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img :src="modalImage" class="img-fluid" alt="Ingrandimento immagine">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    .prev-btn,
    .next-btn {
        background-color: rgba(255, 255, 255, 0.7);
        color: black;
        border: none;
        cursor: pointer;
        font-size: 20px;
        border-radius: 50%;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        width: 30px;
        height: 30px;

        &:hover {
            background-color: rgba(10, 0, 54, 0.63);
            transform: scale(1.1) translateX(5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
            color: white;
        }

        &:active {   
            transform: scale(0.95);
        }

        i {
            font-size: 24px;
        }
    }

    .carousel-wrapper {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        box-sizing: border-box;

        .carousel {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.5s ease-in-out;

            .card {
                background-color: #222;
                color: white;
                padding: 30px;
                border-radius: 15px;
                text-align: center;
                max-width: 100%;
                box-sizing: border-box;
                    .image-wrapper {
                        width: 100%;
                        max-height: 400px;
                        overflow: auto;
                        margin-top: 20px;
                    }
                    
                    .image-wrapper img {
                        width: 100%;
                        height: auto;
                        max-height: 100%;
                        object-fit: contain;
                        cursor: pointer;
                    }
            }
        }
    }
}


.prev-btn::before,
.next-btn::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
