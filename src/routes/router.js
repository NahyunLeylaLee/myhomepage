import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import PortFolio from '../views/PortFolio.vue';
import AboutMe from '../views/AboutMe.vue';
import PortfolioDetail from '../views/PortfolioDetail.vue';

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/portfolio",
        component: PortFolio,
    },
    {
        path: "/about-me",
        component: AboutMe,
    },
    {
        path: "/portfolio/:id",
        component: PortfolioDetail,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;