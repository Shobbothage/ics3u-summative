<script setup>
import { useRegisterStore } from '../store';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import Footer from '../components/Footer.vue'

const router = useRouter();
const userStore = useRegisterStore();
const firstName = computed({
    get: () => userStore.firstName,
    set: (value) => {
        userStore.firstName = value;
    },
});
const lastName = computed({
    get: () => userStore.lastName,
    set: (value) => {
        userStore.lastName = value;
    },
});
const email = computed({
    get: () => userStore.email,
    set: (value) => {
        userStore.email = value;
    },
});
const nameDisplayUpdater = (event) => {
    event.preventDefault();
    userStore.user({
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
    });
    alert('Changes have been saved! :D');
}
</script>

<template>
    <header class="header">
        <button @click="router.push(`/movies`)" class="movies-button">Back To Movies</button>
        <button @click="router.push(`/cart`)" class="cart-button">Cart</button>
        <button @click="router.push(`/`)" class="logout-button">Logout</button>
    </header>
    <div class="form-container">
        <h1>Account Settings</h1>
        <form @submit="nameDisplayUpdater">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" class="input-field" v-model="firstName" /><br /><br />
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" class="input-field" v-model="lastName" /><br /><br />
            <label for="email">Email:</label>
            <input type="email" id="email" class="input-field" v-model="email" readonly /><br /><br />
            <button type="submit" class="button">Save Changes</button>
        </form>
    </div>
    <Footer />
</template>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #111;
}

.form-container {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background-color: rgba(30, 30, 30, 0.8);
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    color: white;
}

.form-container h1 {
    color: white;
    font-size: 32px;
    text-align: center;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 20px;
}

.input-field {
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #444;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    font-family: monospace;
    outline: none;
}

.input-field::placeholder {
    color: white;
    opacity: 0.8;
}

.input-field:focus {
    border-color: rgb(43, 91, 153);
    background-color: rgba(255, 255, 255, 0.2);
}

.button {
    display: inline-block;
    padding: 10px 20px;
    color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none;
    font-size: 17px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    margin-top: 10px;
    cursor: pointer;
    outline: none;
    background-color: rgb(43, 91, 153);
    border: none;
}

.button:hover {
    background-color: rgb(21, 111, 214);
}

.button:active {
    background-color: rgb(33, 69, 113);
}

button:disabled {
    background-color: rgb(112, 112, 112);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

.header h1 {
    flex-grow: 1;
    text-align: left;
    margin: 0;
}

.header button {
    color: rgb(255, 255, 255);
    padding: 10px 20px;
    font-size: 17px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    cursor: pointer;
    outline: none;
    background-color: rgb(43, 91, 153);
    border: none;
}

.header button:hover {
    background-color: #ddd;
    color: rgb(21, 111, 214);
}
</style>
