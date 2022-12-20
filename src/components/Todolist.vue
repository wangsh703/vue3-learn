<script setup>
import { computed, ref, watchEffect } from 'vue';
let count = ref(0)
let double = computed(()=>  count.value * 2)
const add = function(){
    count.value++
}

watchEffect(()=> {
    console.log(double.value,'修改了');
})

</script>
<template>
    <h1 @click="add">{{ double }}</h1>
</template>

<style>
h1 {
    color: red;
}
</style>