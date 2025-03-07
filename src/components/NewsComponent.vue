<template>
  <div class="news-card" @click="openNews">
    <img :src="news.image" alt="news image" class="news-image" />
    <div class="news-content">
      <h3 class="news-headline">{{ news.title }}</h3>
      <p class="news-date">{{ news.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    news: Object,
  },
  methods: {
    openNews() {
      this.$router.push({ name: "news-details", params: { id: this.news.id } });
    },
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

.news-card {
  width: 100%;
  max-width: 370px;
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(5px);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

.news-card:hover {
  transform: translateY(-5px);
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
}

.news-date {
  font-size: 0.9rem;
  color: #8ca0b3;
  margin-top: 5px;
}
</style>
