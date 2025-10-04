<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store,
            birthYear: 1999,
            birthMonth: 9, // Ottobre (i mesi partono da 0)
            birthDay: 2,
            mouseX: 0,
            mouseY: 0,
        }
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
        
    },
    mounted() {
        window.addEventListener("mousemove", this.updateMousePosition);
        // Inizializza lo stato delle descrizioni quando il componente è montato
        
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
}
</script>

<template>
    <div class="header-main" id="header">
        <div class="grid-overlay" :style="{ transform: gridPosition }"></div>
        <div class="container">
            <div class="row py-5">
                <div class="col-12 col-lg-6 my-5">
                    <div class="header-presentation">
                        <img src="/public/img/favicon.png" class="me-2" width="18" height="18" alt="Hand-wave">
                        Ciao, il mio nome è Gaetano, ho <span class="age text-decoration-underline" title="Con una piccola funzione Javascript questo numero cambierà automaticamente il 2 Ottobre, giorno del mio compleanno!">{{ currentAge }}</span> anni e sono un
                    </div>
                    <div class="fs-1 fw-bold">
                        Full-stack Web Developer
                    </div>
                    <div class="badges row justify-content-start flex-wrap">
                        <div class="badge col-11 col-md-5 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-display me-2"></i> Front-end Development
                        </div>
                        <div class="badge col-11 col-md-5 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-gear me-2"></i> Back-end Development
                        </div>
                        <div class="badge col-11 col-md-5 mx-1 my-1 d-flex justify-content-start">
                            <i class="fa-solid fa-database me-2"></i> Database & Data
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 profile-pic-container">
                    <img src="/public/img/gaetano.png" alt="Monviso" class="card img-fluid" title="Gaetano Venuto">
                </div>
            </div>
        </div>
        <a href="#navbar" class="text-decoration-none text-black up-button">
            <i class="fa-solid fa-arrow-up fa-lg rounded bg-body-secondary py-3 px-2"></i>
        </a>
        
    </div>
</template>

<style lang="scss" scoped>
.header-main {
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
        mask-image: linear-gradient(to bottom, 
                    rgba(0, 0, 0, 0.8) 0%,
                    rgba(0, 0, 0, 0.6) 40%, 
                    rgba(0, 0, 0, 0.3) 70%,
                    rgba(0, 0, 0, 0) 100%);
        -webkit-mask-image: linear-gradient(to bottom, 
                    rgba(0, 0, 0, 0.8) 0%,
                    rgba(0, 0, 0, 0.6) 40%, 
                    rgba(0, 0, 0, 0.3) 70%,
                    rgba(0, 0, 0, 0) 100%);
    }

    .container {
        position: relative;
        z-index: 1; /* Assicura che il contenuto sia sopra la griglia */

        .profile-pic-container {
            img {
                width: 450px;
            }
        }
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

    .up-button {
        
        &:hover {
            color: rgb(19, 5, 221) !important;
        }

        .fa-arrow-up {
            border-radius: 50% !important;
            padding: 34px 25px !important;
            position: fixed;
            z-index: 999;
            margin-left: 95%;
            margin-top: 18%;
            
        }
    }
}
</style>