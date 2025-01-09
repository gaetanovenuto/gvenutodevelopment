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
    <div class="container">
        <h1 class="text-center">
            Congratulazioni, sei il millesimo visitatore del mio sito web!! Hai vinto un iPhone 25 che ha mio cuggino in garage!
        </h1>
        <p class="text-center">
            Benvenuto nel mio sito web, qui il codice solitamente funziona, ma se non funziona è per mettere alla prova i nervi del visitatore programmatore che è venuto a ficcanasare per vedere se il mio sito web è più bello del suo <strong>*risata malefica*</strong>. <br>
            Se invece sei il mio insegnante, ti farò uscire pazzo dicendoti che faccio i layout con le tables su html.
        </p>
        <hr>
        <p class="text-center">Scherzi a parte, grazie per essere qui e spero che questo portfolio ti piacerà.</p>
        <p class="text-center little-text">E se non ti piace, sappi che sono dietro di te.</p>
        <p class="text-center fs-3">Vabbè, vuoi sapere chi sono? E <a class="text-decoration-none fw-bold" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">clicca qui</a> dai!</p>
    </div>
</template>

  
<style lang="scss" scoped>
    .container {
        padding-top: 100px; /* Compensazione per l'header fisso */

        h1, p, a {
            color: rgba(253, 253, 253, 0.8);
        }

        .little-text {
            font-size: 10px;
            margin-top: -10px;
        }
        
    }
</style>

