<script setup></script>

<template>
  <header>
    <div class="pill-nav">
      <RouterLink to="/register" class="button register">Register</RouterLink>
      <RouterLink to="/login" class="button login">Login</RouterLink>
      <input type="email" placeholder="Email address" class="email-input">
      <RouterLink to="/" class="button join">Get Started</RouterLink>
    </div>
    
      <h1><b>ClipNet</b></h1>
    </header>
</template>

<style scoped>
.pill-nav a {
  display: inline-block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  margin: 0 5px;
}

.pill-nav a:hover {
  background-color: #ddd;
  color: rgb(21, 111, 214);
}

.pill-nav a.active {
  background-color: rgb(43, 91, 153);
  color: white;
}

.email-input {
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  outline: none;
  width: 200px;
  font-family: monospace;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
}

.email-input::placeholder {
  color: white;
  opacity: 0.8;
}

.email-input:focus {
  border-color: rgb(43, 91, 153);
  background-color: rgba(255, 255, 255, 0.3);
}

.button {
  display: inline-block;
  color: rgb(255, 255, 255);
  text-align: center;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 5px;
  font-family: 'Courier New', Courier, monospace;
  margin: 0 5px;
  cursor: pointer;
  outline: none;
  background-color: rgb(43, 91, 153);
  border: none;
}

.button:hover {
  background-color: #ddd;
  color: rgb(21, 111, 214);
}
</style>