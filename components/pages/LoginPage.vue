<template>
    <div class="login">
        <section class="login-box">
            <h1 class="heading">{{ toggle ? 'User' : 'Admin' }} Login</h1>
            <TextField placeholder="Enter user id" v-model="userId" inputType="text" size="40">
            </TextField>
            <TextField placeholder="Enter user password" v-model="password" inputType="password" size="40">
            </TextField>
            <ButtonField name="Login" @submit="submitLogin" type="button" :loading="isLoading">
            </ButtonField>
            <div v-if="isLoading">Logging in, please wait...</div>
            <a href="#" @click.prevent="toggleUser"> Login as {{ toggle? 'Admin':'User' }}</a>
        </section>
    </div>
</template>

<script setup>
import {useAuthentication} from '../api/auth'
const toggle = ref(false);
const userId = ref(null);
const password = ref(null);
const isLoading = ref(false);
const { login } = useAuthentication();
function toggleUser() {
    toggle.value = !toggle.value;
} 
const submitLogin = async () => {
    isLoading.value = true;
    try {
        const response = await login({ name: userId.value, password: password.value })
        if (response) {
            isLoading.value = false;
            // console.log(toggle.value?'/user':'/admin')
            toggle.value ? navigateTo('/user') : navigateTo('/admin')
        }
    }
    catch (error) {
        isLoading.value = false;
        window.alert(error);
    }  
}
</script>

<style scoped>
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.login-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 400px;
    padding-block: 30px;
    padding-inline: 20px;
    border: 2px solid #4b3004;
    border-radius: 20px;
    background-color: ghostwhite;
}
.heading{
    text-align: center;
    color: #4b3004;
}
a{
    font-size: 14px;
    color: #4b3004;
    align-self: flex-end;
}
</style>