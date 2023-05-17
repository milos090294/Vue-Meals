<template>

<div class="max-w-[800px] m-auto p-4">
       <h1 class="text-5xl font-bold mb-5 text-center">{{ meal.strMeal }}</h1>
       <img  :src="meal.strMealThumb" alt="">
       <div class="grid grid-cols-1 md:grid-cols-3 mt-4">
            <div>
                <strong>Category:</strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area:</strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags:</strong> {{ meal.strTags }}
            </div>
       </div>

       <div class="mt-5 text-justify">
        {{ meal.strInstructions }}
       </div>

       <div class="grid grid-cols-1 md:grid-cols-2 m-5">
            <div>
                <h2 class="font-bold">Ingredients</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if="meal[`strIngredient${ind +1}`]">
                        {{ meal[`strIngredient${ind +1}`] }}
                        </li>
                    </template>
                </ul>
            </div>

            <div>
                <h2 class="font-bold">Measures</h2>
                <ul>
                    <template v-for="(el, ind) of new Array(20)">
                        <li v-if = "meal[`strMeasure${ind + 1}`]">
                        {{ meal[`strMeasure${ind + 1}`] }}
                        </li>
                    </template>
                </ul>
             </div>
        </div>
</div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';


const route = useRoute()
const meal = ref({})

onMounted(()=> {

    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {}
    })

})

</script>