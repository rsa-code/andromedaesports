<template>
  <div class="calendar-view">
    <h1>Calendário de Jogos</h1>

    <div class="modality-container">
      <div class="modality-section" v-for="(matches, modality) in groupedMatches" :key="modality">
        <h2>{{ modality }}</h2>

        <swiper
  v-if="matches.length > 3"
  :slides-per-view="3"
  :space-between="20"
  :navigation="true"
  :pagination="{ clickable: true }"
  :breakpoints="{
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 2 },
    480: { slidesPerView: 1 }
  }"
  class="matches-slider"
>

          <swiper-slide v-for="(match, index) in matches" :key="index">
            <div class="match-card">
              <div class="match-date">{{ match.date }}</div>
              <div class="match-time">{{ match.time }}</div>
              <div class="teams">
                <div class="team">
                  <img :src="match.team1.logo" :alt="match.team1.name" class="team-logo" />
                  <p>{{ match.team1.name }}</p>
                </div>
                <span class="vs">VS</span>
                <div class="team">
                  <img :src="match.team2.logo" :alt="match.team2.name" class="team-logo" />
                  <p>{{ match.team2.name }}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        
        <div v-else class="matches">
          <div v-for="(match, index) in matches" :key="index" class="match-card">
            <div class="match-date">{{ match.date }}</div>
            <div class="match-time">{{ match.time }}</div>
            <div class="teams">
              <div class="team">
                <img :src="match.team1.logo" :alt="match.team1.name" class="team-logo" />
                <p>{{ match.team1.name }}</p>
              </div>
              <span class="vs">VS</span>
              <div class="team">
                <img :src="match.team2.logo" :alt="match.team2.name" class="team-logo" />
                <p>{{ match.team2.name }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const matches = ref([
  { date: "2025-03-05", time: "18:00", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Alpha", logo: require("@/assets/unknownopponent.png") }, modality: "Valorant" },
  { date: "2025-03-10", time: "20:30", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Beta", logo: require("@/assets/unknownopponent.png") }, modality: "CS2" },
  { date: "2025-03-15", time: "17:00", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Gamma", logo: require("@/assets/unknownopponent.png") }, modality: "Valorant" },
  { date: "2025-03-15", time: "21:45", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Gamma", logo: require("@/assets/unknownopponent.png") }, modality: "LoL" },
  { date: "2025-03-15", time: "16:30", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Gamma", logo: require("@/assets/unknownopponent.png") }, modality: "Valorant" },
  { date: "2025-03-15", time: "16:30", team1: { name: "Andromeda", logo: require("@/assets/andromeda-logo.png") }, team2: { name: "Team Gamma", logo: require("@/assets/unknownopponent.png") }, modality: "Valorant" },
]);

const groupedMatches = computed(() => {
  return matches.value.reduce((acc, match) => {
    if (!acc[match.modality]) {
      acc[match.modality] = [];
    }
    acc[match.modality].push(match);
    return acc;
  }, {});
});
</script>

<style scoped>
.calendar-view {
  text-align: left; 
  color: white;
  margin-top: 100px;
  padding-left: 20px;
}

h1 {
  font-size: 32px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 25px;
  margin-left: 130px;
}

.modality-container {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 30px;
  margin-bottom: 50px;
}

h2 {
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: #ffffff;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-left: 140px;
}

.matches {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 120px;
  gap: 40px;
}

.matches-slider {
  width: 90%;
  margin: 0 auto;
}

.match-card {
  background: linear-gradient(135deg, #3e4a64, #2c2f44);
  border-radius: 12px;
  padding: 20px;
  text-align: center; 
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  font-family: "Poppins", sans-serif;
  width: 350px;
  margin: 10px;
}

.match-date {
  font-size: 18px;
  font-weight: bold;
  color: #f472b6;
  margin-bottom: 5px;
}

.match-time {
  font-size: 16px;
  font-weight: normal;
  color: #a3bffa;
  margin-bottom: 10px;
}

.teams {
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-top: 10px;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 5px;
}

.team p {
  font-size: 14px;
  font-weight: bold;
}

.vs {
  font-size: 22px;
  font-weight: bold;
  color: #f472b6;
  align-self: center;
}

.matches-slider {
  width: 85%;
  margin: 0 auto;
  position: relative;
}

.swiper-button-prev,
.swiper-button-next {
  color: #3b82f6;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  transform: scale(1.2);
}

.swiper-slide {
  cursor: pointer;
}

.swiper-button-prev {
  left: -50px;
}

.swiper-button-next {
  right: -50px; 
}

@media (max-width: 1024px) {
  .swiper-button-prev {
    left: -30px;
  }

  .swiper-button-next {
    right: -30px;
  }
}

@media (max-width: 768px) {
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}


@media (max-width: 1024px) {
  .calendar-view {
    margin-top: 50px;
  }

  h1 {
    font-size: 28px;
  }
}

@media (max-width: 768px) {
  .calendar-view {
    margin-top: 40px;
  }

  h1 {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .calendar-view {
    margin-top: 30px;
  }

  h1 {
    font-size: 22px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
