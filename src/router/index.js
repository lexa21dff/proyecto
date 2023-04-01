import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaProyectoView from '../views/ListaProyecto.vue'
import VerProyectoView from '../views/VerProyecto.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/listaProyecto',
    name: 'listaProyecto',
    component: ListaProyectoView
  },
  {
    path: '/verProyecto/:id',
    name: 'verProyecto',
    component: VerProyectoView
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
