import { ref } from "vue"
import { defineStore } from "pinia";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export const useStore = defineStore('store', () => {
  const email = ref("");
  const cart = ref(new Map());
  const user = ref(null);

  const toggleCart = (movie) => {
    if (cart.value.has(movie.id)) {
      cart.value.delete(movie.id);
    } else {
      cart.value.set(movie.id, movie);
    }
  };

  return { email, cart, toggleCart,user };
});

export const userAuthorized = new Promise((resolve, reject) => {
  onAuthStateChanged(auth, user => {
    try {
      const store = useStore();
      store.user = user;
      resolve();
    } catch (error) {
      reject();
    }
  })


export const useRegisterStore = defineStore('registration', () => {
  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const user = (data) => {
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
    user,
  };
});