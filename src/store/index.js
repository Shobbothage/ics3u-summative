import { ref } from "vue"
import { defineStore } from "pinia";

export const useStore = defineStore('store', () => {
  const email = ref("");
  const cart = ref(new Map());

  const toggleCart = (movie) => {
    if (cart.value.has(movie.id)) {
      cart.value.delete(movie.id);
    } else {
      cart.value.set(movie.id, movie);
    }
  };

  return { email, cart, toggleCart };
});

export const useRegisterStore = defineStore('registration', () => {
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const userData = (data) => {
    firstName.value = data.firstName;
    lastName.value = data.lastName;
    email.value = data.email;
    password.value = data.password;
  };
  return {
    firstName,
    lastName,
    email,
    password,
    userData,
  };
});