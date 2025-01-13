<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from 'vue-router';
import { useStore } from "../store"
const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();
const store = useStore();

async function registerByEmail() {
  try {
    const user = (await createUserWithEmailAndPassword(auth, email.value, password.value)).user;
    await updateProfile(user, { displayName: `${firstName.value} ${lastName.value}` });
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with email!");
  }
}

async function registerByGoogle() {
  try {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user;
    store.user = user;
    router.push("/movies");
  } catch (error) {
    alert("There was an error creating a user with Google!");
  }
}
</script>

<template>
  <Header />
  <div class="hero">
    <div class="overlay">
      <div class="navbar">
        <a href="Login" class="button login">Login</a>
      </div>
      <div class="form-container">
        <h2>Create an Account</h2>
        <form @submit.prevent="registerByEmail()">
          <input v-model="firstName" type="text" placeholder="First Name" class="input-field" required>
          <input v-model="lastName" type="text" placeholder="Last Name" class="input-field" required>
          <input v-model="email" type="email" placeholder="Email" class="input-field" required>
          <input v-model="password" type="password" placeholder="Password" class="input-field" required>
          <input v-model="confirmPassword" type="password" placeholder="Re-Enter Password" class="input-field" required>
          <button type="submit" class="button register">Register</button>
        </form>
      </div>
      <button @click="registerByGoogle()" class="button register">Register by Google</button>
    </div>
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

.form-container {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}

.form-container h2 {
  color: white;
  font-size: 32px;
  text-align: center;
  font-family: monospace;
  margin-bottom: 20px;
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
  background-color: #ddd;
  color: rgb(21, 111, 214);
}

.button.register {
  background-color: rgb(43, 91, 153);
}

.button.login {
  background-color: rgb(43, 91, 153);
}
</style>