<template>
    <nav>
        <h1>{{name}}</h1>
        <ButtonField name="Logout" @submit="logout"></ButtonField>
    </nav>
</template>

<script setup>
const props = defineProps({
    name: String
});
const emits = defineEmits(['logout']);
function logout() {
    emits('logout');
}
</script>