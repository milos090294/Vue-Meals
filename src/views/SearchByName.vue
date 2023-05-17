<template>

    <div class="flex flex-col p-8">
        <input type="text" class="rounded border-2 border-gray-400 w-full" v-model="keyword" placeholder="Search For Meals" @change="searchMeals()" >
    </div>

    <div  class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8" >

        <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
           
            <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">

            <img :src="meal.strMealThumb" alt="" srcset="" class="rounded-t-xl h-48 w-full object-cover">

            </router-link>

            <div class="p-3">
            <h3 class="p-3 font-bold" > {{ meal.strMeal }} </h3>
            <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam molestias eius eaque. Eum accusamuso?</p>
            <div  class="">
               
                <YoutubeButton :href="meal.strYoutube"></YoutubeButton>
                <ViewButton :href="meal.strSource" > </ViewButton>
            </div>
           </div>

        </div>
    </div>


</template>

<script setup>

    import { onMounted, ref } from 'vue';
    import { computed } from 'vue';
    import store from '../store/index'
    import { useRoute } from 'vue-router'
    import YoutubeButton from '../components/YoutubeButton.vue';
import ViewButton from '../components/ViewButton.vue';

    const route = useRoute(); 
    const keyword = ref('');
    const meals = computed(() => store.state.searchedMeals)

    function searchMeals()
    {   
        store.dispatch('searchMeals', keyword.value)
    }


    onMounted(() => {
        keyword.value =  route.params.name
        if(keyword.value){
            searchMeals();
        }
    })


</script>


<style>



</style>