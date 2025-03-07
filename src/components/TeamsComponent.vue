<template>
    <div class="team-card" @click="handleClick">
      <img :src="team.image" alt="Team Image" class="team-image" />
      <div class="overlay"></div>
      <h3 class="team-name">{{ team.name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    name: "TeamsComponent",
    props: {
      team: Object
    },
    methods: {
      handleClick() {
        this.$emit("click");
      }
    }
  };
  </script>
  
  <style scoped>

  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@600&display=swap");
  
  .team-card {
    position: relative;
    background-color: #2d3748;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: white;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: center;
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: left;
    overflow: hidden;
  }
  
  .team-card:hover {
    transform: translateY(-5px);
    box-shadow:  0 0 12px rgba(244, 114, 182, 0.8);
  }
  
  .team-image {
    width: 100%;
    height: 85%; 
    object-fit: cover;
    border-radius: 8px;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%; 
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
  
  .team-name {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 22px;
    font-weight: bold;
    color: white;
    z-index: 1;
    font-family: "Rajdhani", sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }
  
  @media (max-width: 768px) {
    .team-card {
      width: 220px;
      height: 320px;
    }
  
    .team-name {
      font-size: 20px;
    }
  }
  </style>
  