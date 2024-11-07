<template>
    <div class="product-box">
        <h2>{{ item.prodName }}</h2>
        <img :src="`data:${item.imgType};base64,${item.image}`" width="90%" height="100px" />
        <p class="description">{{ item.prodDesc }}</p>
        <p class="price">&#8377; {{item.price}}</p>
        <p v-if="item.quantity < 4 && item.quantity!=0" class="stock-warning">Only {{ item.quantity }} left in stock</p>
        <p v-else-if="item.quantity === 0" class="stock-warning">Out of stock</p>
        <ButtonField name="Add to cart" :loading="item.quantity === 0"></ButtonField>
    </div>
</template>

<script setup>
const props = defineProps({
    item: Object
})
</script>

<style scoped>
.product-box{
    height: 300px;
    width: 200px;
    border: 2px solid #6b4e06;
    box-shadow: 6px 5px 7px -4px #64690d;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 20px;
    background-color: #ffffff;
}
.description{
    text-align: left;
}
.price{
    align-self: end;
    margin-block: 10px;
    font-weight: 900;
    font-size: 18px;
}
.stock-warning{
    color: red;
}
</style>