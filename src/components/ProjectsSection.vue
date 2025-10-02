<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            expandedDescriptions: {},
            expandedImageIndex: null,
            modalOpen: false,
        }
    },
    computed: {

    },
    methods: {
        toggleDescription(index) {
            // Verifica se l'indice esiste già in expandedDescriptions
            if (this.expandedDescriptions.hasOwnProperty(index)) {
                // Se esiste, inverte il valore
                this.expandedDescriptions[index] = !this.expandedDescriptions[index];
            } else {
                // Se non esiste, imposta a true
                this.expandedDescriptions[index] = true;
            }
        },
        toggleImage(index) {
            // Apre o chiude il modal con l'immagine
            this.expandedImageIndex = this.expandedImageIndex === index ? null : index;
            this.modalOpen = this.expandedImageIndex !== null;
            
            // Se si apre il modal, blocca lo scrolling del body
            if (this.modalOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        },
        closeModal() {
            this.expandedImageIndex = null;
            this.modalOpen = false;
            document.body.style.overflow = '';
        },
        // Inizializza expandedDescriptions con valori predefiniti
        initializeExpandedDescriptions() {
            if (this.store.projects) {
                this.store.projects.forEach((project, index) => {
                    this.expandedDescriptions[index] = false;
                });
            }
        },
    },
    mounted() {
        this.initializeExpandedDescriptions();
    },
}
</script>

<template>
    <div class="projects" id="projects">
        <div class="container pt-4">
            <h4 class="text-center mb-5 fw-light">
                PROGETTI
            </h4>
            <div class="row">
                <div v-for="(project, index) in store.projects" :key="index" class="col-12 col-md-6 col-lg-3 mb-4">
                    <div class="card h-100">
                        <!-- Immagine cliccabile -->
                        <div class="image-container" @click="toggleImage(index)">
                            <img :src="project.image" :alt="project.title" class="img-thumbnail">
                        </div>
                        <!-- Contenuto della card -->
                        <div class="card-content">
                            <!-- Titolo -->
                            <h3 class="card-title">{{ project.title }}</h3>
                            <!-- Descrizione con toggle -->
                            <div class="card-description" @click="toggleDescription(index)">
                                <p :class="{ 'truncated': !expandedDescriptions[index] }">
                                    {{ project.description }} <a v-if="project.link" :href="project.link">{{ project.title }}</a>
                                </p>
                                <span v-if="!expandedDescriptions[index]" class="read-more">Leggi di più</span>
                                <span v-else class="read-less">Leggi meno</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal per l'immagine espansa -->
    <div v-if="modalOpen" class="image-modal" @click="closeModal">
        <div class="modal-content" @click.stop>
            <button class="close-button" @click="closeModal">&times;</button>
            <div class="modal-image-container">
                <img v-if="expandedImageIndex !== null && store.projects && store.projects[expandedImageIndex]" 
                     :src="store.projects[expandedImageIndex].image" 
                     :alt="store.projects[expandedImageIndex].title" 
                     class="modal-image">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.projects {
    padding: 20px;
    background-color: #f8f9fa;

    .card {
        border: 1px solid #ddd;
        border-radius: 10px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        height: 100%;

        &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .image-container {
            width: 100%;
            height: 200px;
            overflow: hidden;
            cursor: pointer;

            img.img-thumbnail {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
                
                &:hover {
                    transform: scale(1.05);
                }
            }
        }

        .card-content {
            padding: 15px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;

            .card-title {
                font-size: 1.3rem;
                margin: 0 0 10px 0;
                text-align: center;
                color: #333;
            }

            .card-description {
                flex-grow: 1;
                cursor: pointer;
                position: relative;

                p {
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.5;
                    color: #666;
                    transition: all 0.3s ease;

                    &.truncated {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                }
                
                .read-more, .read-less {
                    display: block;
                    text-align: right;
                    margin-top: 8px;
                    color: #0066cc;
                    font-size: 0.9rem;
                }
            }
        }
    }
}

.image-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .modal-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        background-color: #fff;
        border-radius: 12px;
        padding: 30px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        
        .close-button {
            position: absolute;
            top: -20px;
            right: -20px;
            background-color: #ff3636;
            color: white;
            border: 2px solid white;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
            z-index: 1010;
            
            &:hover {
                background-color: #ff0000;
                transform: scale(1.1);
            }
        }
        
        .modal-image-container {
            overflow: auto;
            max-height: calc(90vh - 60px);
            display: flex;
            justify-content: center;
            align-items: center;
            
            .modal-image {
                max-width: 100%;
                object-fit: contain;
            }
        }
    }
}
</style>