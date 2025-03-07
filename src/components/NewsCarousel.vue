<template>
  <div class="carousel-wrapper-container">
    <!-- Carrossel -->
    <div class="carousel-container">
      <div class="carousel-wrapper" :style="{ transform: 'translateX(' + currentSlide * -100 + '%)' }">
        <div class="carousel-slide" v-for="(news, index) in newsItems" :key="index">
          <div class="news-item">
            <img :src="news.image" alt="news image" class="news-image" />
          </div>
        </div>
      </div>
      <button class="prev" @click="prevSlide">‹</button>
      <button class="next" @click="nextSlide">›</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      newsItems: [
        { 
          title: "Andromeda vence torneio de CS:GO", 
          image: require("@/assets/csgoteam.jpg")
        },
        { 
          title: "Novo jogador no time de Valorant", 
          image: require("@/assets/player1.png")
        },
        { 
          title: "Equipe se prepara para torneio internacional", 
          image: require("@/assets/deceitteam.jpg")
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.newsItems.length - 1) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      } else {
        this.currentSlide = this.newsItems.length - 1;
      }
    }
  }
};
</script>

<style scoped>
.carousel-wrapper-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-top: 100px;
}

.carousel-container {
  position: relative;
  width: 100%;
  max-width: 1600px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.carousel-wrapper {
  display: flex;
  transition: transform 0.6s ease-in-out;
}

.carousel-slide {
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.news-item {
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  object-position: center;
}


button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 12px;
  cursor: pointer;
  z-index: 10;
  border-radius: 10%;
  transition: background 0.3s ease;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

button:hover {
  background: rgba(0, 0, 0, 0.8);
}


@media (max-width: 1024px) {
  .news-item {
    height: 400px;
  }

  .news-image {
    max-height: 350px;
  }

  button {
    font-size: 1.8rem;
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .news-item {
    height: 300px;
  }

  .news-image {
    max-height: 250px;
  }

  button {
    font-size: 1.5rem;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .news-item {
    height: 250px;
  }

  .news-image {
    max-height: 200px;
  }

  button {
    font-size: 1.2rem;
    padding: 6px;
  }
}


</style>
