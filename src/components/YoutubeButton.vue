<template>

<a class="px-3 py-2 rounded border border-red-600 hover:bg-red-500 hover:text-white" :href="href" target="_blank">YouTube</a>  

</template>

<script setup>

    const props = defineProps({
        href: String
    })

</script>