<template>
    <form @submit.prevent="register" class="register-form">
      <h2>Create your account</h2>
      
      <label for="username">Username</label>
      <input type="text" id="username" v-model="form.username" required />
    
      <label for="email">Email</label>
      <input type="email" id="email" v-model="form.email" required />
    
      <label for="password">Password</label>
      <input type="password" id="password" v-model="form.password" required />
    
      <label for="confirmPassword">Repeat Password</label>
      <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
    
      <button type="submit" :disabled="!isValid">Register</button>
      <p v-if="passwordsMismatch" class="error-message">Passwords do not match!</p>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          username: "",
          email: "",
          password: "",
          confirmPassword: ""
        }
      };
    },
    computed: {
      isValid() {
        return this.form.password && this.form.confirmPassword && this.form.password === this.form.confirmPassword;
      },
      passwordsMismatch() {
        return this.form.password && this.form.confirmPassword && this.form.password !== this.form.confirmPassword;
      }
    },
    methods: {
      register() {
        if (this.isValid) {
          console.log("Registing:", this.form);
          // Aqui pode ser feita a integração com Firebase ou backend
        } else {
          console.log("Passwords do not match!");
        }
      }
    }
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.register-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 100%;
  width: 400px;
  margin: 50px auto;
  margin-top: 120px;
  padding: 30px;
  background: linear-gradient(135deg, #6e7fdb, #3b4f91);
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  color: #f0f4f8;
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  min-width: 320px;
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

@media (max-width: 768px) {
  .register-form {
    width: 80%;
    padding: 20px;
  }

  h2 {
    font-size: 20px;
  }
}

@media (max-width: 500px) {
  .register-form {
    width: 90%;
    padding: 15px;
  }

  h2 {
    font-size: 18px;
  }

  input {
    padding: 10px;
  }

  button {
    padding: 10px;
  }
}
</style>