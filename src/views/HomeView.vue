<template>
  <div id="app">
    <div class="home">
      <h1>Welcome to Andromeda</h1>
      <h2>Fear the Stars</h2>
      <NewsCarousel />
      <NewsHorizontal />
    </div>
  </div>
</template>

<script setup>
import NewsCarousel from "@/components/NewsCarousel.vue";
import NewsHorizontal from "@/components/NewsHorizontal.vue";
</script>

<style scoped>
.home {
  width: 100%;
  text-align: left;
  color: #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
}


h1, h2 {
  transition: text-shadow 0.4s ease-in-out, color 0.4s ease-in-out;
}

h1:hover {
  color: #ff6ac1;
  text-shadow: 0 0 15px #ff6ac1, 0 0 30px rgba(255, 106, 193, 0.6);
}

h2:hover {
  color: #60a5fa;
  text-shadow: 0 0 15px #60a5fa, 0 0 30px rgba(96, 165, 250, 0.6);
}

h1 {
  font-family: 'Orbitron', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  margin-top: 100px;
  margin-left: 130px;
  color: #f472b6;
}

h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 135px;
  color: #a78bfa;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  opacity: 0.9;
  padding: 10px 0;
}
</style>
