import { reactive } from 'vue';


export const store = reactive({
    navbarLinks: [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Chi sono",
            href: "/about"
        },
        {
            name: "I miei progetti",
            href: "/projects"
        },
    ],
    gitHubToken: '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',
    // Per malintenzionati, non avendo back-end è l'unico modo per mostrare le repo in pagina, ma l'ho impostato che si possono solo vedere le repo con questo token, quindi vi risparmio tempo se volete combinare danno.
    projects: [
        {
            title: "Guestly",
            image: "/img/guestlyScreenshot.png",
            description: "Guestly è un sito web ispirato ad AirBnB ed Idealista, progettato ed ideato in circa due settimane insieme a due colleghi di corso, valso come progetto finale del corso Full Stack Web Developer di Boolean. In questa web app si possono ricercare appartamenti in una zona desiderata, creare appartamenti, mettersi in contatto con il proprietario e vedere le statistiche dei propri appartamenti. Per approfondire, visita questo link:",
            link: "https://www.linkedin.com/feed/update/urn:li:activity:7273025221534642176/"
        },
        {
            title: "eduPrime",
            image: "/img/eduPrimeScreenshot.png",
            description: "eduPrime è una pagina interattiva ispirata dal sito dal medesimo nome, creata interamente con VueJS. Creato in 16 ore, è stato il progetto assegnatomi a metà del corso Full Stack Web Developer di Boolean."
        },
        {
            title: "DCComics",
            image: "/img/dcComicsScreenshot.png",
            description: "DCComics è una pagina interattiva ispirata da una vecchia versione del sito ufficiale, creata in 4 ore interamente con VueJS."
        },
        {
            title: "WhatsApp",
            image: "/img/whatsappScreenshot.png",
            description: "WhatsApp è una pagina ispirata alla medesima web-app, con la possibilità di ricercare i contatti e inviare un messaggio al quale l'utente risponderà automaticamente 'Ok' dopo un secondo. Creata in 6 ore con HTML, CSS e Javascript puro."
        },
        {
            title: "Spotify",
            image: "/img/spotifyScreenshot.png",
            description: "Spotify è una pagina completamente statica, ispirata ad una versione precedente della medesima web-app, creata in circa 5 ore agli inizi del corso."
        },
        {
            title: "Dropbox",
            image: "/img/dropboxScreenshot.png",
            description: "Dropbox è una pagina completamente statica, ispirata ad una versione precedente del sito ufficiale, creata in 8 ore agli inizi del corso."
        },
        {
            title: "Discord",
            image: "/img/discordScreenshot.png",
            description: "Discord è una pagina completamente statica, ispirata ad una versione precedente del sito ufficiale, creata in circa 7 ore agli inizi del corso."
        }
    ]
})