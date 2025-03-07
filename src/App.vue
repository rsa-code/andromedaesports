<template>
    <div id="app">
    <NavbarComponent />

    <div class="router-view">
      <router-view />
    </div>

    <FooterComponent />
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.router-view {
  flex: 1;
}
body {
  background: radial-gradient(circle, #0a0f1e, #161b33);
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

html, body, #app {
  height: 100%;
  width: 100%;

}
</style>
