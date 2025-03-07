<template>
    <div class="login-view">
      <h1>Bem-vindo ao Andromeda eSports</h1>
      <LoginForm @login-success="onLoginSuccess" />
    </div>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  import LoginForm from "@/components/LoginForm.vue";
  
  const router = useRouter();
  
  const onLoginSuccess = () => {
    router.push({ name: "/" });
  };
  </script>
  
  <style scoped>
  .login-view {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom, #141932, #0b0f29);
    color: #f0f4f8;
  }
  
  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
  }
  
  @media (max-width: 500px) {
    .login-view {
      padding: 20px;
    }
  }
  </style>
  