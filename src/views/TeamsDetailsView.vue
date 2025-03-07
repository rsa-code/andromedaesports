<template>
  <div v-if="team" class="team-details"> 
    <h1>{{ team.name }}</h1>

    <div class="players-list">
      <h2>Jogadores</h2>
      <div class="players">
        <div v-for="(player, index) in team.players" :key="index" class="player-card">
          <img :src="player.photo" alt="Player Image" class="player-photo" />
          <div class="overlay">
            <div class="player-info">
              <h3>{{ player.name }}</h3>
              <h4>{{ player.role }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading Team</p>
  </div>
</template>
  
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  
  const route = useRoute();
  const team = ref(null);
  
  const teams = [
    {
      id: 1,
      name: "Valorant",
      image: require("@/assets/valorantteam.jpg"),
      players: [
        { name: "Bits04", age: 24, role: "Duelista", photo: require("@/assets/player1.png") },
        { name: "Carlos", age: 27, role: "Controller", photo: require("@/assets/player2.png") },
        { name: "Rafael", age: 22, role: "Flex", photo: require("@/assets/player3.png") },
        { name: "Rafael", age: 22, role: "Initiator", photo: require("@/assets/player3.png") },
      ],
    },
    {
      id: 2,
      name: "CS:GO",
      image: require("@/assets/csgoteam.jpg"),
      players: [
        { name: "Felipe", age: 25, role: "Entry", photo: require("@/assets/player1.png") },
        { name: "Vinícius", age: 28, role: "IGL", photo: require("@/assets/player2.png") },
        { name: "Amanda", age: 23, role: "Lurker", photo: require("@/assets/player3.png") },
      ],
    },
  ];
  
  onMounted(() => {
    team.value = teams.find((t) => t.id === parseInt(route.params.id));
  });
  </script>

  
  <style scoped>
.team-details {
  text-align: center;
  color: white;
  margin-top: 130px;
}

.team-details h1 {
  font-family: Poppins;

}

.players-list {
  margin-top: 50px;
  margin-bottom: 100px;
}

.players {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  justify-items: center;
  margin: 0 auto;
  max-width: 1200px;
}

.player-card {
  background: linear-gradient(135deg, #3e4a64, #2c2f44);
  border-radius: 15px;
  padding: 20px;
  width: 250px;
  height: 350px;
  text-align: center;
  margin-top: 40px;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}



.player-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 0 12px rgba(244, 114, 182, 0.8);

}

.player-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.player-info h3 {
  font-size: 20px;
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
}

.player-info h4 {
  font-size: 15px;
  font-family: 'Poppins', sans-serif;
  color: rgb(197, 197, 197);
}

.player-info p {
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
}

h2 {
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
}

  </style>
  