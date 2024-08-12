import {createWebHistory, createRouter} from 'vue-router'

import IndexView from './pages/index.vue'

const routes = [
    { path: '/', component: IndexView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
