<template>
  <div class="hero">
    <div class="hero-content">
      <div class="overlay-text">Wanna Watch A Movie? We Got You. You Name It, We Got It.</div>
      <div class="overlay">
      </div>
    </div>
  </div>>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #1c1c1c;
  overflow: hidden;
}

.hero-content {
  position: relative;
  width: 100%;
  height: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 32px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px 40px;
  width: 80%;
  max-width: 600px;
  border-radius: 8px;
  font-family: 'Courier New', Courier, monospace;
  z-index: 2;
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

.Hero-Section-Image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

@media (max-width: 768px) {
  .overlay-text {
    font-size: 24px;
    padding: 15px 30px;
  }
}

@media (max-width: 480px) {
  .overlay-text {
    font-size: 18px;
    padding: 10px 20px;
  }
}
</style>