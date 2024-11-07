<template>
    <textarea :placeholder="placeholder" v-model="description" :rows="height" :cols="width"></textarea>
</template>

<script setup>
const description = defineModel();
const props = defineProps(['placeholder','width','height']);
</script>

<style scoped>
textarea {
    border-radius: 5px;
    border: 2px solid #3c2d05;
}
</style>