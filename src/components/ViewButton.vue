<template>  

 
<a class="px-3 py-2 rounded border-2 border-blue-600 hover:bg-blue-200 ml-2" :href="href" target="_blank"> View Source</a>

</template>

<script setup>

const props = defineProps({
        href: String
    })

</script>