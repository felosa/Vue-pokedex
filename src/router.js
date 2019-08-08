import Router from "vue-router";
import onePokemon from './components/ListPokemon.vue'
import ListPokemon from './components/ListPokemon.vue'


export default new Router({
    mode: 'history',
    base: 'http://localhost:8080/',
    routes: [
        {
            path: '/',
            component: ListPokemon
        }, {
            path: '/onePokemon',
            component: onePokemon
        },

    ]
})
