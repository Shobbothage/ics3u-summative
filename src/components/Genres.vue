<script setup>
import axios from "axios";
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import { useStore } from '../store';

const store = useStore();
const props = defineProps(["genres"]);
const router = useRouter();
const selectedGenre = ref(28);
const response = ref(null);

const genres = [
  { id: 12, genreName: 'Adventure' },
  { id: 16, genreName: 'Animation' },
  { id: 35, genreName: 'Comedy' },
  { id: 28, genreName: 'Action' },
  { id: 80, genreName: 'Crime' },
];

async function getMovieByGenre() {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
}

function getMovieDetails(id) {
  router.push(`/movies/${id}`)
}

onMounted(async () => {
  response.value = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${selectedGenre.value}`);
})

</script>

<template>
  <div class="movie-gallery">
    <select v-model="selectedGenre" @change="getMovieByGenre()">
      <option v-for="genre of genres" :value="genre.id">{{ genre.genreName }}</option>
    </select>
    <div v-if="response" class="movie-list">
      <div v-for="movie in response.data.results" :key="movie.id" class="movie-card" @click="getMovieDetails(movie.id)">
        <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster" class="movie-poster" />
        <p class="movie-title">{{ movie.title }}</p>
        <button @click.stop="store.toggleCart(movie)">
          {{ store.cart.has(movie.id) ? "Added" : "Buy" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-gallery {
  padding: 20px;
  background-color: #1c1c1c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

select {
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  background-color: #333;
  color: white;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}

select:focus {
  border-color: #2b5b99;
  outline: none;
}

.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie-card {
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-poster {
  width: 100%;
  height: auto;
  display: block;
}

.movie-title {
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  background-color: #333;
}

@media (max-width: 768px) {
  .movie-list {
    flex-direction: column;
    align-items: center;
  }

  .movie-card {
    width: 90%;
    margin-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .movie-title {
    font-size: 12px;
    padding: 5px;
  }
}

.movie-card {
  position: relative;
  background-color: #282828;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.movie-poster {
  width: 100%;
  height: auto;
  display: block;
}

.movie-title {
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  background-color: #333;
  flex-shrink: 0;
}

.movie-list button {
  position: relative;
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 16px;
  border-radius: 0 0 10px 10px;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
  outline: none;
  background-color: rgb(43, 91, 153);
  border: none;
  transition: background-color 0.2s ease;
  box-sizing: border-box;
}

.movie-list button:hover {
  background-color: rgb(34, 73, 122);
}

.movie-list button:active {
  background-color: rgb(25, 52, 87);
}
</style>