<template>
    <div class="calendar">
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
  </template>
  
  <script>
  export default {
    props: {
      matches: Array
    }
  };
  </script>
  
  <style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
}

.match-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #3e4a64, #2c2f44);
  border-radius: 12px;
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  max-width: 350px;
  text-align: center;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  font-family: "Poppins", sans-serif;
}

.match-date {
  font-size: 18px;
  font-weight: bold;
  color: #f472b6;
}

.match-time {
  font-size: 16px;
  font-weight: normal;
  color: #a3bffa;
  margin-bottom: 10px;
}

.teams {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.team {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
}

.team p {
  font-size: 14px;
  font-weight: bold;
}

.vs {
  font-size: 20px;
  font-weight: bold;
  color: #f472b6;
  margin-left: 5px;
}

/* Responsividade */
@media (max-width: 1024px) {
  .match-card {
    max-width: 80%;
    width: 100%;
  }

  .team-logo {
    width: 45px;
    height: 45px;
  }

  .match-date {
    font-size: 16px;
  }

  .match-time {
    font-size: 14px;
  }

  .vs {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .match-card {
    max-width: 90%;
    width: 100%;
  }

  .team-logo {
    width: 40px;
    height: 40px;
  }

  .match-date {
    font-size: 14px;
  }

  .match-time {
    font-size: 12px;
  }

  .vs {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .match-card {
    max-width: 100%;
    width: 100%;
  }

  .team-logo {
    width: 35px;
    height: 35px;
  }

  .match-date {
    font-size: 12px;
  }

  .match-time {
    font-size: 12px;
  }

  .vs {
    font-size: 14px;
  }
}
</style>
