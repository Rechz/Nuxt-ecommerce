<template>
    <NavBar name="Hello User" @logout="logoutPage"></NavBar>
    <section class="products-view" v-if="items.length > 0">
        <div v-for="item in items" :key="item.id">
            <LazyProductDisplay :item="item"></LazyProductDisplay>
        </div>
    </section>>
</template>

<script setup>
import { useProduct } from '~/composables/products';
import { useAuthentication } from '~/api/auth';
const {items, viewItems} = useProduct();
const { logout } = useAuthentication();
onMounted(() => {
    viewItems();
});
function logoutPage() {
    logout();
}
</script>

<style scoped>
.products-view{
    height: 80vh;
    width: 80vw;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
nav {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}
</style>