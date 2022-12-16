<script setup>
import { ref } from 'vue';
let count = ref(0)
const add = function(){
    count.value++
}
</script>
<template>
    <h1 @click="add">{{ count }}</h1>
</template>

<style>
h1 {
    color: red;
}
</style>