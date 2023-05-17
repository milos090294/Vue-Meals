<template>

<div>
        <div class="flex justify-center gap-2 mt-2">
            <router-link :to="{name: 'ByLetter', params: {letter}}" v-for="letter of letters" :key="letter" > 
            {{ letter }}
            </router-link>
        </div>

    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >

        <div v-if="meals" v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
        
            <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">

            <img :src="meal.strMealThumb" alt="" srcset="" class="rounded-t-xl h-48 w-full object-cover">

            </router-link>

            <div class="p-3">
                <h3 class="p-3 font-bold" > {{ meal.strMeal }} </h3>
                <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam molestias eius eaque. Eum accusamuso?</p>
                <div>
                    <YoutubeButton :href="meal.strYoutube"></YoutubeButton>
                    <ViewButton :href="meal.strSource" > </ViewButton>
                </div>
            </div>

        </div>
        
       <center v-else> <h1 class="font-bold">No meals found</h1></center>
        
    </div>
</div>

</template>


<script setup>

    import { computed } from '@vue/reactivity';
    import store from '../store';
    import { onMounted, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import { searchMealsByLetter } from '../store/actions';
    import YoutubeButton from '../components/YoutubeButton.vue';
    import ViewButton from '../components/ViewButton.vue';

    
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
    const route = useRoute();   
    const meals = computed(() => store.state.mealsByLetter)

    watch(route, ()=> {
        store.dispatch('searchMealsByLetter', route.params.letter)
    })
    

    onMounted(()=> {

        store.dispatch('searchMealsByLetter', route.params.letter)

        })

</script>


<style>



</style>