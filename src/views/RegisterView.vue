<template>
    <div class="register-view">
      <RegisterForm />
    </div>
  </template>
  
  <script setup>
import RegisterForm from "@/components/RegisterForm.vue";
</script>
  
  <style scoped>
  .register-view {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, #141932, #0b0f29);
  }

  @media (max-width: 500px) {
    .login-view {
      padding: 20px;
    }
  }
  </style>
  