<script>
import { store } from '../store';

export default {
    data() {
        return { 
            store
        };
    },
    computed: {
        navbarLinks() {
            return this.store.navbarLinks;
        },
    },
};
</script>

<template>
    <div class="container">
        <h1 class="title text-center animate-fade-slide">
            Chi sono
        </h1>
        <section class="content animate-fade">
            <!-- Immagine -->
            <div class="dev-image animate-scale-hover">
                <img
                    src="/img/Venuto_Gaetano_profilePic_centered.jpg"
                    class="rounded"
                    alt="Gaetano Venuto"
                    title="Ciao, questo sono io!"
                />
            </div>
            <!-- Paragrafo -->
            <p class="text animate-fade-slide">
                Mi chiamo Gaetano Venuto, sono nato il <strong>2 Ottobre 1999</strong> a Messina e sono da sempre
                innamorato di <strong>musica</strong>, <strong>informatica</strong> e <strong>videogiochi</strong>.
                Diplomato nel 2018 in un istituto tecnico turistico, ho sempre lavorato nell'ambito dell'accoglienza
                all'interno di strutture alberghiere, quando nel 2024 ho deciso di intraprendere gli studi informatici
                attraverso il corso "Full Stack Web Developer" di
                <a
                    href="https://boolean.careers/?_gl=1*18feck4*_up*MQ..*_gs*MQ..&gclid=CjwKCAiArva5BhBiEiwA-oTnXfmdLye0r_NUt50359RpIURhYbyriKhACP5ojREtn_4ZRVy1S6XfZRoCxVsQAvD_BwE"
                    class="fw-bold"
                    title="Boolean"
                >
                    Boolean</a>, dove sono stato catapultato nel mondo dello sviluppo Web e di tutte le sue sfaccettature. Sono un
                <span class="bold-italic">Web Developer</span> con predisposizione al <strong>front-end</strong>, ma con
                conoscenze <strong>back-end</strong>. Le tecnologie che conosco sono
                <span class="bold-italic">Javascript</span> (con framework <span class="bold-italic">Vue.js</span> ),
                <span class="bold-italic">PHP</span> (con framework <span class="bold-italic">Laravel</span> ),
                <span class="bold-italic">MySQL</span>, oltre ad <span class="bold-italic">HTML</span>,
                <span class="bold-italic">CSS</span> e <span class="bold-italic">SASS</span>.
                Ah, è comunque cantavo: <a href="https://www.rai.it/dl/RaiTV/programmi/media/ContentItem-01f5d3d4-2371-44f0-a09a-7b4aebee3346-tluc.html?fbclid=IwZXh0bgNhZW0CMTEAAR2oZUbbmRGYN3S3AuywLy0n2XZlLspKgWR73PWZDXDqWSZXli-WXhDEx1s_aem_ARc8oZUvAhKUb-kfc56u4x1TsYrIL2z8zEgIRCa81yCiQv5P74hg84n6YgiO8HvqYafLpQ0HjfRw9JBlPENQRd9A#p=0">Video assolutamente non necessario ma che ci tenevo a mettere</a>.
            </p>
        </section>
    </div>
</template>

<style lang="scss" scoped>

/* Mobile-First Styling */
.container {
    .title {
        color: white;
        margin: 25px 0;
        font-size: 32px; /* Ridotto per dispositivi piccoli */
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: column; /* Impilato di default */
        align-items: center; /* Centra il contenuto */
        gap: 20px; /* Spaziatura tra immagine e testo */
    }

    .dev-image {
        img {
            display: block;
            margin: 0 auto;
            border-radius: 10px;
            max-height: 300px; 
            max-width: 100%; /* Non supera la larghezza del contenitore */
        }
    }

    .text {
        color: white;
        text-align: justify;
        line-height: 1.8;
        font-size: 16px;
        padding: 0 15px;

        a {
            text-decoration: underline;
            color: white;
        }

        .bold-italic {
            font-weight: 700;
            font-style: italic;
        }
    }

    /* Stili per dispositivi più grandi */
    @media (min-width: 1200px) {
        .content {
            flex-direction: row;
            justify-content: space-between; 
            align-items: center; 
        }

        .text {
            flex: 1; 
            font-size: 20px; 
            padding: 0 20px;
        }
    }
}
</style>
