<template>
    <div>Hello this is a test merge</div>
    <div class="dialog-box">
        <label for="productName">Product name:</label>
        <input type="text" id="productName" v-model="items.prodName">
        <br>
        <label for="productDesc">Description: </label>
        <textarea id="productDesc" v-model="items.prodDesc"></textarea>
        <br>
        <label for="price">Price: </label>
        <input type="number" id="price" v-model="items.price">
        <br>
        <label for="quantity">Quantity: </label>
        <input type="number" id="quantity" v-model="items.quantity">
        <br>
        <label for="category">Category: </label>
        <input type="text" id="category" v-model="items.category">
        <br>
        <button>Edit</button>
        <button @click="cancel">Cancel</button>
    </div>
</template>

<script setup>
//this is a sample commit
//this commit is not to be cherry picked
const emits = defineEmits(['edit','cancel'])
const props = defineProps({
    items: Object
})
function cancel() {
    emits('cancel')
}
</script>

<style scoped>
.dialog-box{
    height: 500px;
    width: 500px;
}
input{
    margin-bottom: 10px;
}
label{
    margin-right: 10px;
}
button{
    margin-left: 5px;
    padding: 3px;
}
</style>