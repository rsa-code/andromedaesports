<template>
    <footer class="footer">
      <p>&copy; 2025 Andromeda eSports. All rights reserved.</p>
      <div class="social-links">
        <a href="#" class="social-link">
          <img src="@/assets/twitter.svg" alt="Twitter" class="icon" />
        </a>
        <a href="#" class="social-link">
          <img src="@/assets/discord.svg" alt="Discord" class="icon" />
        </a>
        <a href="#" class="social-link">
          <img src="@/assets/instagram.svg" alt="Instagram" class="icon" />
        </a>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    width: 100%;
    padding: 20px;
    text-align: center;
    background: rgba(14, 17, 34, 1);
    backdrop-filter: blur(5px);
    color: #cbd5e1;
    font-size: 14px;
    position: relative;
    bottom: 0;
  }
  
  .social-links {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 15px;
  }
  
  .social-link {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  

  .icon {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease, filter 0.3s ease;
  }
  
  .social-link:hover .icon {
    transform: scale(1.2);
    filter: drop-shadow(0 0 8px rgba(182, 33, 137, 0.8));
  }
  </style>
  