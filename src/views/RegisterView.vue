<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';
import { useRegisterStore } from "../store"

const store = useRegisterStore();
const router = useRouter();
const formChecker = (event) => {
  if (store.password !== store.confirmPassword) {
    event.preventDefault();
    alert('Uh oh! Looks like the passwords are not matching :( ');
  } else {
    store.userData({
      firstName: store.firstName,
      lastName: store.lastName,
      email: store.email,
      password: store.password,
    });
    router.push('/movies')
  }
};
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
        <form @submit.prevent="formChecker">
          <input type="text" placeholder="First Name" class="input-field" v-model="store.firstName" required />
          <input type="text" placeholder="Last Name" class="input-field" v-model="store.lastName" required />
          <input type="email" placeholder="Email" class="input-field" v-model="store.email" required />
          <input type="password" placeholder="Password" class="input-field" v-model="store.password" required />
          <input type="password" placeholder="Re-Enter Password" class="input-field" v-model="store.confirmPassword"
            required />
          <button type="submit" class="button register">Register</button>
        </form>
      </div>
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