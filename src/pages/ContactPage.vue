<script>
export default {
    data() {
        return { 
        };
    },
    computed: {
    },
};
</script>

<template>
    <div class="container text-white">
        <h1>Contattami</h1>
        <a href="https://www.instagram.com/gaetanovenuto_/">
            <i class="fa-brands fa-instagram fa-xl text-white"></i>
        </a>
        <a href="https://www.linkedin.com/in/gaetanovenuto/">
            <i class="fa-brands fa-linkedin fa-xl text-white mx-3"></i>
        </a>
        <hr>
        <p>
            Nel caso fossi un visitatore che vuole darmi un parere, un amico che vuole salutarmi o un recruiter che vuole contattarmi, sentiti libero di farlo. <br>
            Se invece devi insultarmi perché sei stato rickrollato, non farlo. Accettalo.
        </p>
        <form id="contactForm" action="https://formspree.io/f/xjkkjbey" method="POST" class="d-flex flex-column">
            <label for="name">Nome:</label>
            <input type="text" id="name" name="name" required class="w-50 my-2" placeholder="Inserisci il tuo nome o anche uno a caso va bene comunque">
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required class="w-50 my-2" placeholder="Inserisci la mail vera, se no come ti rispondo?">
            
            <label for="message">Messaggio:</label>
            <textarea id="message" name="message" required class="my-2" rows="5" cols="25" placeholder="Qui scrivi il tuo messaggio, che sia un messaggio di contatto, oppure parole dolci, critiche, o insulti. Nell'ultimo caso guardati le spalle."></textarea>
            
            <button type="submit" class="text-decoration-none fw-bold blue-text bordered p-1 rounded">Invia</button>
        </form>
        <p>
            Questo modulo di contatto è stato creato tramite <a href="https://formspree.io/" class="text-decoration-none fw-bold text-white">Formspree</a>.
        </p>
    </div>
</template>

  
<style lang="scss" scoped>
.container {
    padding-top: 100px;

    .blue-text {
        color: #01305f;
    }

    button {
        width: 100px;
        margin: 0 auto;
    }

    .icons-container {
        width: 300px;
    }
}
</style>

