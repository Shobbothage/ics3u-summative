<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';

const response = ref(null);
const numbers = ref([]);

numbers.value = (() => {
  const set = new Set();

  while (true) {
    set.add(Math.floor(Math.random() * 19));

    if (set.size === 3) {
      return set;
    }
  }
})();

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`);
})
</script>

<template>
  <div class="movie-gallery">
    <div v-if="response" class="movie-list">
      <div v-for="number in numbers" :key="response.data.results[number].id" class="movie-card">
        <img :src="`https://image.tmdb.org/t/p/w500${response.data.results[number].poster_path}`" alt="Movie Poster"
          class="movie-poster" />
        <p class="movie-title">{{ response.data.results[number].title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-text {
  color: white;
  font-size: 20px;
  text-align: center;
  font-family: monospace;
  margin: 20px 0;
  padding: 10px;
}

.movie-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
}

.movie-list img {
  max-width: 100%;
  height: auto;
  width: 295px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}

.movie-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(21, 111, 214, 0.1);
  border-radius: 10px;
}

.movie-poster {
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  background-color: rgb(43, 91, 153);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.movie-poster {
  width: 250px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>