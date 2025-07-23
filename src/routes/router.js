import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue';
import PortFolio from '../views/PortFolio.vue';
import AboutMe from '../views/AboutMe.vue';
import PortfolioDetail from '../views/PortfolioDetail.vue';

const routes = [
    {
        path: "/",
        component: HomePage,
        meta: {
            title: 'Nahyun Lee Homepage'
        }
    },
    {
        path: "/portfolio",
        component: PortFolio,
        meta: {
            title: 'PortFolio'
        }
    },
    {
        path: "/about-me",
        component: AboutMe,
        meta: {
            title: 'About Me'
        }
    },
    {
        path: "/portfolio/:id",
        component: PortfolioDetail,
        meta: {
            title: 'PortFolio'
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to) => {
    document.title = to.meta?.title ?? 'Nahyun Lee Homepage'
})

export default router;