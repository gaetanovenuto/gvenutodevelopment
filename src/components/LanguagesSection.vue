<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
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
        }
    },
    computed: {
        marqueeStyle() {
            return {
                animationDuration: `${this.animationSpeed}s`
            };
        }
    },
    methods: {

    },
    mounted() {

    },
    beforeUnmount() {

    }

}
</script>

<template>
    <div class="languages" id="languages">
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
</template>

<style lang="scss" scoped>
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
</style>