<template>
    <div class="news-details-container">
      <div v-if="news">
        <img :src="news.image" class="news-image" alt="News Image" />
        <h1 class="news-title">{{ news.title }}</h1>
        <p class="news-date">{{ news.date }}</p>
        <p class="news-content">{{ news.content }}</p>
      </div>
      <div v-else>
        <p>New not found</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = computed(() => parseInt(route.params.id));

const newsItems = [
  { 
    id: 1, 
    title: "New Counter-Strike Tournament On The Horizon", 
    image: require("@/assets/csgoteam.jpg"), 
    date: "19th February 2025", 
    content: "The Andromeda eSports team is gearing up for an upcoming Counter-Strike tournament. Fans are eagerly waiting to see the team in action as they prepare for one of the biggest competitions of the year."
  },
  { 
    id: 2, 
    title: "LeBron James speaks up about Andromeda", 
    image: require("@/assets/player1.png"), 
    date: "13th January 2025", 
    content: "In a surprising turn of events, basketball legend LeBron James shared his thoughts on Andromeda eSports, praising the team's dedication and talent in competitive gaming. This recognition has brought even more attention to the organization's achievements."
  },
  { 
    id: 3, 
    title: "Valorant Lineup Announced", 
    image: require("@/assets/valorantteam.jpg"), 
    date: "21st November 2024", 
    content: "Andromeda eSports has officially revealed its new Valorant roster. The team has made key changes, adding fresh talent to improve their chances in upcoming tournaments. Fans are excited to see the new lineup in action!"
  },
  { 
    id: 4, 
    title: "League of Legends Tournament Coming Up", 
    image: require("@/assets/lolteam.jpg"), 
    date: "19th October 2024", 
    content: "The Andromeda League of Legends team is getting ready for an intense upcoming tournament. With weeks of preparation ahead, they are fine-tuning their strategies to compete at the highest level."
  },
  { 
    id: 5, 
    title: "League of Legends Lineup Changes", 
    image: require("@/assets/lolteam.jpg"), 
    date: "18th October 2024", 
    content: "Andromeda eSports has announced major changes to its League of Legends roster. The adjustments come after a series of evaluations, aiming to strengthen the team's performance in future competitions."
  }
];

const news = computed(() => newsItems.find(item => item.id === id.value));
</script>

  
  <style scoped>
  .news-details-container {
    max-width: 1200px;
    margin-top: 100px;
    margin-left: 130px;
    text-align: left;
    padding: 20px;
    font-family: 'Poppins', sans-serif;
    color: white;
  }
  
  .news-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .news-date {
    font-size: 1rem;
    color: #b0b0b0;
    margin-bottom: 20px;
  }
  
  .news-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
}
  
  .news-content {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  </style>
  