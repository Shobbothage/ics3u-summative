<script setup>
import { useStore } from '../store';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();
</script>

<template>
    <header class="header">
        <button @click="router.push(`/movies`)" class="movies-button">Back To Movies</button>
        <button @click="router.push(`/`)" class="logout-button">Logout</button>
    </header>
    <div class="cart">
        <h1>Shopping Cart</h1>
        <div class="item" v-for="([key, value]) in store.cart">
            <img :src="`https://image.tmdb.org/t/p/w500${value.poster_path}`" />
            <h2>{{ value.title }}</h2>
            <button @click="store.cart.delete(key)">Remove</button>
        </div>
    </div>
</template>

<style scoped>
.cart {
    padding: 20px;
    background-color: #1c1c1c;
    border-radius: 10px;
    color: aliceblue;
}

.cart h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    font-family: 'Courier New', Courier, monospace;
}

.cart .item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    background-color: #282828;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.cart img {
    width: 100px;
    height: auto;
    border-radius: 5px;
}

.cart .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}

.cart h2 {
    margin: 0;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    color: aliceblue;
}

.cart button {
    color: white;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    background-color: rgb(43, 91, 153);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
}

.cart button:hover {
    background-color: #2b5b99;
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