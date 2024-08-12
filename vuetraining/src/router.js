import {createWebHistory, createRouter} from 'vue-router'

import IndexView from './pages/index.vue'
import TotalsView from "@/pages/totals.vue";

const routes = [
    { path: '/', component: IndexView },
    { path: '/Totals', component: TotalsView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
