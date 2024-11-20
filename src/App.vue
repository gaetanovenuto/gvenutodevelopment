<script>
/* 
Per importare ed utilizzare un componente dentro un altro devo SEMPRE seguire questi 3 passi:
1) Importazione del componente
2) Dichiarazione del componente
3) Utilizzo del componente
*/
// 1) Importazione del componente
import AppHeader from './components/Header/AppHeader.vue';
import AppMain from './components/Main/AppMain.vue';
import AppFooter from './components/Footer/AppFooter.vue';

import { store } from './store';

export default {
    data() {
        return { 
            cursorX: 0,
            cursorY: 0,
        }
    },
    // 2) Dichiarazione del componente
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        store
    },
    mounted() {
        window.addEventListener("mousemove", this.trackMouseMove);
    },
    beforeUnmount() {
        window.removeEventListener("mousemove", this.trackMouseMove);
    },  
    methods: {
        trackMouseMove(e) {
            this.cursorX = e.clientX;
            this.cursorY = e.clientY;
        }
    }
}
</script>

<template>
    <body>
        <div class="cursorTracker" :style="{ left: cursorX + 'px', top: cursorY + 'px'}"></div>
        <!-- 3) Utilizzo del componente -->
        <header>
            <AppHeader />   
        </header>
        
        <main>
            <AppMain />           
        </main>

        <footer>
            <AppFooter />           
        </footer>
    </body>
</template>

<style lang="scss">
@use 'assets/scss/main' as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";

    body {
        background: linear-gradient(to right, #000000 70%, #001f3f 80%, #003f7f 90%, #01305f 100%);
        background-size: 200% 100%;
        animation: gradientAnimation 14s ease infinite;

        .cursorTracker {
            width: 15px;
            height: 15px;
            background-color: rgba(253, 253, 253, 0.5);
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease;
        }
    }

    @keyframes gradientAnimation {
        0% {
            background-position: 50% 0%;
        }
        50% {
            background-position: 100% 0%;
        }
        100% {
            background-position: 50% 0%;
        }
    }

</style>
