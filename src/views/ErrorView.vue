<script setup></script>

<template>
  <div class="error-page">
    <div class="content">
      <img class="error-icon" src="https://img.icons8.com/ios/452/error.png" alt="Error Icon" />
      <h1 class="error-title">404 - Oops! This Page Does Not Exist!</h1>
      <p class="error-message">*glass breaking noises* Oh no! Our URL...it's broken!</p>
      <router-link to="/" class="go-home">Go Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1c1c1c;
}

.content {
  text-align: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  font-family: monospace;
}

.error-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.error-title {
  font-size: 32px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  margin-bottom: 10px;
  font-family: monospace;
}

.error-message {
  font-size: 18px;
  color: white;
  margin-bottom: 20px;
  font-family: monospace;
}

.go-home {
  font-size: 16px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: rgb(43, 91, 153);
  font-weight: bold;
  font-family: monospace;
}

.go-home:hover {
  background-color: #2b5b99;
  /* Hover effect with darker blue */
  transition: background-color 0.3s;
}
</style>