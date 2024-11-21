import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import RecipePage from './views/RecipePage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/recipe/:id', component: RecipePage, props: true }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
