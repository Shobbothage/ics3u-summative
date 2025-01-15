<script setup>
import Footer from '../components/Footer.vue';
import Genres from "../components/Genres.vue";
import { useRouter, RouterView } from 'vue-router';
import { useRegisterStore } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
const store = useRegisterStore();
const router = useRouter();

const genresList = [
  {
    id: 28,
    genreName: "Action"
  },
  {
    id: 12,
    genreName: "Adventure"
  },

  {
    id: 16,
    genreName: "Animation"
  },
  {
    id: 35,
    genreName: "Comedy"
  },
  {
    id: 80,
    genreName: "Crime"
  },
]

const logout = () => {
  store.user = null;
  signOut(auth);
  router.push(`/`);
}
</script>

<template>
  <div class="movie-gallery">
    <header class="header">
      <h1>{{ `Welome to ClipNet, ${store.firstName}!` }}</h1>
      <button @click="router.push(`/cart`)" class="cart-button">Cart</button>
      <button @click="logout()" class="logout-button">Logout</button>
      <button @click="router.push(`/settings`)" class="settings-button">Settings</button>
    </header>
    <main class="movie-container">
      <RouterView />
    </main>
  </div>
  <Genres :genres="genresList" />
  <Footer />
</template>

<style scoped>
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