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
    ]
});