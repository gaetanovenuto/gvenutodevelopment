import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        },
    ]
});

export { router };