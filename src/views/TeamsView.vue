<template>
  <div class="teams-view">
    <h1>Modalidades</h1>
    <div class="teams-list">
      <TeamsComponent
        v-for="team in teams"
        :key="team.id"
        :team="team"
        @click="goToTeamDetails(team.id)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import TeamsComponent from "@/components/TeamsComponent.vue";

const router = useRouter();

const teams = ref([
  { id: 1, name: "Valorant", image: require("@/assets/valorantteam.jpg") },
  { id: 2, name: "CS:GO", image: require("@/assets/csgoteam.jpg") },
  { id: 3, name: "LOL", image: require("@/assets/lolteam.jpg") },
  { id: 4, name: "Deceit", image: require("@/assets/deceitteam.jpg") }
]);

const goToTeamDetails = (id) => {
  router.push({ name: "team-details", params: { id } });
};
</script>


  
  <style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');


  .teams-view {
  padding: 40px 20px; 
  text-align: left;
  margin-bottom: 50px; 
  margin-top: 95px;
  margin-right: 610px;
}

  
  h1 {
    font-size: 32px;
    color: white;
    font-family: Poppins;
    margin-top: -35px;
    margin-bottom: 55px;
    margin-left: 130px;
  }
  
  .teams-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 125px;
  padding: 10px;
  max-width: 1000px;
  margin: 0 auto;
}

.team-card {
  width: 260px;
  margin: 5px;
}



  
  @media (max-width: 768px) {
    .teams-list {
      justify-content: left; 
    }
  }
  </style>
  