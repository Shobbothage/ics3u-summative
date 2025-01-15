<script setup>
import { useRouter, RouterView } from 'vue-router';
import { useStore } from '../store';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const store = useStore();
const router = useRouter();
const logout = () => {
  store.user = null;
  signOut(auth);
  router.push(`/`);
}
</script>

<template>
  <header class="header">
    <button @click="router.push(`/cart`)" class="logout-button">Cart</button>
    <button @click="logout()" class="logout-button">Logout</button>
    <button @click="router.push(`/settings`)" class="settings-button">Settings</button>
  </header>
</template>

<style scoped>
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