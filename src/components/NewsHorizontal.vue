<template>
  <div class="news-container">
    <h2 class="news-title">LATEST NEWS</h2>
    <p class="news-subtitle">Stay tuned for more Andromeda eSports updates!</p>
    <div class="news-wrapper">
      <div class="news-card" v-for="(news, index) in newsItems" :key="index">
        <img :src="news.image" alt="news image" class="news-image" />
        <div class="news-content">
          <h3 class="news-headline">{{ news.title }}</h3>
          <p class="news-date">{{ news.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsItems: [
  { 
    id: 1, 
    title: "New Counter-Strike Tournament On The Horizon", 
    image: require("@/assets/csgoteam.jpg"), 
    date: "19th February 2025", 
   
  },
  { 
    id: 2, 
    title: "LeBron James speaks up about Andromeda", 
    image: require("@/assets/player1.png"), 
    date: "13th January 2025", 
    
  },
  { 
    id: 3, 
    title: "Valorant Lineup Announced", 
    image: require("@/assets/valorantteam.jpg"), 
    date: "21st November 2024", 
    
  },
  { 
    id: 4, 
    title: "League of Legends Tournament Coming Up", 
    image: require("@/assets/lolteam.jpg"), 
    date: "19th October 2024", 
    
  },
]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.news-container {
  text-align: left;
  padding: 20px;
  width: 100%;
  margin-top: 100px;
  margin-left: 110px;
}

.news-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

.news-subtitle {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 20px;
  margin-top: -20px;
  font-family: 'Poppins', sans-serif;
}

.news-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px; 
  overflow-x: auto; 
  padding-bottom: 10px;
}

.news-card {
  width: 100%;
  max-width: 370px;
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
}

.news-image {
  width: 100%;
  height: auto;
  max-height: 180px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}

.news-content {
  padding: 10px;
}

.news-headline {
  font-size: 1rem;
  font-weight: 600;
  color: #f472b6;
  font-family: 'Poppins', sans-serif;
}

.news-date {
  font-size: 0.9rem;
  color: #8ca0b3;
  margin-top: 5px;
  font-family: 'Poppins', sans-serif;
}


@media (max-width: 1024px) {
  .news-container {
    margin-left: 20px;
    margin-right: 20px;
  }

  .news-wrapper {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .news-container {
    margin-left: 10px;
    margin-right: 10px;
  }

  .news-title {
    font-size: 1.5rem;
  }

  .news-subtitle {
    font-size: 0.9rem;
  }

  .news-card {
    width: 100%;
    max-width: 320px;
  }
}

@media (max-width: 480px) {
  .news-title {
    font-size: 1.4rem;
  }

  .news-subtitle {
    font-size: 0.8rem;
  }

  .news-card {
    width: 100%;
    max-width: 300px;
  }
}
</style>
