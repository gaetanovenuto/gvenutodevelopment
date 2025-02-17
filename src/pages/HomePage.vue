<script>
import { store } from '../store';
export default {
    data() {
        return {
            birthYear: 1999,
            birthMonth: 9, // Ottobre (i mesi partono da 0)
            birthDay: 2,
            mouseX: 0,
            mouseY: 0,
            languagesLogos: [
                '/img/languages/html.png',
                '/img/languages/css.svg',
                '/img/languages/sass.svg',
                '/img/languages/js.png',
                '/img/languages/vue.png',
                '/img/languages/bootstrap.svg',
                '/img/languages/php.png',
                '/img/languages/laravel.png',
                '/img/languages/mysql.svg',
                '/img/languages/vite.svg',
                '/img/languages/react.png',
                '/img/languages/office.png',
            ],
            animationSpeed: 20, // secondi per completare un intero ciclo
            store,
            expandedDescriptions: {}, // Tiene traccia delle descrizioni espanse
            expandedImageIndex: null, // Tiene traccia dell'immagine espansa
            modalOpen: false, // Stato per il modal delle immagini
        };
    },
    computed: {
        currentAge() {
            return this.calculateAge();
        },
        gridPosition() {
            const x = (this.mouseX / window.innerWidth - 0.5) * 30; // Movimento più evidente
            const y = (this.mouseY / window.innerHeight - 0.5) * 30;
            return `translate(${x}px, ${y}px)`;
        },
        marqueeStyle() {
            return {
                animationDuration: `${this.animationSpeed}s`
            };
        }
    },
    methods: {
        calculateAge() {
            const today = new Date();
            let age = today.getFullYear() - this.birthYear;
            if (today.getMonth() < this.birthMonth || (today.getMonth() === this.birthMonth && today.getDate() < this.birthDay)) {
                age--;
            }
            return age;
        },
        updateMousePosition(event) {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
        },
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
        }
    },
    mounted() {
        window.addEventListener("mousemove", this.updateMousePosition);
        // Inizializza lo stato delle descrizioni quando il componente è montato
        this.initializeExpandedDescriptions();
        
        // Aggiunge un listener per chiudere il modal premendo Escape
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modalOpen) {
                this.closeModal();
            }
        });
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.updateMousePosition);
        // Rimuove il listener per Escape
        window.removeEventListener("keydown", (e) => {
            if (e.key === "Escape" && this.modalOpen) {
                this.closeModal();
            }
        });
    }
};
</script>

<template>
    <div class="about-me" id="about">
        <div class="grid-overlay" :style="{ transform: gridPosition }"></div>
        <div class="container">
            <div class="row py-5">
                <div class="col-12 col-lg-6 my-5">
                    <div class="header-presentation">
                        <img src="/public/img/favicon.png" class="me-2" width="18" height="18" alt="Hand-wave">
                        Ciao, il mio nome è Gaetano, ho <span class="age text-decoration-underline" title="Con una piccola funzione di Javascript questo numero cambierà automaticamente il 2 Ottobre, giorno del mio compleanno!">{{ currentAge }}</span> anni e sono un
                    </div>
                    <div class="fs-1 fw-bold">
                        Full-stack Web Developer
                    </div>
                    <div class="badges row justify-content-start flex-wrap">
                        <div class="badge col-4 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-display me-2"></i> Front-end Development
                        </div>
                        <div class="badge col-4 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-gear me-2"></i> Back-end Development
                        </div>
                        <div class="badge col-4 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-database me-2"></i> Database & Data
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <img src="/public/img/monviso.jpg" alt="Monviso" class="card img-fluid" title="Nonostante io sia nato in Sicilia, amo il paesaggio alpino.">
                </div>
            </div>
        </div>
    </div>
    <div class="languages" id="skills">
        <div class="py-5">
            <div class="marquee-container">
                <div class="marquee-track" :style="marqueeStyle">
                    <!-- First copy of logos -->
                    <div class="marquee-content">
                        <div v-for="(logo, index) in languagesLogos" :key="`first-${index}`" class="marquee-item">
                            <img :src="logo" :alt="`Technology ${index + 1}`" class="img-fluid">
                        </div>
                    </div>
                    <!-- Duplicate for seamless loop -->
                    <div class="marquee-content">
                        <div v-for="(logo, index) in languagesLogos" :key="`second-${index}`" class="marquee-item">
                            <img :src="logo" :alt="`Technology ${index + 1}`" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="certifications" id="certifications">
        <div class="container py-4">
            <h4 class="text-center mt-2 fw-light">
                CERTIFICAZIONI
            </h4>
            <div class="row justify-content-center pb-4">
                <div class="col-3 d-flex align-items-center">
                    <img src="/img/Boolean.png" alt="Boolean" class="img-fluid" title="Certificato in Full-Stack Web Development">
                </div>
                <div class="col-3 d-flex align-items-center">
                    <img src="/img/ECDL.jpg" alt="ECDL" class="img-fluid" title="Patente europea ECDL">
                </div>
            </div>
        </div>
    </div>
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
                                    {{ project.description }}
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
.about-me {
    position: relative;
    overflow: hidden;
    background-color: #f0f0f0; /* Colore di sfondo per contrastare la griglia */

    .grid-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        background: 
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(180deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
        background-size: 40px 40px; /* Dimensione della griglia */
        z-index: 0;
        transition: transform 0.3s ease-out;
    }

    .container {
        position: relative;
        z-index: 1; /* Assicura che il contenuto sia sopra la griglia */
    }

    .header-presentation {
        font-size: 18px;
        line-height: 18px;

        .age {
            cursor: pointer;
        }
    }

    .badge {
        background-color: rgba(187, 187, 187, 0.555);
        padding: 15px;
        font-size: 14px;
        font-weight: 500;
        color: rgb(56, 56, 56);
    }

    .card {
        border-radius: 20px !important;
    }
}

.languages {
    background-color: #f8f9fa;
    position: relative;
    
    .marquee-container {
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        position: relative;
        padding: 20px 0;
        background: linear-gradient(90deg, rgba(248, 249, 250, 0.9) 0%, rgba(248, 249, 250, 0) 5%, rgba(248, 249, 250, 0) 95%, rgba(248, 249, 250, 0.9) 100%);
    }
    
    .marquee-track {
        display: flex;
        animation: marquee-animation linear infinite;
        width: fit-content;
        will-change: transform; /* Ottimizzazione per la performance */
    }
    
    .marquee-content {
        display: flex;
        align-items: center;
    }
    
    .marquee-item {
        flex-shrink: 0;
        padding: 0 40px; /* Aumentato il margine tra i loghi */
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .marquee-item img {
        max-height: 100%;
        max-width: 130px;
        object-fit: contain;
        filter: grayscale(100%);
        transition: filter 0.3s ease, transform 0.3s ease;
    }

    @keyframes marquee-animation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
}

.projects {
    padding: 20px;

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

/* Modifiche agli stili del modal per l'immagine */
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