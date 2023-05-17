import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import DefaultLayout from   '../components/DefaultLayout.vue'
import GuestLayout from  '../components/GuestLayout.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'ByName',
                component: SearchByName
            },
            {
                path: '/letter/:letter?',
                name: 'ByLetter',
                component: SearchByLetter
            },
            {
                path: '/by-ingredient/:i?',
                name: 'ByIngredient',
                component: SearchByIngredient
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component: Ingredients  
            }
        ]
       
    },
    {
        path: '/guest',
        component: GuestLayout,
    },
    {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
    },

];


const router = createRouter ({

    history: createWebHistory(),
    routes

})

export default router;