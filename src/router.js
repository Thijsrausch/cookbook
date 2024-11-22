import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';

const routes = [
    { path: '/', component: HomePage },
];

const router = createRouter({
    history: createWebHistory('/cookbook/'), // Ensure this matches the base path
    routes,
});

export default router;
