<template>
    <div>
        <h1 class="text-4xl font-bold mb-8 mt-4 px-2"> Ingredients</h1>
       <router-link :to="{name: 'ByIngredient', params: {i: ingredient.strIngredient}} " v-for="ingredient of ingredients" :key="ingredient.id" class="bg-white rounded p-8 mb-3 shadow block">
       
        <h3 class="text-2xl font-bold mb-2"> {{ ingredient.strIngredient }}</h3>
        <p>
            {{ ingredient.strDescription }}
        </p>

        </router-link>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

let  ingredients = ref({})


onMounted(()=> {

    axiosClient.get('list.php?i=list')
    .then(({data}) => {
        ingredients.value = data.meals
    })

})
</script>


<style>



</style>