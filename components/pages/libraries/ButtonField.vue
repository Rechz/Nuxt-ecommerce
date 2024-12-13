<template>
    <button @click="submitClick" :disabled="loading" :type="type">{{ name }}</button>
</template>

<script setup>
const emits = defineEmits(['submit']);
const props = defineProps(['name','loading','type']);
function submitClick() {
    emits('submit');
}
//later to be cherrypicked
</script>

<style scoped>
button{
    width: 150px;
    height: 30px;
    border-radius: 5px;
    background-color: #5f4d12db;
    color: whitesmoke;
    font-size: 14px;
}
button:disabled{
    background-color:#5f4d1250 ;
}
</style>