<template>
    <NavBar name="Hello Admin" @logout="logoutPage"></NavBar>
    <div v-if="!editClicked">
        <section class="products-add">
            <form class="add-form" @submit.prevent="addItem">
                <h1>Add Items</h1>
                <TextField placeholder="Name of product" inputType="text" v-model="productName" size="45">
                </TextField>
                <TextAreaField placeholder="Description" v-model="description" width="42" height="5">
                </TextAreaField>
                <div class="row">
                    <TextField placeholder="Price" inputType="number" v-model="price" size="10">
                    </TextField>
                    <TextField placeholder="Quantity" inputType="number" v-model="quantity" size="10">
                    </TextField>
                </div>
                <input type="file" @change="handleImageChange" id="image" accept="image/*" />
                <div v-if="imagPreview">
                    <img :src="imagPreview" alt="image not displayed" height="200" width="300" />
                </div>
                <ButtonField type="submit" name="Add"></ButtonField>
            </form>
        </section>
        <client-only>
            <div class="product-list">
                <table>
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Product Name</th>
                            <th>Product Image</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody v-if="items.length == 0"><tr>No data available</tr></tbody>
                    <tbody v-else>
                        <tr v-for="(item, index) in items" :key="item.id">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.prodName }}</td>
                            <td><img :src="`data:${item.imgType};base64,${item.image}`" alt="no image" width="50" height="50"></td>
                            <td>&#8377;{{ item.price }}</td>
                            <td>{{ item.prodDesc }}</td>
                            <td>{{ item.quantity }}</td>
                            <td><button class="btn-link" @click="edit(item)"><u>Edit</u></button></td>
                            <td><button class="btn-link" @click="deleteProd(item.id)"><u>Delete</u></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </client-only>
    </div>
    <div v-else>
        <EditBox :items="editItem" @cancel="editClicked = false"></EditBox>
    </div>
</template>

<script setup>
//this commit is to be cherrypicked
import { useProduct } from '~/composables/products';
import { useAuthentication } from '~/api/auth';
const {items, addItems, viewItems, editItems, deleteItems} = useProduct();
const { logout } = useAuthentication();
const productName = ref(null);
const price = ref(null);
const description = ref(null);
const quantity = ref(null);
const imageFile = ref(null);
const imagPreview = ref(null);
const editItem = ref({});
const editClicked = ref(false)
const clearFields = ()=> {
    productName.value = null;
    price.value = null;
    description.value = null;
    imageFile.value = null;
    imagPreview.value = null;
    document.getElementById('image').value = null
    quantity.value = null;
}
const handleImageChange = (event)=> {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagPreview.value = e.target.result;
            imageFile.value = file;
        };
        reader.readAsDataURL(file);
    }
}
function logoutPage() {
    logout();
}
function edit(payload) {
    editItem.value = payload;
    editClicked.value = !editClicked.value;
}
function deleteProd(payload){
    console.log('item to be deleted',payload);
}
const addItem = async()=> {
    if (productName.value && price.value && description.value && imageFile.value && quantity.value) {
        const payload = {
            "prodName": productName.value,
            "prodDesc": description.value,
            "category": 'Sample',
            "quantity": quantity.value,
            "inStock": true,
            "price": price.value
        }
        const formData = new FormData();
        formData.append('ImageFile', imageFile.value);
        formData.append('productDTO', new Blob([JSON.stringify(payload)], { type: 'application/json' }))
        const response = await addItems(formData);
        if (response) {
            window.alert('Products added successfully.')
            clearFields();
        }
    } else { window.alert('Please fill the required fields.') }
}
onMounted(() => {
    viewItems();
})
</script>

<style scoped>
.add-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: fit-content;
    width: 50vw;
    padding: 20px;
}
.row {
    display: flex;
    gap: 5px;
}
.products-add {
    display: flex;
    justify-content: center;
    align-items: center;
}
nav {
    display: flex;
    justify-content: space-between;
    padding: 15px;
}
.product-list thead th {
    width: 200px;
    padding: 10px;
    border: 2px solid rgb(71, 39, 10);
}
.product-list{
    padding: 30px;
}
.product-list tbody td{
    height: fit-content;
    text-align: center;
    width: 200px;
    padding-inline: 5px;
}
.data-unavailable{
    font-style: italic;
}
.btn-link{
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: blue;
}
</style>
