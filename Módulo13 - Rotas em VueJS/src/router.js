import Vue from "vue";
import  Router  from "vue-router";
import Inicio from './components/Inicio.vue';
import Usuario from './components/usuario/Usuario.vue'

Vue.use(Router)

export default new Router ({
    routes: [{
        path: '/',
        component: Inicio //sempre que ele navegar pro / vai ser direcionado para o componente inicio
        },
        {
            path: '/usuario/:id',//passando param, id n significa q é num
            component: Usuario,
            props: true
        }
    ]   
})