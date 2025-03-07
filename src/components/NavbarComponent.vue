<template>
    <nav class="navbar">
      <div class="nav-left">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'teams' }">Teams</router-link>
        <router-link :to="{ name: 'calendar' }">calendar</router-link>
        <router-link :to="{ name: 'news' }">News</router-link>
        <!--<router-link :to="{ name: 'merch' }">Merchandise</router-link>-->
      </div>
      <div class="nav-right">
       <!--<router-link :to="{ name: 'login' }">Login</router-link>-->
        <!--<router-link :to="{ name: 'register' }">Register</router-link>-->
      </div>
    </nav>
  </template>
  
  <style scoped>
 .navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  background: rgba(14, 17, 34, 0.95);
  backdrop-filter: blur(5px);
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-left {
  display: flex;
  gap: 40px;
  margin-left: 120px;
  flex-grow: 1;
}

.nav-right {
  display: flex;
  gap: 40px;
  margin-right: 180px;
  flex-shrink: 0;
}


.navbar a {
  color: #cbd5e1;
  text-decoration: none;
  font-size: 16px;
  font-family: 'Exo 2', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  white-space: nowrap;
}
  .navbar a:hover {
    color: #a78bfa;
    text-shadow: 0 0 8px rgba(167, 139, 250, 0.8);
  }
  
  .navbar a.router-link-exact-active {
    color: #f472b6;
    font-weight: bold;
    text-shadow: 0 0 12px rgba(244, 114, 182, 0.8);
  }
  </style>
  