<script setup>
import Details from '../components/Details.vue'
import Footer from '../components/Footer.vue'
import Cart from '../components/Cart.vue'
import { useRouter, RouterView } from 'vue-router';
import { useStore } from '../store';
</script>

<template>
<header class="header">
    <button @click="router.push('/movies')" class="movies-button">Back To Movies</button>
    </header>
    <Cart />
    <Details />
    <Footer />
</template>

<style scoped></style>