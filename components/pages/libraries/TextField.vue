<template>
    <input :placeholder="placeholder" v-model="inputText" :type="inputType" :size="width">
</template>

<script setup>
const inputText = defineModel();
const props = defineProps(['placeholder','inputType','width']);
</script>

<style scoped>
input {
    /* width: 70%; */
    height: 30px;
    border-radius: 5px;
    border: 2px solid #3c2d05;
}
</style>