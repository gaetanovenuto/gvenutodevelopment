<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            
        }
    },
    computed: {

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
    <div class="contact py-5" id="contact">
        <div class="container">
            <h4 class="text-center my-5 ">
                CONTATTAMI
            </h4>
            <form id="contactForm" action="https://formspree.io/f/xjkkjbey" method="POST" class="d-flex flex-column">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required class="w-100 my-2 rounded p-2" placeholder="Inserisci il tuo nome">
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required class="w-100 my-2 rounded p-2" placeholder="Inserisci la tua mail">
                
                <label for="message">Messaggio:</label>
                <textarea id="message" name="message" required class="my-2 rounded p-2" rows="5" cols="25" placeholder="Inserisci il tuo messaggio"></textarea>
                
                <button type="submit" class="text-decoration-none fw-bold bg-primary text-white bordered p-1 rounded w-25">Invia</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact {
    padding: 20px;
    background-color: #f8f9fa;
}
</style>