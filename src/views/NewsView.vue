<template>
    <div class="news-container">
      <h2 class="news-title">LATEST NEWS</h2>
      <p class="news-subtitle">Stay tuned for more Andromeda eSports updates!</p>
      
      <div class="news-wrapper">
        <NewsComponent v-for="(news, index) in newsItems" :key="index" :news="news" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import NewsComponent from "@/components/NewsComponent.vue";
  
  const newsItems = ref([
    { 
      id: 1, 
      title: "New Counter-Strike Tournament On The Horizon", 
      image: require("@/assets/csgoteam.jpg"), 
      date: "19th February 2025"
    },
    { 
      id: 2, 
      title: "LeBron James speaks up about Andromeda", 
      image: require("@/assets/player1.png"), 
      date: "13th January 2025"
    },
    { 
      id: 3, 
      title: "Valorant Lineup Announced", 
      image: require("@/assets/valorantteam.jpg"), 
      date: "21st November 2024"
    },
    { 
      id: 4, 
      title: "League of Legends Tournament Coming Up", 
      image: require("@/assets/lolteam.jpg"), 
      date: "19th October 2024"
    },
    { 
      id: 5, 
      title: "League of Legends Lineup Changes", 
      image: require("@/assets/lolteam.jpg"), 
      date: "18th October 2024"
    }
  ]);
  </script>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  
  .news-container {
    text-align: left;
    padding: 20px;
    width: 100%;
    margin-top: 50px;
    margin-left: 130px;
    font-family: 'Poppins', sans-serif;
  }
  
  .news-title {
    font-size: 2rem;
    font-weight: 600;
    color: #ffffff;
  }
  
  .news-subtitle {
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 20px;
    margin-top: -20px;
  }
  
  .news-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
  }
  </style>
  