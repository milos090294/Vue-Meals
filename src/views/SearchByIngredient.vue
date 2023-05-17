<template>

<div>
    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >
        
        <div  v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">

            <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" alt="" srcset="" class="rounded-t-xl h-48 w-full object-cover">
            </router-link>

            <div class="p-3">
                <h3 class="p-3 font-bold" > {{ meal.strMeal }} </h3>
                <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam molestias eius eaque. Eum accusamuso?</p>
            </div>

        </div>
    </div>
</div>

</template>

<script setup>
    import { onMounted } from 'vue';

    import { useRoute } from 'vue-router';
    import store from '../store';
    import { computed } from 'vue';
    import ViewButton from '../components/ViewButton.vue';
    import YoutubeButton from '../components/YoutubeButton.vue';
    const meals =  computed(() => store.state.mealsByIngredient)

    const route = useRoute();

    onMounted(()=> {

        store.dispatch('searchMealsByIngredient', route.params.i)

    })
</script>


<style>



</style>