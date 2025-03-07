<template>
    <form @submit.prevent="login" class="login-form">
      <h2>Login</h2>
      
      <label for="email">Email</label>
      <input type="email" id="email" v-model="form.email" required />
    
      <label for="password">Password</label>
      <input type="password" id="password" v-model="form.password" required />
    
      <button type="submit" :disabled="!form.email || !form.password">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          email: "",
          password: "",
        },
        errorMessage: "",
      };
    },
    methods: {
      login() {
 
        if (this.form.email === "test@example.com" && this.form.password === "password123") {
          this.$emit('login-success');
        } else {
          this.errorMessage = "Credenciais incorretas.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  .login-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 400px;
    margin: 50px auto;
    padding: 30px;
    background: linear-gradient(135deg, #6e7fdb, #3b4f91);
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    color: #f0f4f8;
    font-family: 'Poppins', sans-serif;
  }
  
  h2 {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 8px;
    color: #e0e6f1;
  }
  
  input {
    padding: 12px;
    border: 2px solid #2f3b5a;
    border-radius: 8px;
    background: transparent;
    color: #f0f4f8;
    font-size: 16px;
    font-weight: 300;
    transition: border-color 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: #a78bfa;
  }
  
  button {
    padding: 12px;
    background: #a78bfa;
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  button:hover {
    background-color: #f472b6;
  }
  
  button:focus {
    outline: none;
  }
  
  .error-message {
    color: #f44336;
    font-size: 14px;
    margin-top: 10px;
  }
  
  @media (max-width: 500px) {
    .login-form {
      padding: 20px;
      width: 90%;
    }
  }
  </style>
  