<script setup>
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const response = await axios.get(`https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`);
console.log(response.data);
</script>

<template>
  <div class="movie-detail">
    <h1 class="movie-title">{{ response.data.original_title }}</h1>
    <p class="movie-overview">{{ response.data.overview }}</p>
    <p class="movie-release-date">Release Date: {{ response.data.release_date }}</p>
    <a class="movie-site" :href="response.data.homepage" target="_blank">Official Movie Site</a>
    <img :src="`https://image.tmdb.org/t/p/w500${response.data.poster_path}`" alt="Movie Poster" class="movie-poster" />

    <h2 class="trailers-title">Trailers</h2>
    <div class="trailers-container">
      <div v-for="trailer in response.data.videos.results" :key="trailer.id" class="trailer-tile">
        <a :href="`https://www.youtube.com/watch?v=${trailer.key}`" target="_blank">
          <img :src="`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`" alt="Trailer"
            class="trailer-thumbnail" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.movie-detail {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  max-width: 800px;
  margin: 20px auto;
  color: white;
  font-family: monospace;
}

.movie-title {
  color: rgb(255, 255, 255);
  font-size: 36px;
  margin-bottom: 15px;
  text-align: center;
}

.movie-overview {
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px;
}

.movie-release-date {
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
}

.movie-site {
  display: block;
  color: rgb(21, 111, 214);
  text-align: center;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
}

.movie-site:hover {
  text-decoration: underline;
}

.movie-poster {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.trailers-title {
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
  color: rgb(255, 255, 255);
}

.trailers-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.trailer-tile {
  margin: 10px;
}

.trailer-thumbnail {
  width: 200px;
  height: 113px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
}

.trailer-thumbnail:hover {
  transform: scale(1.05);
}
</style>