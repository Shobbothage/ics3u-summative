<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import { useStore } from "../store"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase"
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const store = useStore();
const router = useRouter();
const email = ref('');
const password = ref('');

const loginByEmail = async () => {
  try {
    const user = (await signInWithEmailAndPassword(auth, email.value, password.value)).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error signing in with email!");
  }
};
const loginByGoogle = async () => {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error signing in with Google!");
  }
};
</script>

<template>
  <Header />
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
      </div>
      <div class="form-container">
        <h2>Login to Your Account</h2>
        <form @submit.prevent="loginByEmail()">
          <input v-model:="email" type="email" placeholder="Email" class="input-field" required />
          <input v-model:="password" type="password" placeholder="Password" class="input-field" required />
          <button type="submit" class="button login">Login by Email</button>
        </form>
        <button @click="loginByGoogle()" type="submit" class="button login">Login by Google</button>
      </div>
    </div>
  </div>
  <Footer />
</template>


<style scoped>
h2 {
  color: white;
  font-family: monospace;
}

.hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Hero-Section-Image {
  position: relative;
  width: 100%;
  max-width: 900px;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.overlay-text {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  color: white;
  font-size: 32px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 20px 40px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  font-family: monospace;
  z-index: 2;
}

.form-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 450px;
  margin: 20px auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.input-field {
  width: 95%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
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
  background-color: rgba(255, 255, 255, 0.3);
}

.button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: rgb(43, 91, 153);
  color: white;
  font-family: monospace;
  font-size: 17px;
  cursor: pointer;
  outline: none;
}

.button:hover {
  background-color: #ddd;
  color: rgb(21, 111, 214);
}

.login {
  background-color: rgb(43, 91, 153);
}
</style>