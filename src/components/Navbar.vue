<template>  

<header class="bg-white shadow h-16  flex justify-between items-stretch">

<router-link class="inline-flex items-center px-5" :to="{name: 'home'}"> Home </router-link>

<div class="flex items-center gap-1">

    <router-link :to="{name: 'ByName'}"  class="inline-flex items-center px-2 h-full hover:bg-purple-200"> Meals by Name </router-link>

    <router-link :to="{name: 'ByLetter'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200"> Meals By Letter </router-link>
    
    <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-2 h-full hover:bg-purple-200"> Meals By Gradient </router-link>
</div>

</header>

</template>